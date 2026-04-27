import { useState } from "react";
import { Sparkles, TrendingUp, Newspaper, Search, XCircle, X, ChevronDown } from "lucide-react";

interface InsightsPageProps {
  activeTab: string;
  setActivePage: (page: string) => void;
}

export function InsightsPage({ activeTab, setActivePage }: InsightsPageProps) {
  // Normalize tab names to match the UI screenshot
  const currentTab = activeTab === "Social Insight" ? "Social Trends" 
                   : activeTab === "News Insight" ? "News Search" 
                   : activeTab === "Insights" ? "Saved Insights" 
                   : activeTab;

  const [newsQuery, setNewsQuery] = useState("");
  const [socialQuery, setSocialQuery] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const triggerError = (message: string) => {
    setErrorMessage(message);
    setShowError(true);
    setTimeout(() => setShowError(false), 4000);
  };

  const handleNewsSearch = () => {
    if (!newsQuery.trim()) {
      triggerError("Topik berita harus diisi");
      return;
    }
    // search logic
  };

  const handleSocialSearch = () => {
    if (!socialQuery.trim()) {
      triggerError("Kata kunci viral harus diisi");
      return;
    }
    // search logic
  };

  return (
    <div className="max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-300 relative">
      {/* Error Toast */}
      {showError && (
        <div className="fixed top-8 right-8 z-50 animate-in slide-in-from-top-6 fade-in duration-300">
          <div className="bg-white border border-red-200 shadow-xl shadow-red-500/10 rounded-full px-5 py-3 flex items-center gap-3">
            <XCircle size={20} className="text-red-500 fill-red-500 stroke-white" strokeWidth={2} />
            <span className="text-[14px] font-bold text-red-600 mr-2">
              {errorMessage}
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

      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-1">
          AI Insights
        </h2>
        <p className="text-slate-500 text-base font-medium">
          {currentTab === "Social Trends" 
            ? "Riset artikel trending dan scrape konten kompetitor otomatis."
            : "Riset artikel trending dari space konten kompetitor otomatis."}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-8 border-b border-slate-200/80 mb-6">
        {["Saved Insights", "News Search", "Social Trends"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActivePage(tab)}
            className={`pb-4 text-sm font-bold transition-all relative ${
              currentTab === tab
                ? "text-blue-600"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            {tab}
            {currentTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 rounded-t-full" />
            )}
          </button>
        ))}
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-[24px] p-8 shadow-sm border border-slate-200/60 min-h-[500px]">
        
        {currentTab === "Saved Insights" && (
          <div className="space-y-12">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-indigo-50 text-indigo-500 shrink-0">
                  <Sparkles size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">Antrian Artikel AI</h3>
                  <p className="text-sm text-slate-500 font-medium mb-3">
                    Insight yang sudah disimpan akan terlihat dalam antrian pembuatan Content Strategy.
                  </p>
                  <div className="flex items-center gap-4 text-xs font-bold">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-400 opacity-50" />
                      16 April 2026
                    </span>
                    <span className="px-3 py-1.5 bg-orange-50 text-orange-600 rounded-full border border-orange-100">
                      Dalam Antrian
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center opacity-70 py-20 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
              <div className="w-16 h-16 rounded-[20px] bg-white border border-slate-100 flex items-center justify-center mb-6 shadow-sm">
                <TrendingUp size={28} className="text-slate-400" strokeWidth={2.5} />
              </div>
              <p className="text-sm text-slate-500 font-medium max-w-[380px] leading-relaxed">
                Belum ada insight yang disimpan. Lakukan riset melalui <span className="text-blue-600 font-bold">News Search</span> atau <span className="text-blue-600 font-bold">Social Trends</span>.
              </p>
            </div>
          </div>
        )}

        {currentTab === "News Search" && (
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-indigo-50 text-indigo-500 shrink-0">
                  <Newspaper size={24} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-slate-800">News Search Engine</h3>
              </div>
              <p className="text-sm text-slate-500 font-medium">
                Mencari artikel berita relevan dari seluruh web via Google News API.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
              <div className="space-y-2 md:col-span-5">
                <label className="text-[13px] font-bold text-slate-800">
                  Topik Berita
                </label>
                <input
                  type="text"
                  value={newsQuery}
                  onChange={(e) => {
                    setNewsQuery(e.target.value);
                    if (showError) setShowError(false);
                  }}
                  placeholder="Contoh: Harga Emas"
                  className={`w-full px-4 py-3 bg-white border rounded-xl text-sm focus:outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400 ${
                    showError && !newsQuery.trim()
                      ? "border-red-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500 bg-red-50/30" 
                      : "border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  }`}
                />
              </div>

              <div className="space-y-2 md:col-span-4">
                <label className="text-[13px] font-bold text-slate-800">
                  Rentang Waktu
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800 appearance-none cursor-pointer pr-10">
                    <option value="today">Hari ini</option>
                    <option value="week">Minggu ini</option>
                    <option value="month">Bulan ini</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <ChevronDown size={16} strokeWidth={2.5} />
                  </div>
                </div>
              </div>

              <div className="md:col-span-3">
                <button 
                  onClick={handleNewsSearch}
                  className="w-full flex items-center justify-center gap-2 bg-[#1976d2] hover:bg-[#176bbf] text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5"
                >
                  <Search size={18} strokeWidth={2.5} />
                  Search
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center py-20 rounded-2xl bg-slate-50/50 mt-10 border border-dashed border-slate-200">
              <div className="w-16 h-16 rounded-[20px] bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-6">
                <Search size={28} className="text-slate-400" strokeWidth={2.5} />
              </div>
              <h4 className="text-base font-bold text-slate-800 mb-2">Mulai Pencarian</h4>
              <p className="text-sm text-slate-500 font-medium max-w-[340px] leading-relaxed">
                Masukkan topik berita dan klik tombol <span className="text-blue-600 font-bold">Search</span> untuk mencari artikel terbaru.
              </p>
            </div>
          </div>
        )}

        {currentTab === "Social Trends" && (
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-indigo-50 text-indigo-500 shrink-0">
                  <TrendingUp size={24} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-slate-800">Social Media Trends</h3>
              </div>
              <p className="text-sm text-slate-500 font-medium">
                Mencari konten viral dan trending dari TikTok & Social Media lainnya via RapidAPI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-6">
                <input
                  type="text"
                  value={socialQuery}
                  onChange={(e) => {
                    setSocialQuery(e.target.value);
                    if (showError) setShowError(false);
                  }}
                  placeholder="Kata kunci viral (contoh: Lebaran 2024)"
                  className={`w-full px-4 py-3 bg-white border rounded-xl text-sm focus:outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400 ${
                    showError && !socialQuery.trim()
                      ? "border-red-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500 bg-red-50/30" 
                      : "border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  }`}
                />
              </div>

              <div className="md:col-span-3 relative">
                <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800 appearance-none cursor-pointer pr-10">
                  <option value="tiktok">Tik Tok</option>
                  <option value="instagram">Instagram</option>
                  <option value="twitter">X / Twitter</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <ChevronDown size={16} strokeWidth={2.5} />
                </div>
              </div>

              <div className="md:col-span-3">
                <button 
                  onClick={handleSocialSearch}
                  className="w-full flex items-center justify-center gap-2 bg-[#1976d2] hover:bg-[#176bbf] text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5"
                >
                  <Search size={18} strokeWidth={2.5} />
                  Search Trend
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center py-20 rounded-2xl bg-slate-50/50 mt-10 border border-dashed border-slate-200">
              <div className="w-16 h-16 rounded-[20px] bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-6">
                <TrendingUp size={28} className="text-slate-400" strokeWidth={2.5} />
              </div>
              <h4 className="text-base font-bold text-slate-800 mb-2">Mulai Pelacakan</h4>
              <p className="text-sm text-slate-500 font-medium max-w-[340px] leading-relaxed">
                Masukkan kata kunci viral dan klik tombol <span className="text-blue-600 font-bold">Search Trend</span> untuk melacak konten trending.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}