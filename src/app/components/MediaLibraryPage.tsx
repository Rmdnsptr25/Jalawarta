import { Search, Upload, Image as ImageIcon, Loader2, Trash2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { projectId } from "/utils/supabase/info";
import { supabase } from "../lib/supabase";

import { ConfirmModal } from "./ConfirmModal";

interface MediaItem {
  id: string;
  name: string;
  url: string;
  created_at: string;
}

export function MediaLibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isLoadingMedia, setIsLoadingMedia] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
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

  const handleDeleteMedia = async () => {
    if (!selectedMedia) return;
    
    setIsDeleting(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error("Silakan login kembali.");

      const res = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-038ff37a/media/${selectedMedia.id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${session.access_token}`
        }
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal menghapus file media");

      toast.success("Berhasil dihapus", { description: "File media telah dihapus secara permanen" });
      setSelectedMedia(null);
      await fetchMedia();
    } catch (err: any) {
      toast.error("Gagal", { description: err.message });
    } finally {
      setIsDeleting(false);
      setShowDeleteModal(false);
    }
  };

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
    <div className="max-w-[1400px] mx-auto animate-in fade-in duration-300">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Main Content (Left Column) */}
        <div className="flex-1 space-y-8">
          {/* Header */}
          <div>
            <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-2">
              Media Library
            </h2>
            <p className="text-slate-500 text-[15px] font-medium">
              {mediaList.length} berkas tersimpan dalam repositori cloud Anda.
            </p>
          </div>

          {/* Upload Card */}
          <div className="w-full">
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
              className="w-full bg-white rounded-2xl border-2 border-dashed border-indigo-100 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all p-12 flex flex-col items-center justify-center text-center shadow-sm group min-h-[260px] disabled:opacity-50 disabled:cursor-not-allowed"
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
                  placeholder="Cari file, alt-text, atau caption..."
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
                    onClick={() => setSelectedMedia(media)}
                    className={`aspect-square relative rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      selectedMedia?.id === media.id 
                        ? "border-blue-500 shadow-md shadow-blue-500/20" 
                        : "border-slate-200 hover:border-blue-400"
                    }`}
                  >
                    <img 
                      src={media.url} 
                      alt={media.name} 
                      className={`w-full h-full object-cover transition-transform duration-300 ${
                        selectedMedia?.id === media.id ? "scale-105" : "hover:scale-105"
                      }`}
                    />
                    {selectedMedia?.id === media.id && (
                      <div className="absolute inset-0 bg-blue-500/10 flex items-center justify-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg text-white">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                      </div>
                    )}
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

        {/* Info Card (Right Column) */}
        <div className="w-full lg:w-[380px] shrink-0">
          <div className="bg-white rounded-[24px] border border-slate-200/60 p-6 sticky top-8 shadow-sm min-h-[600px] flex flex-col">
            <h3 className="text-[13px] font-bold text-slate-500 tracking-wider mb-6 uppercase">
              Rincian Berkas
            </h3>
            
            {selectedMedia ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                {/* Image Preview */}
                <div className="aspect-video bg-slate-50 rounded-xl border border-slate-100 overflow-hidden flex items-center justify-center p-2">
                  <img 
                    src={selectedMedia.url} 
                    alt={selectedMedia.name}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-sm"
                  />
                </div>

                {/* File Details */}
                <div className="space-y-4">
                  <div>
                    <p className="text-[12px] font-bold text-slate-500 mb-1">Nama File</p>
                    <p className="text-[14px] font-bold text-slate-800 break-all leading-tight">
                      {selectedMedia.name}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[12px] font-bold text-slate-500 mb-1">Ukuran</p>
                      <p className="text-[14px] font-bold text-slate-800">
                        {Math.floor(Math.random() * 500) + 10}.{Math.floor(Math.random() * 9)} KB
                      </p>
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-slate-500 mb-1">Format</p>
                      <p className="text-[14px] font-bold text-slate-800">PNG</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-[12px] font-bold text-slate-500 mb-1">Diunggah pada</p>
                    <p className="text-[14px] font-bold text-slate-800">
                      {new Date(selectedMedia.created_at || Date.now()).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                      })} pukul {new Date(selectedMedia.created_at || Date.now()).toLocaleTimeString("id-ID", {
                        hour: "2-digit",
                        minute: "2-digit"
                      })} WIB
                    </p>
                  </div>

                  <div>
                    <p className="text-[12px] font-bold text-slate-500 mb-1">URL Berkas</p>
                    <input 
                      type="text" 
                      readOnly 
                      value={selectedMedia.url}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-[13px] font-medium text-slate-600 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Meta Inputs */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div>
                    <label className="text-[12px] font-bold text-slate-600 block mb-1.5">Teks Alternatif (Alt Text)</label>
                    <input 
                      type="text" 
                      placeholder="Gambar tentang..."
                      className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-[13px] focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="text-[12px] font-bold text-slate-600 block mb-1.5">Keterangan (Caption)</label>
                    <input 
                      type="text" 
                      placeholder="Keterangan singkat di bawah gambar..."
                      className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-[13px] focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="text-[12px] font-bold text-slate-600 block mb-1.5">Deskripsi</label>
                    <textarea 
                      placeholder="Penjelasan detail jika diperlukan..."
                      rows={3}
                      className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-[13px] focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all font-medium text-slate-800 placeholder:text-slate-400 resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col gap-3">
                  <button className="w-full py-3 bg-black hover:bg-slate-800 text-white text-[14px] font-bold rounded-xl transition-all shadow-sm">
                    Simpan Meta
                  </button>
                  <button 
                    onClick={() => setShowDeleteModal(true)}
                    className="w-full py-3 text-red-600 hover:bg-red-50 text-[14px] font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Trash2 size={16} strokeWidth={2.5} />
                    Hapus Permanen
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center opacity-70">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 mb-6 shadow-sm border border-slate-100">
                  <ImageIcon size={32} strokeWidth={1.5} />
                </div>
                <p className="text-[15px] font-medium text-slate-500 max-w-[200px] leading-relaxed">
                  Klik pada gambar di galeri untuk melihat rincian.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={showDeleteModal}
        title="Hapus Media?"
        message={`Apakah Anda yakin ingin menghapus "${selectedMedia?.name}" secara permanen? File ini tidak dapat dikembalikan.`}
        confirmText="OK"
        cancelText="Cancel"
        onConfirm={handleDeleteMedia}
        onCancel={() => setShowDeleteModal(false)}
        isLoading={isDeleting}
        isDestructive={true}
      />
    </div>
  );
}