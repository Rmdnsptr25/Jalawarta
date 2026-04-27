import {
  Bold,
  Italic,
  Strikethrough,
  List,
  ListOrdered,
  Quote,
  Code,
  Wand2,
  Plus,
  Eye,
  Copy,
  Image as ImageIcon,
  Send,
  ArrowLeft,
  Smartphone,
  Monitor,
  Globe
} from "lucide-react";
import { useState, useRef, useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { MediaLibraryModal } from "./MediaLibraryModal";
import { toast } from "sonner";

interface CreatePageProps {
  setActivePage: (page: string) => void;
}

const CustomToolbar = ({ id }: { id: string }) => (
  <div id={id} className="flex items-center justify-between !border-0 !border-b !border-slate-100 !pb-4 !mb-4 !px-0 flex-wrap gap-4">
    <div className="flex items-center gap-1 flex-wrap">
      <span className="ql-formats !mr-4">
        <select className="ql-header" defaultValue="">
          <option value="2" />
          <option value="3" />
          <option value="" />
        </select>
      </span>
      <span className="ql-formats !mr-4">
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-strike" />
        <button className="ql-blockquote" />
      </span>
      <span className="ql-formats !mr-4">
        <button className="ql-list" value="ordered" />
        <button className="ql-list" value="bullet" />
      </span>
      <span className="ql-formats !mr-4">
        <button className="ql-code-block" />
        <button className="ql-image" />
      </span>
      <span className="ql-formats !mr-0">
        <button className="ql-clean" />
      </span>
    </div>

    <div className="flex items-center gap-2">
      <div role="button" className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-500 text-white rounded-lg text-xs font-semibold hover:bg-purple-600 transition-colors shadow-sm shadow-purple-500/20 whitespace-nowrap cursor-pointer !h-auto !w-auto !p-3 !py-1.5">
        <Wand2 size={14} /> AI Fix
      </div>
      <div role="button" className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-100 text-purple-600 rounded-lg text-xs font-semibold hover:bg-purple-200 transition-colors whitespace-nowrap cursor-pointer !h-auto !w-auto !p-3 !py-1.5">
        <Wand2 size={14} /> AI Expand
      </div>
    </div>
  </div>
);

export function CreatePage({ setActivePage }: CreatePageProps) {
  const [activeTab, setActiveTab] = useState("SEO");
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
  const [isSelectingForEditor, setIsSelectingForEditor] = useState(false);
  const [title, setTitle] = useState("");
  const [permalink, setPermalink] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [content, setContent] = useState("");
  const [seoKeyword, setSeoKeyword] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [previewMode, setPreviewMode] = useState<"mobile" | "desktop">("mobile");
  
  const getSeoAnalysis = () => {
    const analysis = [];
    const textContent = content.replace(/<[^>]*>?/gm, '').trim();
    const wordCount = textContent.split(/\s+/).filter(w => w.length > 0).length;

    // Focus Keyword
    if (!seoKeyword) {
      analysis.push({ text: "Focus Keyword belum ditentukan", color: "bg-yellow-500" });
    } else {
      const keywordInTitle = title.toLowerCase().includes(seoKeyword.toLowerCase());
      if (keywordInTitle) {
        analysis.push({ text: "Focus keyword terdapat pada judul", color: "bg-emerald-500" });
      } else {
        analysis.push({ text: "Focus keyword tidak ditemukan pada judul", color: "bg-red-500" });
      }
    }

    // Meta Description
    if (!metaDescription) {
      analysis.push({ text: "Meta description belum ditentukan.", color: "bg-yellow-500" });
    } else {
      if (metaDescription.length >= 120 && metaDescription.length <= 160) {
        analysis.push({ text: "Panjang meta description sudah ideal", color: "bg-emerald-500" });
      } else {
        analysis.push({ text: `Panjang meta description tidak ideal (${metaDescription.length} karakter)`, color: "bg-red-500" });
      }
    }

    // Featured Image
    if (!featuredImage) {
      analysis.push({ text: "Belum ada gambar unggulan", color: "bg-yellow-500" });
    } else {
      analysis.push({ text: "Gambar unggulan sudah ditambahkan", color: "bg-emerald-500" });
    }

    // Content length
    if (wordCount === 0) {
      analysis.push({ text: "Konten terlalu pendek (0 kata). Target: ~300 kata.", color: "bg-yellow-500" });
    } else if (wordCount < 300) {
      analysis.push({ text: `Konten terlalu pendek (${wordCount} kata). Target: ~300 kata.`, color: "bg-red-500" });
    } else {
      analysis.push({ text: `Panjang konten sangat baik (${wordCount} kata).`, color: "bg-emerald-500" });
    }

    // Links
    if (wordCount === 0) {
      analysis.push({ text: "Belum ada link internal/eksternal dalam konten.", color: "bg-yellow-500" });
    } else if (!content.includes('<a')) {
      analysis.push({ text: "Belum ada link internal/eksternal dalam konten.", color: "bg-red-500" });
    } else {
      analysis.push({ text: "Terdapat link dalam konten.", color: "bg-emerald-500" });
    }

    return analysis;
  };

  const quillRef = useRef<ReactQuill>(null);

  const modules = useMemo(() => ({
    toolbar: {
      container: "#toolbar-page",
      handlers: {
        image: () => {
          setIsSelectingForEditor(true);
          setIsMediaModalOpen(true);
        }
      }
    }
  }), []);

  const handleMediaSelect = (url: string) => {
    if (isSelectingForEditor) {
      if (quillRef.current) {
        const editor = quillRef.current.getEditor();
        const range = editor.getSelection();
        const cursorPosition = range ? range.index : 0;
        editor.insertEmbed(cursorPosition, 'image', url);
        editor.setSelection(cursorPosition + 1, 0);
      }
    } else {
      setFeaturedImage(url);
    }
    setIsSelectingForEditor(false);
  };

  const handlePublish = () => {
    if (!title.trim() || !permalink.trim()) {
      toast.error("Publikasi Gagal", {
        description: "Judul dan Permalink harus diisi sebelum mempublikasikan halaman.",
      });
      return;
    }
    toast.success("Halaman Dipublikasikan", {
      description: "Halaman Anda telah berhasil dipublikasikan.",
    });
  };

  const handleSaveDraft = () => {
    if (!title.trim()) {
      toast.error("Simpan Gagal", {
        description: "Judul halaman minimal harus diisi untuk menyimpan draft.",
      });
      return;
    }
    toast.success("Draft Disimpan", {
      description: "Halaman telah disimpan ke dalam draft.",
    });
  };

  return (
    <div className="max-w-[1400px] mx-auto space-y-6 animate-in fade-in duration-300">
      {/* Title */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setActivePage("All Pages")}
          className="p-2 hover:bg-slate-200/50 rounded-full transition-colors text-slate-500"
        >
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight">
          Buat Halaman Baru
        </h2>
      </div>

      <MediaLibraryModal 
        isOpen={isMediaModalOpen} 
        onClose={() => setIsMediaModalOpen(false)} 
        onSelectMedia={handleMediaSelect}
      />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Editor Column */}
        <div className="flex-1 space-y-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 tracking-wider uppercase">
                Judul
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Masukkan judul yang menarik..."
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800 placeholder:text-slate-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 tracking-wider uppercase">
                Permalink
              </label>
              <input
                type="text"
                value={permalink}
                onChange={(e) => setPermalink(e.target.value)}
                placeholder="domain.com/url-halaman-anda"
                className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800 placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Editor Area */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 flex flex-col">
            <style>{`
              .quill-custom .ql-toolbar.ql-snow {
                border: none;
                border-bottom: 1px solid #f1f5f9;
                padding: 0 0 16px 0;
                margin-bottom: 16px;
                font-family: 'Inter', sans-serif;
              }
              .quill-custom .ql-container.ql-snow {
                border: none;
                font-family: 'Inter', sans-serif;
                font-size: 16px;
                color: #334155;
              }
              .quill-custom .ql-editor {
                padding: 0;
                min-height: 400px;
              }
              .quill-custom .ql-editor.ql-blank::before {
                left: 0;
                color: #94a3b8;
                font-style: normal;
              }
              .quill-custom .ql-picker.ql-header .ql-picker-label svg {
                display: none !important;
              }
              .quill-custom .ql-picker.ql-header .ql-picker-label {
                padding-right: 18px;
                position: relative;
              }
              .quill-custom .ql-picker.ql-header .ql-picker-label::after {
                content: '';
                position: absolute;
                right: 2px;
                top: 50%;
                transform: translateY(-50%);
                width: 14px;
                height: 14px;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                pointer-events: none;
              }
            `}</style>
            
            <CustomToolbar id="toolbar-page" />
            
            <ReactQuill 
              ref={quillRef}
              theme="snow" 
              value={content} 
              onChange={setContent} 
              modules={modules}
              placeholder="Mulai menulis konten halaman Anda di sini..."
              className="quill-custom flex-1"
            />
            
            <div className="text-xs text-slate-400 pt-4 mt-4 border-t border-slate-100 flex justify-between">
              <span>Gunakan toolbar di atas untuk memformat teks.</span>
              <span>{content.replace(/<[^>]*>?/gm, '').length} karakter</span>
            </div>
          </div>

          {/* SEO / Social Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
            <div className="flex border-b border-slate-100">
              <button
                onClick={() => setActiveTab("SEO")}
                className={`flex-1 py-3 text-sm font-bold transition-all border-b-2 ${
                  activeTab === "SEO"
                    ? "border-blue-500 text-blue-600 bg-blue-50/30"
                    : "border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                }`}
              >
                SEO
              </button>
              <button
                onClick={() => setActiveTab("SOCIAL")}
                className={`flex-1 py-3 text-sm font-bold transition-all border-b-2 ${
                  activeTab === "SOCIAL"
                    ? "border-blue-500 text-blue-600 bg-blue-50/30"
                    : "border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                }`}
              >
                SOCIAL
              </button>
            </div>

            <div className="p-5">
              {activeTab === "SEO" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-slate-500 tracking-wider uppercase">
                        Focus Keyphrase
                      </label>
                      <button className="flex items-center gap-1 text-xs font-bold text-fuchsia-600 hover:text-fuchsia-700 transition-colors">
                        <Wand2 size={12} />
                        Suggest by AI
                      </button>
                    </div>
                    <input
                      type="text"
                      value={seoKeyword}
                      onChange={(e) => setSeoKeyword(e.target.value)}
                      placeholder="Masukkan kata kunci utama..."
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-slate-500 tracking-wider uppercase">
                        Google Preview
                      </label>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => setPreviewMode("mobile")}
                          className={`p-1.5 rounded-md transition-colors ${previewMode === "mobile" ? "bg-blue-50 text-blue-600" : "text-slate-400 hover:bg-slate-100 hover:text-slate-600"}`}
                        >
                          <Smartphone size={16} />
                        </button>
                        <button 
                          onClick={() => setPreviewMode("desktop")}
                          className={`p-1.5 rounded-md transition-colors ${previewMode === "desktop" ? "bg-blue-50 text-blue-600" : "text-slate-400 hover:bg-slate-100 hover:text-slate-600"}`}
                        >
                          <Monitor size={16} />
                        </button>
                      </div>
                    </div>
                    
                    <div className={`bg-white border border-slate-200 rounded-xl p-5 shadow-sm transition-all ${previewMode === "mobile" ? "max-w-[320px] mx-auto" : "max-w-full"}`}>
                      <div className="flex items-center gap-3 mb-1">
                        <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                          <Globe size={14} className="text-slate-500" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-slate-800 font-medium">jalawarta.com</span>
                          <span className="text-[11px] text-slate-500">post › {permalink || "permalink"}</span>
                        </div>
                      </div>
                      <h4 className="text-xl text-[#1a0dab] font-medium leading-tight mb-1 hover:underline cursor-pointer mt-2">
                        {seoTitle || title || "Judul Halaman"}
                      </h4>
                      <p className="text-[13px] text-[#4d5156] leading-snug line-clamp-2">
                        {metaDescription || content.replace(/<[^>]*>?/gm, '').substring(0, 160) || "Mulai menulis... Gunakan toolbar di atas untuk memformat teks."}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 tracking-wider uppercase">
                      SEO Title Override
                    </label>
                    <input
                      type="text"
                      value={seoTitle}
                      onChange={(e) => setSeoTitle(e.target.value)}
                      placeholder="Judul Berita"
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 tracking-wider uppercase">
                      Meta Description
                    </label>
                    <textarea
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                      placeholder="Mulai menulis... Gunakan toolbar di atas untuk memformat teks."
                      rows={3}
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800 placeholder:text-slate-400 resize-none"
                    />
                    <div className="text-right">
                      <span className={`text-[11px] font-bold ${metaDescription.length > 160 ? "text-red-500" : "text-slate-400"}`}>{metaDescription.length}/160</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <label className="text-xs font-bold text-slate-800 tracking-wider uppercase">
                      SEO Analysis
                    </label>
                    <ul className="space-y-2.5">
                      {getSeoAnalysis().map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 font-medium">
                          <div className={`w-2 h-2 rounded-full ${item.color} mt-1.5 shrink-0`} />
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  </div>
              </div>
            )}
            {activeTab === "SOCIAL" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-slate-500 tracking-wider uppercase">
                        Social Preview
                      </label>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => setPreviewMode("mobile")}
                          className={`p-1.5 rounded-md transition-colors ${previewMode === "mobile" ? "bg-blue-50 text-blue-600" : "text-slate-400 hover:bg-slate-100 hover:text-slate-600"}`}
                        >
                          <Smartphone size={16} />
                        </button>
                        <button 
                          onClick={() => setPreviewMode("desktop")}
                          className={`p-1.5 rounded-md transition-colors ${previewMode === "desktop" ? "bg-blue-50 text-blue-600" : "text-slate-400 hover:bg-slate-100 hover:text-slate-600"}`}
                        >
                          <Monitor size={16} />
                        </button>
                      </div>
                    </div>
                    
                    <div className={`bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm transition-all ${previewMode === "mobile" ? "max-w-[320px] mx-auto" : "max-w-full"}`}>
                      <div className="w-full h-[160px] bg-slate-100 relative group cursor-pointer" onClick={() => { setIsSelectingForEditor(false); setIsMediaModalOpen(true); }}>
                        {featuredImage ? (
                          <>
                            <img src={featuredImage} alt="Social Preview" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="text-white text-sm font-bold">Ganti Gambar</span>
                            </div>
                          </>
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 hover:bg-slate-200 transition-colors">
                            <ImageIcon size={32} className="mb-2" />
                            <span className="text-xs font-bold">Upload Gambar Social</span>
                          </div>
                        )}
                      </div>
                      <div className="p-4 bg-slate-50/50">
                        <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mb-1 block">jalawarta.com</span>
                        <h4 className="text-base text-slate-900 font-bold leading-tight mb-1 line-clamp-1">
                          {seoTitle || title || "Judul Halaman"}
                        </h4>
                        <p className="text-[13px] text-slate-500 font-medium leading-snug line-clamp-1">
                          {metaDescription || content.replace(/<[^>]*>?/gm, '').substring(0, 160) || "Deskripsi singkat yang akan tampil di media sosial..."}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 tracking-wider uppercase">
                      Social Title Override
                    </label>
                    <input
                      type="text"
                      value={seoTitle}
                      onChange={(e) => setSeoTitle(e.target.value)}
                      placeholder="Judul Berita"
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-slate-500 tracking-wider uppercase">
                        Social Description Override
                      </label>
                      <span className={`text-[11px] font-bold ${metaDescription.length > 160 ? "text-red-500" : "text-slate-400"}`}>{metaDescription.length}/160</span>
                    </div>
                    <textarea
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                      placeholder="Mulai menulis... Gunakan toolbar di atas untuk memformat teks."
                      rows={3}
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800 placeholder:text-slate-400 resize-none"
                    ></textarea>
                  </div>
              </div>
            )}
            </div>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="w-full lg:w-[340px] shrink-0 space-y-6">
          {/* Actions */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60">
            <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-5">
              Aksi
            </h3>
            <div className="space-y-3">
              <button 
                onClick={handlePublish}
                className="w-full flex items-center justify-center gap-2 bg-[#1976d2] hover:bg-[#176bbf] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5"
              >
                <Send size={16} strokeWidth={2.5} />
                Publikasikan
              </button>
              <button 
                onClick={handleSaveDraft}
                className="w-full font-bold text-[#1976d2] hover:text-[#125495] hover:bg-blue-50 py-3.5 px-6 rounded-xl transition-all"
              >
                Simpan Draft
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60">
            <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-5">
              Gambar Utama
            </h3>
            {featuredImage ? (
              <div className="relative group rounded-xl overflow-hidden aspect-video border border-slate-200">
                <img
                  src={featuredImage}
                  alt="Featured"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => setIsMediaModalOpen(true)}
                    className="bg-white text-slate-800 font-bold px-4 py-2 rounded-xl text-sm hover:scale-105 transition-transform"
                  >
                    Ubah Gambar
                  </button>
                </div>
              </div>
            ) : (
              <button 
                onClick={() => setIsMediaModalOpen(true)}
                className="w-full aspect-video rounded-xl border-2 border-dashed border-slate-200 hover:border-blue-400 hover:bg-blue-50 flex flex-col items-center justify-center gap-3 transition-all text-slate-400 hover:text-blue-500 group"
              >
                <ImageIcon size={32} className="group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold tracking-wider">
                  PILIH GAMBAR
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}