import { useState, useRef } from "react";
import { 
  CloudDownload, 
  Upload, 
  ShieldCheck, 
  Mail, 
  ArrowLeft, 
  Download, 
  Info,
  ArrowRight,
  FileText
} from "lucide-react";
import { toast } from "sonner";

interface ViewProps {
  onViewChange: (view: "hub" | "import" | "export") => void;
}

function ToolsHub({ onViewChange }: ViewProps) {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-2">
          Tools
        </h2>
        <p className="text-slate-500 text-[15px] font-medium">
          Kelola interoperabilitas data portal berita Anda. Impor konten dari situs lama atau ekspor untuk cadangan.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Import Card */}
        <div className="bg-white rounded-[24px] p-8 shadow-sm border border-slate-200/60 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all">
          <div>
            <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-[18px] flex items-center justify-center mb-6">
              <CloudDownload size={28} strokeWidth={2} />
            </div>
            <h3 className="text-[19px] font-bold text-slate-800 mb-3">Import</h3>
            <p className="text-[14px] text-slate-500 leading-relaxed font-medium mb-8">
              Impor konten dari platform lain seperti WordPress, Blogger, atau file RSS.
            </p>
          </div>
          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            <span className="text-[11px] font-bold text-blue-600 tracking-wider uppercase">
              TERSEDIA
            </span>
            <button 
              onClick={() => onViewChange("import")}
              className="text-[13px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition-colors group"
            >
              Buka Tool <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Export Card */}
        <div className="bg-white rounded-[24px] p-8 shadow-sm border border-slate-200/60 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all">
          <div>
            <div className="w-14 h-14 bg-purple-50 text-purple-500 rounded-[18px] flex items-center justify-center mb-6">
              <Upload size={28} strokeWidth={2} />
            </div>
            <h3 className="text-[19px] font-bold text-slate-800 mb-3">Export</h3>
            <p className="text-[14px] text-slate-500 leading-relaxed font-medium mb-8">
              Ekspor konten Jala Warta ke dalam format XML yang kompatibel dengan WordPress.
            </p>
          </div>
          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            <span className="text-[11px] font-bold text-purple-600 tracking-wider uppercase">
              TERSEDIA
            </span>
            <button 
              onClick={() => onViewChange("export")}
              className="text-[13px] font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1.5 transition-colors group"
            >
              Buka Tool <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Site Health Card */}
        <div className="bg-white rounded-[24px] p-8 shadow-sm border border-slate-200/60 flex flex-col justify-between opacity-80 cursor-not-allowed">
          <div>
            <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-[18px] flex items-center justify-center mb-6">
              <ShieldCheck size={28} strokeWidth={2} />
            </div>
            <h3 className="text-[19px] font-bold text-slate-800 mb-3">Site Health</h3>
            <p className="text-[14px] text-slate-500 leading-relaxed font-medium mb-8">
              Cek kesehatan situs dan optimasi database secara berkala.
            </p>
          </div>
          <div className="flex items-center pt-6 border-t border-slate-100">
            <span className="text-[11px] font-bold text-emerald-600 tracking-wider uppercase">
              SEGERA HADIR
            </span>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[24px] p-10 text-white shadow-lg relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Decorative circle */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 max-w-2xl">
          <h3 className="text-2xl font-bold mb-3 tracking-tight">Butuh Importer Khusus?</h3>
          <p className="text-blue-50 text-[15px] font-medium leading-relaxed">
            Tim Jala Warta terus mengembangkan importer untuk berbagai platform. Jika Anda memiliki ribuan data dari CMS kustom, silakan hubungi tim dukungan kami.
          </p>
        </div>
        <button className="relative z-10 whitespace-nowrap bg-white text-slate-800 font-bold px-6 py-3.5 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2.5 shadow-md">
          <Mail size={18} className="text-blue-600" />
          Hubungi Support
        </button>
      </div>
    </div>
  );
}

function ToolsImport({ onViewChange }: ViewProps) {
  const [fileSelected, setFileSelected] = useState(false);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImport = () => {
    if (!fileSelected) {
      toast.error("Impor Gagal", {
        description: "Silakan pilih file XML WordPress (WXR) terlebih dahulu sebelum memulai impor."
      });
      return;
    }
    toast.success("Impor Dimulai", {
      description: `Sistem sedang memproses file ${fileName}. Harap tunggu beberapa saat.`
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileSelected(true);
      setFileName(e.target.files[0].name);
    }
  };

  const handleSelectFile = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFileSelected(false);
    setFileName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex items-start gap-4">
        <button 
          onClick={() => onViewChange("hub")}
          className="p-2 -ml-2 text-slate-400 hover:bg-slate-200/50 hover:text-slate-700 rounded-full transition-colors mt-1"
        >
          <ArrowLeft size={24} />
        </button>
        <div>
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-2">
            Import WordPress
          </h2>
          <p className="text-slate-500 text-[15px] font-medium">
            Unggah file XML WXR Anda untuk memindahkan konten.
          </p>
        </div>
      </div>

      {/* Main Form Area */}
      <div className="bg-white rounded-[24px] p-8 sm:p-12 shadow-sm border border-slate-200/60">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Upload Area */}
          <div className="border-2 border-dashed border-slate-200 rounded-[20px] bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 transition-colors p-10 flex flex-col items-center justify-center text-center relative">
            <div className="w-16 h-16 bg-[#7c5ff0] text-white rounded-[18px] flex items-center justify-center mb-6 shadow-md shadow-indigo-500/20">
              <Upload size={32} strokeWidth={2} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Pilih file XML WordPress (WXR)</h3>
            <p className="text-[14px] text-slate-500 font-medium mb-8">
              Hanya file berformat .xml yang didukung.
            </p>
            
            {!fileSelected ? (
              <>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  accept=".xml" 
                  className="hidden" 
                />
                <button 
                  onClick={handleSelectFile}
                  className="px-8 py-3 bg-white border border-slate-200 rounded-[20px] text-slate-700 font-bold hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm text-sm"
                >
                  Pilih File
                </button>
              </>
            ) : (
              <div className="flex flex-col items-center gap-4 w-full">
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  accept=".xml" 
                  className="hidden" 
                />
                <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl border border-emerald-200 shadow-sm text-emerald-700 w-full max-w-sm">
                  <FileText size={20} className="text-emerald-500 shrink-0" />
                  <span className="text-sm font-semibold truncate flex-1 text-left">{fileName}</span>
                  <button 
                    onClick={handleRemoveFile}
                    className="text-slate-400 hover:text-red-500 text-xs font-bold px-2 py-1"
                  >
                    HAPUS
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Action Button */}
          <button 
            onClick={handleImport}
            className={`w-full py-4 rounded-xl font-bold text-[15px] transition-all flex items-center justify-center gap-2 ${
              fileSelected 
                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20" 
                : "bg-slate-200 text-slate-400 hover:bg-slate-300"
            }`}
          >
            Mulai Impor Sekarang
          </button>
        </div>
      </div>

      {/* Guide Area */}
      <div className="bg-slate-50 rounded-[24px] p-8 border border-slate-200/60 max-w-4xl">
        <h3 className="text-lg font-bold text-slate-800 mb-6">Panduan Import:</h3>
        <ul className="space-y-4 text-[15px] font-medium text-slate-600">
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
            <p>Gunakan menu <strong>Tools → Export</strong> di dashboard WordPress lama Anda.</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
            <p>Pilih <strong>"All Content"</strong> saat mengekspor dari WordPress.</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
            <p>Pastikan situs lama Anda masih aktif agar sistem dapat mengunduh gambar secara otomatis.</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
            <p>Impor media dalam jumlah besar mungkin memerlukan waktu beberapa menit.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

function ToolsExport({ onViewChange }: ViewProps) {
  const [selectedContent, setSelectedContent] = useState<string | null>(null);

  const exportOptions = [
    { id: "all", title: "Semua Konten", desc: "Mencakup Artikel, Laman, Kategori, dan Media." },
    { id: "posts", title: "Hanya Artikel", desc: "Hanya mengekspor artikel berita (Posts)." },
    { id: "pages", title: "Hanya Laman", desc: "Hanya mengekspor halaman statis (Pages)." },
    { id: "media", title: "Media Library", desc: "Mengekspor daftar metadata media library Anda." }
  ];

  const handleExport = () => {
    if (!selectedContent) {
      toast.error("Ekspor Gagal", {
        description: "Anda harus memilih jenis konten yang ingin diekspor."
      });
      return;
    }
    toast.success("File Diunduh", {
      description: "File ekspor WXR berhasil diunduh ke perangkat Anda."
    });
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex items-start gap-4">
        <button 
          onClick={() => onViewChange("hub")}
          className="p-2 -ml-2 text-slate-400 hover:bg-slate-200/50 hover:text-slate-700 rounded-full transition-colors mt-1"
        >
          <ArrowLeft size={24} />
        </button>
        <div>
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-2">
            Ekspor Data
          </h2>
          <p className="text-slate-500 text-[15px] font-medium">
            Ekspor konten Jala Warta ke dalam format XML WordPress (WXR).
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-[24px] p-8 sm:p-12 shadow-sm border border-slate-200/60 max-w-4xl">
        <h3 className="text-lg font-bold text-slate-800 mb-6">Pilih Konten untuk Diekspor:</h3>
        
        <div className="space-y-4 mb-8">
          {exportOptions.map((opt) => (
            <div 
              key={opt.id}
              onClick={() => setSelectedContent(opt.id)}
              className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${
                selectedContent === opt.id 
                  ? "border-[#7c5ff0] bg-indigo-50/10 shadow-sm" 
                  : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <h4 className="text-[15px] font-bold text-slate-800 mb-1">{opt.title}</h4>
              <p className="text-[13px] text-slate-500 font-medium">{opt.desc}</p>
            </div>
          ))}
        </div>

        <button 
          onClick={handleExport}
          className="w-full py-4 bg-[#1976d2] text-white rounded-xl font-bold text-[15px] hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
        >
          <Download size={20} strokeWidth={2.5} />
          Unduh File Ekspor
        </button>
      </div>

      {/* Alert Area */}
      <div className="bg-[#f8f9fc] rounded-[24px] p-8 border border-blue-100 flex items-start gap-4 max-w-4xl">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600">
          <Info size={20} strokeWidth={2.5} />
        </div>
        <div>
          <h4 className="text-[16px] font-bold text-slate-800 mb-2">Informasi Penting</h4>
          <p className="text-[14px] text-slate-600 font-medium leading-relaxed">
            File hasil ekspor ini menggunakan standar format WXR. Anda dapat menggunakan file ini untuk memindahkan konten ke instalasi WordPress lain atau CMS lain yang mendukung import WordPress. Data file fisik media library Anda tidak disertakan dalam file XML, melainkan berupa tautan URL yang menunjuk ke server Jala Warta saat ini.
          </p>
        </div>
      </div>
    </div>
  );
}

export function ToolsPage() {
  const [activeView, setActiveView] = useState<"hub" | "import" | "export">("hub");

  return (
    <div className="max-w-[1400px] mx-auto animate-in fade-in duration-300">
      {activeView === "hub" && <ToolsHub onViewChange={setActiveView} />}
      {activeView === "import" && <ToolsImport onViewChange={setActiveView} />}
      {activeView === "export" && <ToolsExport onViewChange={setActiveView} />}
    </div>
  );
}