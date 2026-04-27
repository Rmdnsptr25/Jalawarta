import { X, Upload, Search, Image as ImageIcon, Loader2, Check } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { projectId } from "/utils/supabase/info";
import { toast } from "sonner";
import { supabase } from "../lib/supabase";

interface MediaLibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMedia?: (url: string) => void;
}

interface MediaItem {
  id: string;
  name: string;
  url: string;
  created_at: string;
}

export function MediaLibraryModal({ isOpen, onClose, onSelectMedia }: MediaLibraryModalProps) {
  const [activeTab, setActiveTab] = useState("Upload File");
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [isLoadingMedia, setIsLoadingMedia] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
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
      } else {
        throw new Error(data.error || "Gagal memuat media");
      }
    } catch (err: any) {
      toast.error("Gagal", { description: err.message });
    } finally {
      setIsLoadingMedia(false);
    }
  };

  useEffect(() => {
    if (isOpen && activeTab === "Galeri Media") {
      fetchMedia();
    }
  }, [isOpen, activeTab]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      await handleUpload(e.target.files[0]);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      await handleUpload(e.dataTransfer.files[0]);
    }
  };

  const handleUpload = async (file: File) => {
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File terlalu besar", { description: "Maksimal ukuran file adalah 5MB." });
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
      if (!res.ok) throw new Error(data.error || "Gagal mengunggah file");

      toast.success("Berhasil", { description: "Gambar telah diunggah." });
      
      // Auto switch to gallery and refresh
      setActiveTab("Galeri Media");
      await fetchMedia();
      
      if (onSelectMedia && data.url) {
        onSelectMedia(data.url);
        onClose();
      }
    } catch (err: any) {
      toast.error("Gagal", { description: err.message });
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-[640px] bg-white rounded-[24px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 border border-slate-200/50">
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-2">
          <h2 className="text-[22px] font-bold text-slate-800">Media Library</h2>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X size={20} strokeWidth={2.5} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex px-6 border-b border-slate-100/80">
          <button
            onClick={() => setActiveTab("Upload File")}
            className={`py-4 text-sm font-bold transition-all relative ${
              activeTab === "Upload File"
                ? "text-blue-600"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Upload File
            {activeTab === "Upload File" && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 rounded-t-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("Galeri Media")}
            className={`py-4 ml-6 text-sm font-bold transition-all relative ${
              activeTab === "Galeri Media"
                ? "text-blue-600"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Galeri Media
            {activeTab === "Galeri Media" && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 rounded-t-full" />
            )}
          </button>
        </div>

        {/* Content */}
        <div className="p-8 h-[400px] overflow-hidden flex flex-col">
          {activeTab === "Upload File" ? (
            <div 
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`w-full h-full border-2 border-dashed border-indigo-100 rounded-[20px] bg-indigo-50/30 flex flex-col items-center justify-center text-center transition-all hover:bg-indigo-50/50 hover:border-indigo-200 cursor-pointer relative ${isUploading ? 'opacity-50 pointer-events-none' : ''}`}
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/jpeg, image/png, image/webp" 
                onChange={handleFileChange}
              />
              {isUploading ? (
                <Loader2 size={32} className="text-indigo-500 animate-spin mb-4" />
              ) : (
                <div className="w-16 h-16 bg-white rounded-[18px] shadow-sm border border-indigo-50 flex items-center justify-center mb-6 text-indigo-500">
                  <Upload size={32} strokeWidth={2} />
                </div>
              )}
              <h3 className="text-base font-bold text-slate-800 mb-2">
                {isUploading ? "Mengunggah..." : "Klik atau Seret Gambar ke Sini"}
              </h3>
              <p className="text-sm text-slate-500 font-medium">
                Mendukung JPG, PNG, WEBP • Maksimal 5MB
              </p>
            </div>
          ) : (
            <div className="h-full flex flex-col">
              <div className="relative mb-6 shrink-0">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari file..."
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                />
              </div>
              
              <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                {isLoadingMedia ? (
                  <div className="h-full flex items-center justify-center">
                    <Loader2 className="animate-spin text-blue-500" size={24} />
                  </div>
                ) : mediaList.filter(m => m.name.toLowerCase().includes(searchQuery.toLowerCase())).length > 0 ? (
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                    {mediaList
                      .filter(m => m.name.toLowerCase().includes(searchQuery.toLowerCase()))
                      .map((media, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => {
                          if (onSelectMedia) {
                            onSelectMedia(media.url);
                            onClose();
                          }
                        }}
                        className="aspect-square relative rounded-xl overflow-hidden border border-slate-200 group cursor-pointer hover:border-blue-500 transition-colors"
                      >
                        <img 
                          src={media.url} 
                          alt={media.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-90">
                    <div className="w-20 h-20 rounded-[20px] bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
                      <ImageIcon size={32} className="text-slate-300" strokeWidth={1.5} />
                    </div>
                    <p className="text-[15px] font-medium text-slate-500 mb-3">Belum ada media tersimpan.</p>
                    <button 
                      onClick={() => setActiveTab("Upload File")}
                      className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1.5"
                    >
                      Upload gambar pertama Anda <span className="text-lg leading-none">→</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}