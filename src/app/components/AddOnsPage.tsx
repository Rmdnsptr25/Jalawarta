import { 
  FileText, 
  Image as ImageIcon, 
  BarChart2, 
  TrendingUp, 
  Activity, 
  MessageSquare 
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function AddOnsPage() {
  const [activeAddons, setActiveAddons] = useState<string[]>([]);

  const addons = [
    {
      id: "ai-article",
      title: "AI Article & Content Generator",
      desc: "Bantu artikel untuk dan percepat konten dengan otomatis menggunakan AI (Gemini, ChatGPT, Claude) langsung dari editor.",
      icon: FileText
    },
    {
      id: "ai-image",
      title: "AI Image Generator",
      desc: "Buat gambar ideal dengan prompt dalam untuk insta menggunakan AI (OpenAI Image), DALL-E. Pilih fitur langsung dari Media Library.",
      icon: ImageIcon
    },
    {
      id: "ai-insights",
      title: "AI Content Insights",
      desc: "Moni pemerataan berita dan social media untuk tinjapr. Seo/SER, Facebook yang disarankan membantu untuk langsung dan dashboard.",
      icon: BarChart2
    },
    {
      id: "google-analytics",
      title: "Google Search & Analytics",
      desc: "Pelacakan pengunjung di dan verifikasi keperluan dan Google Search Console.",
      icon: TrendingUp
    },
    {
      id: "meta-pixel",
      title: "Meta Pixel Advanced",
      desc: "Analisis lanjutan dan audience menggunakan via Facebook / Meta Pixel.",
      icon: Activity
    },
    {
      id: "contact-form",
      title: "Contact Form Advanced",
      desc: "Tambah formulir dengan mengali visual builder drag-and-drop dan manajemen pesan masuk.",
      icon: MessageSquare
    }
  ];

  const handleToggle = (id: string, title: string) => {
    setActiveAddons(prev => {
      const isActive = prev.includes(id);
      if (isActive) {
        toast.info("Add-on Dinonaktifkan", {
          description: `${title} telah dimatikan.`
        });
        return prev.filter(x => x !== id);
      } else {
        toast.success("Add-on Diaktifkan", {
          description: `${title} kini aktif dan siap digunakan.`
        });
        return [...prev, id];
      }
    });
  };

  return (
    <div className="max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-2">
          Katalog Add-ons
        </h2>
        <p className="text-slate-500 text-[15px] font-medium">
          Aktifkan fitur tambahan sesuai kebutuhan portal berita Anda.
        </p>
      </div>

      {/* Grid Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {addons.map((addon) => {
          const isActive = activeAddons.includes(addon.id);
          
          return (
            <div 
              key={addon.id}
              className={`bg-white rounded-[24px] p-8 shadow-sm border ${
                isActive ? "border-blue-200" : "border-slate-200/60"
              } transition-all hover:shadow-md flex flex-col h-full`}
            >
              {/* Top Row: Icon & Toggle */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center ${
                  isActive ? "bg-blue-50 text-blue-600" : "bg-slate-50 text-slate-400"
                }`}>
                  <addon.icon size={22} strokeWidth={2} />
                </div>
                
                {/* Custom Toggle Switch */}
                <button
                  onClick={() => handleToggle(addon.id, addon.title)}
                  className={`w-[46px] h-[26px] rounded-full p-1 transition-colors flex items-center ${
                    isActive ? "bg-blue-500 justify-end" : "bg-slate-200 justify-start"
                  }`}
                  aria-label="Toggle add-on"
                >
                  <div className={`w-[18px] h-[18px] rounded-full bg-white shadow-sm transition-transform`} />
                </button>
              </div>

              {/* Title & Desc */}
              <div className="flex-1 mb-8">
                <h3 className="text-[17px] font-bold text-slate-800 mb-3 tracking-wide">
                  {addon.title}
                </h3>
                <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
                  {addon.desc}
                </p>
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className={`text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full uppercase ${
                  isActive 
                    ? "bg-blue-50 text-blue-600" 
                    : "bg-slate-50 text-slate-400"
                }`}>
                  {isActive ? "ACTIVE" : "AVAILABLE"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}