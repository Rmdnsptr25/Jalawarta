import { Search, Upload, Image as ImageIcon, Loader2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { projectId } from "/utils/supabase/info";
import { supabase } from "../lib/supabase";

interface MediaItem {
  id: string;
  name: string;
  url: string;
  created_at: string;
}

export function MediaLibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [isLoadingMedia, setIsLoadingMedia] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchMedia = async () => {
    setIsLoadingMedia(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error("Silakan login kembali.");

      const res = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-038ff37a/media`, {
        headers: {
          "Authorization": `Bearer ${session.access_token}`
        }
      });
      const data = await res.json();
      if (res.ok && data.media) {
        setMediaList(data.media);
      }
    } catch (err: any) {
      toast.error("Gagal memuat media", { description: err.message });
    } finally {
      setIsLoadingMedia(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error("File terlalu besar", {
        description: "Maksimal ukuran file adalah 5MB"
      });
      return;
    }

    setIsUploading(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error("Silakan login kembali.");

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-038ff37a/upload`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${session.access_token}`
        },
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal upload file");

      toast.success("Berhasil", { description: "Gambar berhasil diunggah" });
      await fetchMedia();
    } catch (err: any) {
      toast.error("Gagal", { description: err.message });
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mencari media", {
      description: `Menampilkan hasil untuk "${searchQuery}"`
    });
  };

  const filteredMedia = mediaList.filter(m => m.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-2">
          Media Library
        </h2>
        <p className="text-slate-500 text-[15px] font-medium">
          {mediaList.length} berkas tersimpan dalam repositori cloud Anda.
        </p>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upload Card */}
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileUpload} 
          accept="image/*" 
          className="hidden" 
        />
        <button 
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          className="bg-white rounded-2xl border-2 border-dashed border-indigo-100 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all p-12 flex flex-col items-center justify-center text-center shadow-sm group min-h-[260px] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isUploading ? (
            <Loader2 className="w-16 h-16 text-indigo-500 mb-6 animate-spin" />
          ) : (
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 transition-transform">
              <Upload size={32} strokeWidth={2} />
            </div>
          )}
          <h3 className="text-[17px] font-bold text-slate-800 mb-2">
            {isUploading ? "Mengunggah..." : "Klik atau Seret Gambar ke Sini"}
          </h3>
          <p className="text-[13px] text-slate-500 font-medium tracking-wide">JPG, PNG, WEBP • Maks 5MB</p>
        </button>

        {/* Info Card */}
        <div className="bg-white rounded-2xl border-2 border-dashed border-slate-200 p-12 flex flex-col items-center justify-center text-center shadow-sm min-h-[260px]">
          <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 mb-6 shadow-sm border border-slate-100">
            <ImageIcon size={32} strokeWidth={1.5} />
          </div>
          <p className="text-[15px] font-medium text-slate-500">Klik pada gambar di galeri untuk melihat rincian.</p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8 min-h-[440px] flex flex-col">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-100">
          <h3 className="text-xl font-bold text-slate-800">Galeri ({filteredMedia.length})</h3>
          <form onSubmit={handleSearch} className="relative w-full sm:w-[420px]">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari file..."
              className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800 placeholder:text-slate-400"
            />
          </form>
        </div>

        {isLoadingMedia ? (
          <div className="flex-1 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
          </div>
        ) : filteredMedia.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filteredMedia.map((media) => (
              <div 
                key={media.id}
                className="aspect-square relative rounded-xl overflow-hidden border border-slate-200 group hover:border-blue-500 transition-colors"
              >
                <img 
                  src={media.url} 
                  alt={media.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center pb-12">
            <p className="text-[15px] font-medium text-slate-500">Belum ada media tersimpan.</p>
          </div>
        )}
      </div>
    </div>
  );
}