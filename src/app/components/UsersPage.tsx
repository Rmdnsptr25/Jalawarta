import { useState } from "react";
import { ArrowLeft, Plus } from "lucide-react";
import { toast } from "sonner";

interface UserItem {
  id: string;
  email: string;
  username: string;
  fullName: string;
  role: string;
  joinedAt: string;
}

interface ViewProps {
  onViewChange: (view: "list" | "add") => void;
  users?: UserItem[];
  onAddUser?: (user: UserItem) => void;
}

function UsersList({ onViewChange, users = [] }: ViewProps) {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-2">
            Anggota Tim
          </h2>
          <p className="text-slate-500 text-[15px] font-medium">
            Kelola akses dan peran anggota di portal berita Anda.
          </p>
        </div>
        <button 
          onClick={() => onViewChange("add")}
          className="bg-[#3b82f6] hover:bg-blue-600 text-white font-bold py-3.5 px-6 rounded-[14px] flex items-center gap-2 shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5"
        >
          <Plus size={20} strokeWidth={2.5} />
          Tambah Anggota
        </button>
      </div>

      {/* Table Area */}
      <div className="bg-white rounded-[24px] shadow-sm border border-slate-200/60 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[800px]">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-8 py-5 text-[11px] font-bold text-slate-500 tracking-widest uppercase w-1/4">USER</th>
                <th className="px-8 py-5 text-[11px] font-bold text-slate-500 tracking-widest uppercase w-1/6">USERNAME</th>
                <th className="px-8 py-5 text-[11px] font-bold text-slate-500 tracking-widest uppercase w-1/6">ROLE</th>
                <th className="px-8 py-5 text-[11px] font-bold text-slate-500 tracking-widest uppercase w-1/6">STATUS</th>
                <th className="px-8 py-5 text-[11px] font-bold text-slate-500 tracking-widest uppercase w-1/6">JOINED AT</th>
                <th className="px-8 py-5 text-[11px] font-bold text-slate-500 tracking-widest uppercase w-1/6">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-8 py-32 text-center border-b border-slate-100/50">
                    <p className="text-[15px] font-medium text-slate-400">Belum ada anggota lain di tim Anda.</p>
                  </td>
                </tr>
              ) : (
                users.map(user => (
                  <tr key={user.id} className="border-b border-slate-100/50 hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-4">
                      <div className="font-bold text-slate-800 text-[14px]">{user.fullName}</div>
                      <div className="text-slate-500 text-[13px]">{user.email}</div>
                    </td>
                    <td className="px-8 py-4 font-medium text-slate-600 text-[14px]">
                      {user.username}
                    </td>
                    <td className="px-8 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-8 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600">
                        Aktif
                      </span>
                    </td>
                    <td className="px-8 py-4 text-[13px] text-slate-500">
                      {user.joinedAt}
                    </td>
                    <td className="px-8 py-4">
                      <button className="text-blue-600 hover:text-blue-700 text-[13px] font-bold transition-colors">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function UsersAdd({ onViewChange, onAddUser }: ViewProps) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Writer");

  const roles = [
    {
      id: "Editor",
      desc: "Dapat mengelola semua konten (berita, laman, kategori)."
    },
    {
      id: "Writer",
      desc: "Hanya dapat mengelola berita miliknya sendiri."
    },
    {
      id: "Subscriber",
      desc: "Hanya dapat mengelola profil sendiri."
    },
    {
      id: "Super Admin",
      desc: "Kontrol penuh terhadap pengaturan tenant dan anggota."
    }
  ];

  const handleSave = () => {
    if (!email.trim() || !username.trim() || !password.trim()) {
      toast.error("Gagal menambahkan anggota", {
        description: "Mohon isi semua field yang ditandai dengan tanda bintang (*)."
      });
      return;
    }
    
    if (onAddUser) {
      onAddUser({
        id: Math.random().toString(36).substring(7),
        email,
        username,
        fullName: fullName || username,
        role,
        joinedAt: new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })
      });
    }

    toast.success("Anggota Ditambahkan", {
      description: `${username} telah berhasil diundang sebagai ${role}.`
    });
    onViewChange("list");
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <button 
          onClick={() => onViewChange("list")}
          className="text-[13px] font-bold text-slate-400 hover:text-slate-600 flex items-center gap-2 transition-colors w-fit group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Kembali ke Daftar Anggota
        </button>
        <div>
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-2">
            Tambah Anggota Tim
          </h2>
          <p className="text-slate-500 text-[15px] font-medium">
            Undang rekan kerja Anda untuk berkolaborasi mengelola portal berita.
          </p>
        </div>
      </div>

      {/* Form Area */}
      <div className="bg-white rounded-[24px] p-8 sm:p-10 shadow-sm border border-slate-200/60 max-w-[840px]">
        <div className="space-y-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Email Address */}
            <div className="space-y-2.5">
              <label className="text-[13px] font-bold text-slate-700 tracking-wide">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@email.com"
                className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800 placeholder:text-slate-400"
              />
            </div>
            
            {/* Username */}
            <div className="space-y-2.5">
              <label className="text-[13px] font-bold text-slate-700 tracking-wide">
                Username <span className="text-red-500">*</span>
              </label>
              <input 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin@jalawarta.local"
                className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800 placeholder:text-slate-400"
              />
            </div>

            {/* Nama Lengkap */}
            <div className="space-y-2.5">
              <label className="text-[13px] font-bold text-slate-700 tracking-wide">
                Nama Lengkap
              </label>
              <input 
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Nama Lengkap Admin"
                className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800 placeholder:text-slate-400"
              />
            </div>

            {/* Display Name */}
            <div className="space-y-2.5">
              <label className="text-[13px] font-bold text-slate-700 tracking-wide">
                Nama Publik (Display Name)
              </label>
              <input 
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Nama yang muncul di berita"
                className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800 placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2.5 pt-2">
            <label className="text-[13px] font-bold text-slate-700 tracking-wide">
              Password <span className="text-red-500">*</span>
            </label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••"
              className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800 placeholder:text-slate-400 tracking-widest"
            />
            <p className="text-[12px] font-medium text-slate-400 mt-2">
              User akan menggunakan email/username dan password ini untuk login.
            </p>
          </div>
        </div>

        {/* Roles Selection */}
        <div className="space-y-4 mb-8">
          <label className="text-[13px] font-bold text-slate-800 tracking-wide">
            Pilih Peran (Role)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {roles.map((r) => (
              <div 
                key={r.id}
                onClick={() => setRole(r.id)}
                className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${
                  role === r.id 
                    ? "border-[#3b82f6] bg-blue-50/30" 
                    : "border-slate-100 hover:border-slate-200"
                }`}
              >
                <h4 className="text-[15px] font-bold text-slate-800 mb-1.5">{r.id}</h4>
                <p className="text-[13px] font-medium text-slate-500 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button 
          onClick={handleSave}
          className="w-full py-4 bg-[#3b82f6] hover:bg-blue-600 text-white font-bold rounded-xl shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5 text-[15px]"
        >
          Tambah ke Tim
        </button>
      </div>
    </div>
  );
}

export function UsersPage() {
  const [view, setView] = useState<"list" | "add">("list");
  const [users, setUsers] = useState<UserItem[]>([
    {
      id: "u1",
      email: "admin@jalawarta.com",
      username: "admin_jalawarta",
      fullName: "Admin Jalawarta",
      role: "Super Admin",
      joinedAt: "10 April 2026"
    }
  ]);

  const handleAddUser = (newUser: UserItem) => {
    setUsers(prev => [newUser, ...prev]);
  };

  return (
    <div className="max-w-[1400px] mx-auto animate-in fade-in duration-300">
      {view === "list" ? (
        <UsersList onViewChange={setView} users={users} />
      ) : (
        <UsersAdd onViewChange={setView} onAddUser={handleAddUser} />
      )}
    </div>
  );
}