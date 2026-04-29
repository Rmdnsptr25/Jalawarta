import { Edit3, Trash2, ExternalLink, Plus, Search, MoreVertical, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { projectId, publicAnonKey } from "/utils/supabase/info";
import { supabase } from "../lib/supabase";

import { ConfirmModal } from "./ConfirmModal";

interface PostListPageProps {
  setActivePage: (page: string) => void;
  colors?: any;
}

interface Post {
  id: string;
  title: string;
  category: string;
  featuredImage: string;
  authorName: string;
  createdAt: number;
}

export function PostListPage({ setActivePage, colors }: PostListPageProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<Post | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-038ff37a/posts`, {
        headers: {
          "Authorization": `Bearer ${publicAnonKey}`
        }
      });
      const data = await res.json();
      if (res.ok) {
        setPosts(data.posts || []);
      } else {
        throw new Error(data.error);
      }
    } catch (err: any) {
      toast.error("Gagal Memuat Berita", { description: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const confirmDelete = (post: Post) => {
    setPostToDelete(post);
    setDeleteModalOpen(true);
  };

  const handleDelete = async () => {
    if (!postToDelete) return;
    
    setIsDeleting(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error("Silakan login kembali.");

      const res = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-038ff37a/posts/${postToDelete.id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${session.access_token}`
        }
      });
      if (!res.ok) throw new Error("Gagal menghapus berita");
      
      toast.success("Berita Berhasil Dihapus", { description: "Berita telah dihapus permanen" });
      setPosts(posts.filter(p => p.id !== postToDelete.id));
    } catch (err: any) {
      toast.error("Gagal", { description: err.message });
    } finally {
      setIsDeleting(false);
      setDeleteModalOpen(false);
      setPostToDelete(null);
    }
  };

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Header Title & Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-1">
            Daftar Berita
          </h2>
          <p className="text-slate-500 text-base">
            {posts.length} artikel tersimpan di database
          </p>
        </div>
        <button
          onClick={() => setActivePage("Create New Post")}
          className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium shadow-md shadow-blue-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all w-fit bg-gradient-to-r from-blue-500 to-indigo-600"
        >
          <Plus size={20} />
          Tulis Berita Baru
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative w-full md:w-96">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari berdasarkan judul atau kategori..."
            className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border-none rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-slate-700 placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Posts Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-64">
            <Loader2 className="animate-spin text-blue-500 mb-4" size={32} />
            <p className="text-slate-500">Memuat data berita...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
              <Edit3 size={24} className="text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">Belum ada berita</h3>
            <p className="text-slate-500 max-w-sm mt-1">Buat berita pertama Anda untuk mulai mengisi blog atau portal informasi Anda.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Judul Artikel
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Kategori
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Penulis
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Tanggal
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredPosts.map((post) => (
                  <tr
                    key={post.id}
                    className="hover:bg-slate-50/80 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-100 overflow-hidden shrink-0">
                          {post.featuredImage ? (
                            <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-300">
                              <Edit3 size={20} />
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-800 line-clamp-1">
                            {post.title || "Tanpa Judul"}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
                        {post.category || "Uncategorized"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {post.authorName}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {new Date(post.createdAt).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                      })}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <ExternalLink size={16} />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Edit3 size={16} />
                        </button>
                        <button 
                          onClick={() => confirmDelete(post)}
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <ConfirmModal
        isOpen={deleteModalOpen}
        title="Hapus Berita?"
        message={`Apakah Anda yakin ingin menghapus "${postToDelete?.title || "berita ini"}"? Berita yang dihapus tidak dapat dikembalikan.`}
        confirmText="OK"
        cancelText="Cancel"
        onConfirm={handleDelete}
        onCancel={() => setDeleteModalOpen(false)}
        isLoading={isDeleting}
        isDestructive={true}
      />
    </div>
  );
}