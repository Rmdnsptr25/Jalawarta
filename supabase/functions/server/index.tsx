import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js";
import * as kv from "./kv_store.tsx";

const app = new Hono();

const BUCKET_NAME = "make-038ff37a-media";

let bucketEnsured = false;
async function ensureBucketExists(supabase: any) {
  if (bucketEnsured) return;
  try {
    const { data: buckets } = await supabase.storage.listBuckets();
    const bucketExists = buckets?.some((bucket: any) => bucket.name === BUCKET_NAME);
    if (!bucketExists) {
      await supabase.storage.createBucket(BUCKET_NAME);
    }
    bucketEnsured = true;
  } catch (e) {
    console.error("Failed to ensure bucket exists:", e);
  }
}

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-038ff37a/health", (c) => {
  return c.json({ status: "ok" });
});

// Signup route bypassing email confirmation
app.post("/make-server-038ff37a/signup", async (c) => {
  try {
    const { email, password, fullName } = await c.req.json();
    
    if (!email || !password) {
      return c.json({ error: "Email and password are required" }, 400);
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    
    if (!supabaseUrl || !serviceRoleKey) {
      console.error("Missing environment variables for Supabase");
      return c.json({ error: "Server configuration error" }, 500);
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey);
    
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name: fullName || email.split('@')[0] },
      // Automatically confirm the user's email since an email server hasn't been configured.
      email_confirm: true
    });

    if (error) {
      console.error("Error creating user:", error);
      return c.json({ error: error.message }, 400);
    }

    return c.json({ user: data.user });
  } catch (err) {
    console.error("Signup exception:", err);
    return c.json({ error: "Internal server error during signup" }, 500);
  }
});

app.post("/make-server-038ff37a/upload", async (c) => {
  try {
    const accessToken = c.req.header("Authorization")?.split(" ")[1];
    if (!accessToken) return c.json({ error: "Unauthorized" }, 401);
    
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    const supabase = createClient(supabaseUrl!, serviceRoleKey!);
    
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    if (authError || !user) return c.json({ error: "Unauthorized" }, 401);

    await ensureBucketExists(supabase);

    const body = await c.req.parseBody();
    const file = body['file'];
    
    if (!file || !(file instanceof File)) {
      return c.json({ error: "No valid file uploaded" }, 400);
    }

    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    
    const arrayBuffer = await file.arrayBuffer();
    const fileData = new Uint8Array(arrayBuffer);

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(fileName, fileData, {
        contentType: file.type,
        upsert: false
      });

    if (uploadError) {
      console.error("Storage upload error:", uploadError);
      return c.json({ error: "Failed to upload file to storage" }, 500);
    }

    const { data: signedData, error: signedError } = await supabase.storage
      .from(BUCKET_NAME)
      .createSignedUrl(fileName, 60 * 60 * 24 * 365); // Valid for 1 year

    if (signedError) {
      console.error("Failed to sign url:", signedError);
      return c.json({ error: "Failed to generate signed URL" }, 500);
    }

    return c.json({ 
      success: true, 
      fileName: fileName,
      url: signedData.signedUrl 
    });
  } catch (err: any) {
    console.error("Upload endpoint exception:", err);
    return c.json({ error: err.message || "Internal server error during upload" }, 500);
  }
});

app.get("/make-server-038ff37a/media", async (c) => {
  try {
    const accessToken = c.req.header("Authorization")?.split(" ")[1];
    if (!accessToken) return c.json({ error: "Unauthorized" }, 401);

    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    const supabase = createClient(supabaseUrl!, serviceRoleKey!);
    
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    if (authError || !user) return c.json({ error: "Unauthorized" }, 401);

    await ensureBucketExists(supabase);

    const { data: files, error: listError } = await supabase.storage
      .from(BUCKET_NAME)
      .list();

    if (listError) {
      return c.json({ error: "Failed to list media" }, 500);
    }

    const validFiles = (files || []).filter(f => f.name !== '.emptyFolderPlaceholder');
    const fileWithUrls = await Promise.all(
      validFiles.map(async (file) => {
        const { data } = await supabase.storage
          .from(BUCKET_NAME)
          .createSignedUrl(file.name, 60 * 60 * 24 * 365); // 1 year
        return {
          name: file.name,
          id: file.id,
          size: file.metadata?.size,
          created_at: file.created_at,
          url: data?.signedUrl
        };
      })
    );

    // Sort by created_at desc
    fileWithUrls.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

    return c.json({ media: fileWithUrls });
  } catch (err: any) {
    console.error("List media exception:", err);
    return c.json({ error: err.message }, 500);
  }
});

app.delete("/make-server-038ff37a/media/:fileName", async (c) => {
  try {
    const fileName = c.req.param("fileName");
    if (!fileName) return c.json({ error: "Filename is required" }, 400);

    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    const supabase = createClient(supabaseUrl!, serviceRoleKey!);
    await ensureBucketExists(supabase);

    const { error } = await supabase.storage.from(BUCKET_NAME).remove([fileName]);
    
    if (error) {
      console.error("Delete media error:", error);
      return c.json({ error: "Failed to delete media" }, 500);
    }
    
    return c.json({ success: true });
  } catch (err: any) {
    return c.json({ error: err.message }, 500);
  }
});

app.get("/make-server-038ff37a/posts", async (c) => {
  try {
    const posts = await kv.getByPrefix("post_");
    return c.json({ posts: posts.sort((a, b) => b.createdAt - a.createdAt) });
  } catch (err: any) {
    return c.json({ error: err.message }, 500);
  }
});

app.post("/make-server-038ff37a/posts", async (c) => {
  try {
    const accessToken = c.req.header("Authorization")?.split(" ")[1];
    if (!accessToken) return c.json({ error: "Unauthorized" }, 401);
    
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    const supabase = createClient(supabaseUrl!, serviceRoleKey!);
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    if (authError || !user) return c.json({ error: "Unauthorized" }, 401);

    const body = await c.req.json();
    const id = body.id || `post_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    const post = {
      ...body,
      id,
      authorId: user.id,
      authorName: user.user_metadata?.name || user.email,
      createdAt: body.createdAt || Date.now(),
      updatedAt: Date.now(),
    };
    
    await kv.set(id, post);
    return c.json({ success: true, post });
  } catch (err: any) {
    return c.json({ error: err.message }, 500);
  }
});

app.delete("/make-server-038ff37a/posts/:id", async (c) => {
  try {
    const accessToken = c.req.header("Authorization")?.split(" ")[1];
    if (!accessToken) return c.json({ error: "Unauthorized" }, 401);
    
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    const supabase = createClient(supabaseUrl!, serviceRoleKey!);
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    if (authError || !user) return c.json({ error: "Unauthorized" }, 401);

    const id = c.req.param("id");
    await kv.del(id);
    return c.json({ success: true });
  } catch (err: any) {
    return c.json({ error: err.message }, 500);
  }
});

app.get("/make-server-038ff37a/posts", async (c) => {
  try {
    const posts = await kv.getByPrefix("post_");
    return c.json({ posts: posts.sort((a, b) => b.createdAt - a.createdAt) });
  } catch (err: any) {
    return c.json({ error: err.message }, 500);
  }
});

app.post("/make-server-038ff37a/posts", async (c) => {
  try {
    const accessToken = c.req.header("Authorization")?.split(" ")[1];
    if (!accessToken) return c.json({ error: "Unauthorized" }, 401);
    
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    const supabase = createClient(supabaseUrl!, serviceRoleKey!);
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    if (authError || !user) return c.json({ error: "Unauthorized" }, 401);

    const body = await c.req.json();
    const id = body.id || `post_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    const post = {
      ...body,
      id,
      authorId: user.id,
      authorName: user.user_metadata?.name || user.email,
      createdAt: body.createdAt || Date.now(),
      updatedAt: Date.now(),
    };
    
    await kv.set(id, post);
    return c.json({ success: true, post });
  } catch (err: any) {
    return c.json({ error: err.message }, 500);
  }
});

app.delete("/make-server-038ff37a/posts/:id", async (c) => {
  try {
    const accessToken = c.req.header("Authorization")?.split(" ")[1];
    if (!accessToken) return c.json({ error: "Unauthorized" }, 401);
    
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    const supabase = createClient(supabaseUrl!, serviceRoleKey!);
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    if (authError || !user) return c.json({ error: "Unauthorized" }, 401);

    const id = c.req.param("id");
    await kv.del(id);
    return c.json({ success: true });
  } catch (err: any) {
    return c.json({ error: err.message }, 500);
  }
});

Deno.serve(app.fetch);