import { Plus, Inbox } from "lucide-react";

interface AllPagesPageProps {
  setActivePage: (page: string) => void;
}

export function AllPagesPage({ setActivePage }: AllPagesPageProps) {
  return (
    <div className="max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-2">
            Halaman
          </h2>
          <p className="text-slate-500 text-base font-medium">
            0 halaman tersimpan.
          </p>
        </div>
        <button
          onClick={() => setActivePage("Create New Page")}
          className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold shadow-md shadow-blue-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all w-fit bg-[#1976d2] hover:bg-[#176bbf]"
        >
          <Plus size={20} strokeWidth={2.5} />
          Buat Halaman Baru
        </button>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 flex flex-col min-h-[400px]">
        <div className="grid grid-cols-12 gap-4 px-8 py-5 border-b border-slate-100 bg-white rounded-t-2xl">
          <div className="col-span-5 text-[13px] font-bold text-slate-800 tracking-wider">
            JUDUL
          </div>
          <div className="col-span-4 text-[13px] font-bold text-slate-800 tracking-wider text-center">
            SLUG
          </div>
          <div className="col-span-3 text-[13px] font-bold text-slate-800 tracking-wider text-right">
            STATUS
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center p-12 py-20 bg-white/50 rounded-b-2xl">
          <div className="w-16 h-16 rounded-[20px] bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 shadow-sm">
            <Inbox size={28} className="text-slate-400" strokeWidth={2} />
          </div>
          <p className="text-[15px] text-slate-500 font-medium">
            Belum ada halaman. Klik "Buat Halaman Baru" untuk memulai.
          </p>
        </div>
      </div>
    </div>
  );
}