import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { toast } from "sonner";
import { User, Mail, Lock, Shield, Loader2, Save } from "lucide-react";

export function ProfilePage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setEmail(user.email || "");
        setFullName(user.user_metadata?.name || "");
      }
      setIsFetching(false);
    };
    fetchUser();
  }, []);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const updates: any = {};
      if (password) updates.password = password;
      if (fullName) updates.data = { name: fullName };
      if (email) updates.email = email;

      const { error } = await supabase.auth.updateUser(updates);

      if (error) throw error;

      toast.success("Profil Diperbarui", {
        description: "Data diri dan pengaturan keamanan Anda telah disimpan.",
      });
      setPassword(""); // Clear password field after update
    } catch (err: any) {
      toast.error("Pembaruan Gagal", {
        description: err.message || "Terjadi kesalahan saat memperbarui profil.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return (
      <div className="flex h-full items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="max-w-[1000px] mx-auto space-y-8 animate-in fade-in duration-300 pb-12">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight">
          Pengaturan Profil
        </h2>
        <p className="mt-2 text-slate-500 font-medium">
          Kelola informasi pribadi dan keamanan akun Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-1">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <User size={20} className="text-blue-600" />
            Informasi Dasar
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Perbarui nama lengkap dan alamat email yang Anda gunakan untuk masuk ke Jalawarta CMS.
          </p>
        </div>

        <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60">
          <form onSubmit={handleUpdateProfile} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Nama Lengkap</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="block w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-4 py-3 text-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Alamat Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-4 py-3 text-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                  placeholder="admin@jalawarta.com"
                />
              </div>
              <p className="text-xs text-amber-600 font-medium flex items-center gap-1.5 mt-2">
                <Shield size={14} />
                Mengubah email mungkin memerlukan verifikasi.
              </p>
            </div>

            <hr className="border-slate-100" />

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Kata Sandi Baru</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-4 py-3 text-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                  placeholder="Kosongkan jika tidak ingin mengubah"
                />
              </div>
              <p className="text-xs text-slate-500 font-medium mt-2">
                Gunakan minimal 8 karakter dengan kombinasi angka dan huruf.
              </p>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 disabled:opacity-70"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <Save size={18} />
                    Simpan Perubahan
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}