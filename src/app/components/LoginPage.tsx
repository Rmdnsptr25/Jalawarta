import { useState } from "react";
import { Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "../lib/supabase";
import { projectId, publicAnonKey } from "/utils/supabase/info";

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      toast.error("Validasi Gagal", {
        description: "Email dan password wajib diisi.",
      });
      return;
    }
    
    if (activeTab === "register" && !fullName.trim()) {
      toast.error("Validasi Gagal", {
        description: "Nama lengkap wajib diisi.",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      if (activeTab === "login") {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;
        
        toast.success("Login Berhasil", {
          description: "Selamat datang kembali di Jalawarta Dashboard.",
        });
        onLogin();
      } else {
        // Daftar menggunakan endpoint server khusus
        const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-038ff37a/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify({ email, password, fullName }),
        });

        const rawText = await response.text();
        let data: any = {};
        try {
          data = JSON.parse(rawText);
        } catch (e) {
          throw new Error(`Server returned non-JSON: ${rawText.substring(0, 50)}`);
        }

        if (!response.ok) {
          throw new Error(data.error || data.message || `Server error ${response.status}: ${JSON.stringify(data)}`);
        }

        // Auto login setelah daftar berhasil
        const { error: loginError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (loginError) throw loginError;

        toast.success("Yeay! Akun Berhasil Dibuat 🎉", {
          description: "Selamat datang di Jalawarta. Anda telah otomatis masuk ke Dashboard.",
        });
        onLogin();
      }
    } catch (err: any) {
      let errorMsg = err.message || "Mohon periksa kembali data Anda.";
      
      toast.error("Terjadi Kesalahan", {
        description: `[Debug] ${errorMsg}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      if (error) throw error;
    } catch (err: any) {
      toast.error("Login Google Gagal", {
        description: err.message || "Pastikan konfigurasi OAuth Google sudah diset di Supabase.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-['Inter',sans-serif]">
      <div className="sm:mx-auto sm:w-full sm:max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex justify-center">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-white shadow-xl bg-gradient-to-br from-blue-500 to-blue-700">
            <span className="text-2xl tracking-tighter">JW</span>
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-slate-900">
          Jalawarta CMS
        </h2>
        <p className="mt-2 text-center text-sm text-slate-500 font-medium">
          Dashboard Manajemen Konten Modern
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md animate-in fade-in zoom-in-95 duration-700 delay-150">
        <div className="bg-white py-8 px-4 shadow-xl shadow-slate-200/50 sm:rounded-3xl sm:px-10 border border-slate-100">
          
          {/* Tabs */}
          <div className="flex p-1 bg-slate-100 rounded-xl mb-8">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                activeTab === "login"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Masuk
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                activeTab === "register"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Daftar
            </button>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {activeTab === "register" && (
              <div className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-300">
                <label className="text-sm font-semibold text-slate-700">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="block w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Alamat Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 py-3 text-sm placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
                  placeholder="admin@jalawarta.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-slate-700">
                  Password
                </label>
                {activeTab === "login" && (
                  <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
                    Lupa password?
                  </a>
                )}
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 py-3 text-sm placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative flex w-full justify-center rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-semibold text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-500/30"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <span className="flex items-center gap-2">
                    {activeTab === "login" ? "Masuk ke Dashboard" : "Buat Akun"}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </button>
            </div>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-3 text-slate-500 font-medium">
                  Atau lanjutkan dengan
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                  <path
                    d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.26538 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                    fill="#34A853"
                  />
                </svg>
                <span className="text-sm font-semibold">Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}