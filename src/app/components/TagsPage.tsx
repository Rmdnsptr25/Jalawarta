import { useState } from "react";
import { ArrowLeft, Tag, Plus, XCircle, X } from "lucide-react";

export function TagsPage() {
  const [tagName, setTagName] = useState("");
  const [showError, setShowError] = useState(false);

  const tags = [
    {
      name: "WordPress",
      count: "24 artikel",
      iconColor: "text-indigo-500",
      bgColor: "bg-indigo-50",
    },
    {
      name: "JavaScript",
      count: "18 artikel",
      iconColor: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      name: "React",
      count: "15 artikel",
      iconColor: "text-cyan-500",
      bgColor: "bg-cyan-50",
    },
    {
      name: "SEO",
      count: "32 artikel",
      iconColor: "text-emerald-500",
      bgColor: "bg-emerald-50",
    },
    {
      name: "Tutorial",
      count: "28 artikel",
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      name: "Tips",
      count: "21 artikel",
      iconColor: "text-red-500",
      bgColor: "bg-red-50",
    },
  ];

  const handleAddTag = () => {
    if (!tagName.trim()) {
      setShowError(true);
      setTimeout(() => setShowError(false), 4000);
      return;
    }
    // Simulate successful add
    setShowError(false);
    setTagName("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddTag();
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-300 relative">
      {/* Error Toast */}
      {showError && (
        <div className="fixed top-8 right-8 z-50 animate-in slide-in-from-top-6 fade-in duration-300">
          <div className="bg-white border border-red-200 shadow-xl shadow-red-500/10 rounded-full px-5 py-3 flex items-center gap-3">
            <XCircle size={20} className="text-red-500 fill-red-500 stroke-white" strokeWidth={2} />
            <span className="text-[14px] font-bold text-red-600 mr-2">
              Nama tag harus diisi
            </span>
            <button 
              onClick={() => setShowError(false)}
              className="text-red-400 hover:text-red-600 transition-colors p-0.5 rounded-full hover:bg-red-50"
            >
              <X size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      )}

      {/* Title Header */}
      <div className="flex items-start gap-4">
        <button className="mt-2 p-1.5 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
          <ArrowLeft size={24} />
        </button>
        <div>
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-1">
            Tags
          </h2>
          <p className="text-slate-500 text-base font-medium">Kelola tags artikel</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column: Add New Tag & Stats */}
        <div className="w-full lg:w-[400px] shrink-0 flex flex-col gap-6">
          {/* Add Tag Card */}
          <div className="bg-white rounded-[24px] p-8 shadow-sm border border-slate-200/60">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-indigo-500 shadow-md shadow-indigo-500/20">
                <Tag size={24} fill="currentColor" className="text-white/20 stroke-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">
                Tambah Tag Baru
              </h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-slate-700">
                  Nama Tag
                </label>
                <input
                  type="text"
                  value={tagName}
                  onChange={(e) => {
                    setTagName(e.target.value);
                    if (showError) setShowError(false);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="React, JavaScript, SEO..."
                  className={`w-full px-5 py-3.5 bg-slate-50 border rounded-2xl text-sm focus:outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400 ${
                    showError 
                      ? "border-red-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500 bg-red-50/30" 
                      : "border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  }`}
                />
              </div>
              <p className="text-xs text-slate-400 font-medium pb-2">
                Tekan Enter untuk menambahkan
              </p>

              <button 
                onClick={handleAddTag}
                className="w-full flex items-center justify-center gap-2 bg-[#1976d2] hover:bg-[#176bbf] text-white font-bold py-4 px-6 rounded-full shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5"
              >
                <Plus size={18} strokeWidth={2.5} />
                Tambah Tag
              </button>
            </div>
          </div>

          {/* Total Tags Card */}
          <div className="bg-white rounded-[24px] p-8 shadow-sm border border-slate-200/60 flex flex-col items-center justify-center h-[200px]">
            <p className="text-sm font-bold text-slate-500 mb-2">Total Tags</p>
            <h4 className="text-[64px] leading-none font-black text-slate-900 tracking-tight">
              6
            </h4>
          </div>
        </div>

        {/* Right Column: Tags List */}
        <div className="flex-1">
          <div className="bg-white rounded-[24px] p-8 shadow-sm border border-slate-200/60 min-h-[500px]">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-indigo-500 shadow-md shadow-indigo-500/20">
                  <Tag size={24} fill="currentColor" className="text-white/20 stroke-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Daftar Tags</h3>
              </div>
              <div className="px-5 py-2.5 bg-[#f3e8ff] text-[#4c1d95] rounded-full text-sm font-bold border border-purple-200">
                138 total penggunaan
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 rounded-[20px] border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer bg-white group"
                >
                  <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center ${tag.bgColor} ${tag.iconColor} group-hover:scale-110 transition-transform`}>
                    <Tag size={20} fill="currentColor" className="opacity-20 absolute" strokeWidth={2} />
                    <Tag size={20} className="absolute" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-800 group-hover:text-indigo-600 transition-colors mb-0.5">
                      {tag.name}
                    </h4>
                    <p className="text-[13px] text-slate-500 font-medium">
                      {tag.count}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
