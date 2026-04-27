import { useState, useRef } from "react";
import { toast } from "sonner";
import { 
  Building2, 
  Phone, 
  Share2, 
  CreditCard, 
  Settings2, 
  Upload, 
  Trash2, 
  CheckCircle2, 
  Plus,
  ChevronDown
} from "lucide-react";

export function SettingsPage() {
  const [activeTab, setActiveTab] = useState("identitas");
  const [isSaved, setIsSaved] = useState(false);
  const logoInputRef = useRef<HTMLInputElement>(null);
  const faviconInputRef = useRef<HTMLInputElement>(null);
  const qrisInputRef = useRef<HTMLInputElement>(null);

  // Forms state
  const [identitas, setIdentitas] = useState({
    namaSitus: "Demo Berita",
    slogan: "Berita terpercaya setiap hari",
    deskripsi: "",
    warna: "#2B62E2",
    logo: "",
    favicon: ""
  });

  const [kontak, setKontak] = useState({
    email: "redaksi@namaberita.com",
    telepon: "+62 812 3456 7890",
    alamat: "Jl. Contoh No. 123, RT 01/RW 02",
    kota: "Jakarta",
    provinsi: "DKI Jakarta",
    kodepos: "10110"
  });

  const [sosial, setSosial] = useState({
    ig: "@namaberita",
    tw: "@namaberita",
    fb: "https://facebook.com/namaberita",
    yt: "https://youtube.com/@namaberita",
    tk: "@namaberita",
    li: "https://linkedin.com/company/namaberita"
  });

  const [pembayaran, setPembayaran] = useState({
    namaBadan: "PT. Nama Berita Indonesia",
    npwp: "00.000.000.0-000.000",
    qrisImage: ""
  });
  
  const [rekeningList, setRekeningList] = useState<any[]>([]);

  const [teknis, setTeknis] = useState({
    subdomain: "demo.jalawarta.com",
    customdomain: "www.namaberita.com",
    timezone: "Asia/Jakarta",
    bahasa: "id",
    seo: true,
    maintenance: false,
    footer: "© 2026 Demo Berita. Hak cipta dilindungi."
  });

  const tabs = [
    { id: "identitas", label: "Identitas", icon: Building2 },
    { id: "kontak", label: "Kontak", icon: Phone },
    { id: "sosial", label: "Sosial Media", icon: Share2 },
    { id: "pembayaran", label: "Pembayaran", icon: CreditCard },
    { id: "teknis", label: "Teknis", icon: Settings2 },
  ];

  const handleSave = () => {
    // Validation
    let isValid = true;
    let errorMsg = "";

    if (activeTab === "identitas" && !identitas.namaSitus.trim()) {
      isValid = false;
      errorMsg = "Nama Situs tidak boleh kosong.";
    } else if (activeTab === "kontak" && !kontak.email.trim()) {
      isValid = false;
      errorMsg = "Email Kontak tidak boleh kosong.";
    } else if (activeTab === "teknis" && !teknis.subdomain.trim()) {
      isValid = false;
      errorMsg = "Subdomain tidak boleh kosong.";
    }

    if (!isValid) {
      toast.error("Gagal Menyimpan", {
        description: errorMsg || "Silakan lengkapi form yang wajib diisi."
      });
      return;
    }

    // Success state
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
    toast.success("Pengaturan Disimpan", {
      description: "Perubahan pada situs web Anda telah berhasil disimpan."
    });
  };

  const handleAddRekening = () => {
    setRekeningList([...rekeningList, { id: Date.now(), bank: "", label: "", no: "", nama: "" }]);
  };

  const handleDeleteRekening = (id: number) => {
    toast("Apakah Anda yakin ingin menghapus rekening?", {
      duration: 8000,
      action: {
        label: "IYA",
        onClick: () => {
          setRekeningList(prev => prev.filter(r => r.id !== id));
          toast.success("Rekening berhasil dihapus");
        }
      },
      cancel: {
        label: "TIDAK",
        onClick: () => {}
      },
    });
  };

  return (
    <div className="max-w-[1000px] space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div>
        <h2 className="text-[32px] font-bold text-slate-800 tracking-tight mb-2">
          Pengaturan Situs
        </h2>
        <p className="text-slate-500 text-[16px] font-medium">
          Kelola informasi umum, preferensi, dan konfigurasi dasar situs web Anda.
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-[24px] shadow-sm border border-slate-200/60 overflow-hidden">
        
        {/* Tabs */}
        <div className="flex items-center overflow-x-auto border-b border-slate-100 px-8 pt-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-5 py-4 font-bold text-[14px] whitespace-nowrap transition-colors relative ${
                  isActive ? "text-[#3b82f6]" : "text-slate-500 hover:text-slate-700"
                }`}
              >
                <tab.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                {tab.label}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3b82f6] rounded-t-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Form Content */}
        <div className="p-8 sm:p-10 space-y-8">
          
          {/* TAB: IDENTITAS */}
          {activeTab === "identitas" && (
            <div className="space-y-8 animate-in fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">NAMA SITUS</label>
                  <input 
                    type="text" 
                    value={identitas.namaSitus}
                    onChange={(e) => setIdentitas({...identitas, namaSitus: e.target.value})}
                    placeholder="Contoh: Jala Warta"
                    className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800"
                  />
                </div>
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">SLOGAN / TAGLINE</label>
                  <input 
                    type="text" 
                    value={identitas.slogan}
                    onChange={(e) => setIdentitas({...identitas, slogan: e.target.value})}
                    placeholder="Slogan portal berita Anda"
                    className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800"
                  />
                </div>
              </div>

              <div className="space-y-2.5">
                <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">DESKRIPSI / TENTANG SITUS</label>
                <textarea 
                  rows={4}
                  value={identitas.deskripsi}
                  onChange={(e) => setIdentitas({...identitas, deskripsi: e.target.value})}
                  placeholder="Jelaskan tentang portal berita Anda..."
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">LOGO SITUS</label>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-slate-50 border border-slate-200 border-dashed rounded-2xl flex items-center justify-center text-slate-400 overflow-hidden">
                      {identitas.logo ? (
                        <img src={identitas.logo} alt="Logo" className="w-full h-full object-cover" />
                      ) : (
                        <Building2 size={24} />
                      )}
                    </div>
                    <button 
                      onClick={() => logoInputRef.current?.click()}
                      className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-[13px] font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
                    >
                      Pilih Gambar
                    </button>
                    <input 
                      type="file" 
                      ref={logoInputRef}
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const url = URL.createObjectURL(file);
                          setIdentitas({...identitas, logo: url});
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">FAVICON</label>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-slate-50 border border-slate-200 border-dashed rounded-2xl flex items-center justify-center text-slate-400 font-bold text-[13px] overflow-hidden">
                      {identitas.favicon ? (
                        <img src={identitas.favicon} alt="Favicon" className="w-full h-full object-cover" />
                      ) : (
                        "ICO"
                      )}
                    </div>
                    <div>
                      <button 
                        onClick={() => faviconInputRef.current?.click()}
                        className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-[13px] font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm mb-1.5"
                      >
                        Pilih Gambar
                      </button>
                      <input 
                        type="file" 
                        ref={faviconInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const url = URL.createObjectURL(file);
                            setIdentitas({...identitas, favicon: url});
                          }
                        }}
                      />
                      <p className="text-[11px] font-medium text-slate-400">Disarankan 512×512 px</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">WARNA UTAMA</label>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-xl border border-slate-200 shadow-sm"
                    style={{ backgroundColor: identitas.warna }}
                  />
                  <input 
                    type="text" 
                    value={identitas.warna}
                    onChange={(e) => setIdentitas({...identitas, warna: e.target.value})}
                    className="w-40 px-4 py-3 bg-white border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-slate-700 uppercase"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB: KONTAK */}
          {activeTab === "kontak" && (
            <div className="space-y-8 animate-in fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">EMAIL KONTAK</label>
                  <input 
                    type="email" 
                    value={kontak.email}
                    onChange={(e) => setKontak({...kontak, email: e.target.value})}
                    className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800"
                  />
                </div>
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">NOMOR TELEPON</label>
                  <input 
                    type="text" 
                    value={kontak.telepon}
                    onChange={(e) => setKontak({...kontak, telepon: e.target.value})}
                    className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800"
                  />
                </div>
              </div>

              <div className="space-y-2.5">
                <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">ALAMAT LENGKAP</label>
                <textarea 
                  rows={3}
                  value={kontak.alamat}
                  onChange={(e) => setKontak({...kontak, alamat: e.target.value})}
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">KOTA</label>
                  <input 
                    type="text" 
                    value={kontak.kota}
                    onChange={(e) => setKontak({...kontak, kota: e.target.value})}
                    className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800"
                  />
                </div>
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">PROVINSI</label>
                  <input 
                    type="text" 
                    value={kontak.provinsi}
                    onChange={(e) => setKontak({...kontak, provinsi: e.target.value})}
                    className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800"
                  />
                </div>
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">KODE POS</label>
                  <input 
                    type="text" 
                    value={kontak.kodepos}
                    onChange={(e) => setKontak({...kontak, kodepos: e.target.value})}
                    className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB: SOSIAL MEDIA */}
          {activeTab === "sosial" && (
            <div className="space-y-6 animate-in fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">INSTAGRAM</label>
                  <input 
                    type="text" 
                    value={sosial.ig}
                    onChange={(e) => setSosial({...sosial, ig: e.target.value})}
                    className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800"
                  />
                </div>
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">X (TWITTER)</label>
                  <input 
                    type="text" 
                    value={sosial.tw}
                    onChange={(e) => setSosial({...sosial, tw: e.target.value})}
                    className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800"
                  />
                </div>
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">FACEBOOK</label>
                  <input 
                    type="text" 
                    value={sosial.fb}
                    onChange={(e) => setSosial({...sosial, fb: e.target.value})}
                    className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800"
                  />
                </div>
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">YOUTUBE</label>
                  <input 
                    type="text" 
                    value={sosial.yt}
                    onChange={(e) => setSosial({...sosial, yt: e.target.value})}
                    className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800"
                  />
                </div>
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">TIKTOK</label>
                  <input 
                    type="text" 
                    value={sosial.tk}
                    onChange={(e) => setSosial({...sosial, tk: e.target.value})}
                    className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800"
                  />
                </div>
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">LINKEDIN</label>
                  <input 
                    type="text" 
                    value={sosial.li}
                    onChange={(e) => setSosial({...sosial, li: e.target.value})}
                    className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB: PEMBAYARAN */}
          {activeTab === "pembayaran" && (
            <div className="space-y-8 animate-in fade-in">
              <div className="p-4 bg-blue-50/50 text-slate-600 border border-blue-100 rounded-[14px] text-[13px] font-medium leading-relaxed">
                Info pembayaran ini ditampilkan di frontend publik (halaman donasi, footer). Bukan untuk pembayaran subscription ke platform.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">NAMA BADAN USAHA</label>
                  <input 
                    type="text" 
                    value={pembayaran.namaBadan}
                    onChange={(e) => setPembayaran({...pembayaran, namaBadan: e.target.value})}
                    className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800"
                  />
                </div>
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">NPWP (OPTIONAL)</label>
                  <input 
                    type="text" 
                    value={pembayaran.npwp}
                    onChange={(e) => setPembayaran({...pembayaran, npwp: e.target.value})}
                    className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">REKENING BANK</label>
                  <button 
                    onClick={handleAddRekening}
                    className="text-[13px] font-bold text-[#3b82f6] hover:text-blue-700 flex items-center gap-1.5 transition-colors"
                  >
                    <Plus size={16} strokeWidth={2.5} />
                    Tambah Rekening
                  </button>
                </div>
                
                {rekeningList.length === 0 ? (
                  <div className="py-10 bg-slate-50/50 border border-slate-200 rounded-[16px] flex justify-center text-center">
                    <p className="text-[14px] font-medium text-slate-400">
                      Belum ada rekening. Klik "Tambah Rekening" untuk menambahkan.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {rekeningList.map((rek, index) => (
                      <div key={rek.id} className="p-6 bg-slate-50/30 border border-slate-200 rounded-[16px] relative group">
                        <div className="flex items-center justify-between mb-5">
                          <h4 className="text-[15px] font-bold text-slate-800">Rekening {index + 1}</h4>
                          <button 
                            onClick={() => handleDeleteRekening(rek.id)}
                            className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            aria-label="Delete rekening"
                          >
                            <Trash2 size={18} strokeWidth={2} />
                          </button>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-[11px] font-bold text-slate-500 tracking-widest uppercase">NAMA BANK</label>
                            <input 
                              type="text" 
                              placeholder="BCA, Mandiri, BNI..."
                              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[11px] font-bold text-slate-500 tracking-widest uppercase">LABEL (OPTIONAL)</label>
                            <input 
                              type="text" 
                              placeholder="Rekening Donasi"
                              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[11px] font-bold text-slate-500 tracking-widest uppercase">NO. REKENING</label>
                            <input 
                              type="text" 
                              placeholder="1234567890"
                              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[11px] font-bold text-slate-500 tracking-widest uppercase">ATAS NAMA</label>
                            <input 
                              type="text" 
                              placeholder="Nama Pemilik"
                              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2.5">
                <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">QRIS TENANT</label>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 bg-slate-50 border border-slate-200 border-dashed rounded-xl flex items-center justify-center text-slate-400 font-bold text-[14px] overflow-hidden">
                    {pembayaran.qrisImage ? (
                      <img src={pembayaran.qrisImage} alt="QRIS" className="w-full h-full object-cover" />
                    ) : (
                      "QRIS"
                    )}
                  </div>
                  <div>
                    <button 
                      onClick={() => qrisInputRef.current?.click()}
                      className="px-5 py-3 bg-white border border-slate-200 rounded-xl text-[13px] font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm mb-2 flex items-center gap-2"
                    >
                      <Upload size={16} />
                      Upload Gambar QRIS
                    </button>
                    <input 
                      type="file" 
                      ref={qrisInputRef}
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const url = URL.createObjectURL(file);
                          setPembayaran({...pembayaran, qrisImage: url});
                        }
                      }}
                    />
                    <p className="text-[11px] font-medium text-slate-400">Format PNG/JPG, latar putih disarankan.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: TEKNIS */}
          {activeTab === "teknis" && (
            <div className="space-y-8 animate-in fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">SUBDOMAIN (BAWAAN)</label>
                  <input 
                    type="text" 
                    value={teknis.subdomain}
                    onChange={(e) => setTeknis({...teknis, subdomain: e.target.value})}
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-500"
                    readOnly
                  />
                </div>
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">CUSTOM DOMAIN (OPTIONAL)</label>
                  <input 
                    type="text" 
                    value={teknis.customdomain}
                    onChange={(e) => setTeknis({...teknis, customdomain: e.target.value})}
                    className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800"
                  />
                </div>
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">ZONA WAKTU</label>
                  <div className="relative">
                    <select 
                      value={teknis.timezone}
                      onChange={(e) => setTeknis({...teknis, timezone: e.target.value})}
                      className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800 appearance-none pr-12 cursor-pointer"
                    >
                      <option value="Asia/Jakarta">WIB (Waktu Indonesia Barat)</option>
                      <option value="Asia/Makassar">WITA (Waktu Indonesia Tengah)</option>
                      <option value="Asia/Jayapura">WIT (Waktu Indonesia Timur)</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <ChevronDown size={18} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
                <div className="space-y-2.5">
                  <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">BAHASA</label>
                  <div className="relative">
                    <select 
                      value={teknis.bahasa}
                      onChange={(e) => setTeknis({...teknis, bahasa: e.target.value})}
                      className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800 appearance-none pr-12 cursor-pointer"
                    >
                      <option value="id">Indonesia</option>
                      <option value="en">English</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <ChevronDown size={18} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-5 p-6 bg-slate-50/50 border border-slate-100 rounded-[16px]">
                {/* SEO Toggle */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-800 mb-1">Visibilitas Mesin Pencari</h4>
                    <p className="text-[13px] font-medium text-slate-500">Izinkan Google dan mesin pencari lain mengindeks situs ini.</p>
                  </div>
                  <button
                    onClick={() => setTeknis({...teknis, seo: !teknis.seo})}
                    className={`w-[46px] h-[26px] rounded-full p-1 transition-colors flex items-center shrink-0 ${
                      teknis.seo ? "bg-blue-500 justify-end" : "bg-slate-200 justify-start"
                    }`}
                  >
                    <div className="w-[18px] h-[18px] rounded-full bg-white shadow-sm transition-transform" />
                  </button>
                </div>
                
                <div className="w-full h-px bg-slate-200/60" />

                {/* Maintenance Toggle */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-800 mb-1">Mode Pemeliharaan</h4>
                    <p className="text-[13px] font-medium text-slate-500">Sembunyikan situs dari publik sementara dalam perbaikan.</p>
                  </div>
                  <button
                    onClick={() => setTeknis({...teknis, maintenance: !teknis.maintenance})}
                    className={`w-[46px] h-[26px] rounded-full p-1 transition-colors flex items-center shrink-0 ${
                      teknis.maintenance ? "bg-blue-500 justify-end" : "bg-slate-200 justify-start"
                    }`}
                  >
                    <div className="w-[18px] h-[18px] rounded-full bg-white shadow-sm transition-transform" />
                  </button>
                </div>
              </div>

              <div className="space-y-2.5">
                <label className="text-[12px] font-bold text-slate-500 tracking-widest uppercase">TEKS FOOTER</label>
                <textarea 
                  rows={2}
                  value={teknis.footer}
                  onChange={(e) => setTeknis({...teknis, footer: e.target.value})}
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800 resize-none"
                />
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-8 sm:px-10 sm:py-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50/30">
          <p className="text-[13px] font-medium text-slate-500 w-full text-center sm:text-left">
            Pastikan menyimpan perubahan Anda.
          </p>
          <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
            {isSaved && (
              <div className="flex items-center gap-2 text-emerald-600 text-[14px] font-bold animate-in fade-in slide-in-from-right-2">
                <CheckCircle2 size={18} strokeWidth={2.5} />
                Pengaturan berhasil disimpan.
              </div>
            )}
            <button 
              onClick={handleSave}
              className="bg-[#3b82f6] hover:bg-blue-600 text-white font-bold py-3.5 px-8 rounded-xl shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5 text-[15px] shrink-0"
            >
              Simpan Pengaturan
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}