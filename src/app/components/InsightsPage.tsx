import { useState } from "react";
import { Sparkles, TrendingUp, Newspaper, Search, XCircle, X, ChevronDown, Activity, Globe } from "lucide-react";

interface InsightsPageProps {
  activeTab: string;
  setActivePage: (page: string) => void;
}

export function InsightsPage({ activeTab, setActivePage }: InsightsPageProps) {
  // Map internal sidebar names to display tab names if needed,
  // but we can just use the actual display tab names directly now
  const currentTab = 
    activeTab === "News Insight" ? "News Search" :
    activeTab === "Social Insight" ? "Social Trends" :
    activeTab === "Saved Insights" ? "Saved Insights" :
    activeTab === "Kompetitor Monitor" ? "Kompetitor Monitor" :
    activeTab;

  const [newsQuery, setNewsQuery] = useState("");
  const [socialQuery, setSocialQuery] = useState("");
  const [competitorUrl, setCompetitorUrl] = useState("");
  const [competitorKeyword, setCompetitorKeyword] = useState("");
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
  };

  const handleSocialSearch = () => {
    if (!socialQuery.trim()) {
      triggerError("Kata kunci viral harus diisi");
      return;
    }
  };

  const handleCompetitorSearch = () => {
    if (!competitorUrl.trim()) {
      triggerError("Sumber berita harus diisi");
      return;
    }
  };

  const tabs = [
    { id: "Saved Insights", label: "Saved Insights" },
    { id: "News Search", label: "News Search" },
    { id: "Social Trends", label: "Social Trends" },
    { id: "Kompetitor Monitor", label: "Kompetitor Monitor" }
  ];

  return (
    <div className="max-w-[1400px] mx-auto space-y-6 animate-in fade-in duration-300 relative">
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

      {/* Top Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-2">
        {/* Title and Subtitle */}
        <div>
          <h2 className="text-[22px] font-bold text-[#1e293b] tracking-tight mb-1">
            AI Insights
          </h2>
          <p className="text-[14px] text-[#64748b] font-medium">
            Riset artikel trending dan scrape konten kompetitor otomatis.
          </p>
        </div>

        {/* Tab Buttons Pill */}
        <div className="flex items-center p-1 bg-white border border-[#e2e8f0] rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.02)] overflow-x-auto shrink-0 hide-scrollbar">
          {tabs.map((tab) => {
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  // Map back to sidebar keys when clicked
                  const pageId = 
                    tab.id === "News Search" ? "News Insight" :
                    tab.id === "Social Trends" ? "Social Insight" :
                    tab.id;
                  setActivePage(pageId);
                }}
                className={`px-5 py-2.5 text-[13px] font-semibold rounded-lg transition-all whitespace-nowrap ${
                  isActive
                    ? "text-[#0f172a] bg-[#f8fafc]"
                    : "text-[#64748b] hover:text-[#0f172a] hover:bg-[#f8fafc]/50"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] min-h-[400px]">
        
        {currentTab === "Saved Insights" && (
          <div className="space-y-6">
            <h3 className="text-[16px] font-bold text-[#1e293b]">Antrian Artikel AI</h3>
            <p className="text-[14px] text-[#64748b] font-medium">
              Insight yang sudah disimpan atau sedang dalam antrian pemrosesan Content Strategy.
            </p>
            
            <div className="mt-16 flex items-center justify-center text-center">
              <p className="text-[14px] text-[#64748b] font-medium max-w-md">
                Belum ada insight yang disimpan. Lakukan riset melalui tab News Search atau Social Trends.
              </p>
            </div>
          </div>
        )}

        {currentTab === "News Search" && (
          <div className="space-y-6">
            <h3 className="text-[16px] font-bold text-[#1e293b]">News Search Engine</h3>
            <p className="text-[14px] text-[#64748b] font-medium">
              Mencari artikel berita relevan dari seluruh web via Google News API.
            </p>
            
            <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
              <div className="w-full md:flex-1">
                <input
                  type="text"
                  value={newsQuery}
                  onChange={(e) => {
                    setNewsQuery(e.target.value);
                    if (showError) setShowError(false);
                  }}
                  placeholder="Topik berita (contoh: Harga Emas)"
                  className="w-full px-4 py-2.5 bg-white border border-[#e2e8f0] rounded-lg text-[14px] font-medium text-[#1e293b] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all"
                />
              </div>

              <div className="w-full md:w-[220px] shrink-0 relative">
                <select className="w-full px-4 py-2.5 bg-white border border-[#e2e8f0] rounded-lg text-[14px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all appearance-none cursor-pointer pr-10">
                  <option value="24h">24 Jam Terakhir</option>
                  <option value="1w">1 Minggu Terakhir</option>
                  <option value="1m">1 Bulan Terakhir</option>
                  <option value="any">Kapanpun</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#64748b]">
                  <ChevronDown size={16} strokeWidth={2.5} />
                </div>
              </div>

              <button 
                onClick={handleNewsSearch}
                className="w-full md:w-auto px-8 py-2.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[14px] font-bold rounded-lg transition-colors shrink-0"
              >
                Search
              </button>
            </div>
          </div>
        )}

        {currentTab === "Social Trends" && (
          <div className="space-y-6">
            <h3 className="text-[16px] font-bold text-[#1e293b]">Social Media Trends</h3>
            <p className="text-[14px] text-[#64748b] font-medium">
              Mencari konten viral dan trending dari TikTok & Sosial Media lainnya via RapidAPI.
            </p>
            
            <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
              <div className="w-full md:flex-1">
                <input
                  type="text"
                  value={socialQuery}
                  onChange={(e) => {
                    setSocialQuery(e.target.value);
                    if (showError) setShowError(false);
                  }}
                  placeholder="Kata kunci viral (contoh: Lebaran 2024)"
                  className="w-full px-4 py-2.5 bg-white border border-[#e2e8f0] rounded-lg text-[14px] font-medium text-[#1e293b] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all"
                />
              </div>

              <div className="w-full md:w-[220px] shrink-0 relative">
                <select className="w-full px-4 py-2.5 bg-white border border-[#e2e8f0] rounded-lg text-[14px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all appearance-none cursor-pointer pr-10">
                  <option value="tiktok">TikTok</option>
                  <option value="twitter">X (Twitter) - Coming Soon</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#64748b]">
                  <ChevronDown size={16} strokeWidth={2.5} />
                </div>
              </div>

              <button 
                onClick={handleSocialSearch}
                className="w-full md:w-auto px-6 py-2.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[14px] font-bold rounded-lg transition-colors shrink-0"
              >
                Search Trend
              </button>
            </div>
          </div>
        )}

        {currentTab === "Kompetitor Monitor" && (
          <div className="space-y-4">
            <div>
              <input
                type="text"
                value={competitorUrl}
                onChange={(e) => {
                  setCompetitorUrl(e.target.value);
                  if (showError) setShowError(false);
                }}
                placeholder="Sumber berita (contoh: antaranews.com)"
                className="w-full px-4 py-2.5 bg-white border border-[#e2e8f0] rounded-lg text-[14px] font-medium text-[#1e293b] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all"
              />
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-full md:flex-1">
                <input
                  type="text"
                  value={competitorKeyword}
                  onChange={(e) => {
                    setCompetitorKeyword(e.target.value);
                  }}
                  placeholder="Kata kunci (opsional)"
                  className="w-full px-4 py-2.5 bg-white border border-[#e2e8f0] rounded-lg text-[14px] font-medium text-[#1e293b] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all"
                />
              </div>

              <div className="w-full md:w-[220px] shrink-0 relative">
                <select className="w-full px-4 py-2.5 bg-white border border-[#e2e8f0] rounded-lg text-[14px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all appearance-none cursor-pointer pr-10">
                  <option value="1w">1 Minggu Terakhir</option>
                  <option value="1h">1 Jam Terakhir</option>
                  <option value="24h">24 Jam Terakhir</option>
                  <option value="1m">1 Bulan Terakhir</option>
                  <option value="any">Kapanpun</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#64748b]">
                  <ChevronDown size={16} strokeWidth={2.5} />
                </div>
              </div>

              <button 
                onClick={handleCompetitorSearch}
                className="w-full md:w-[100px] px-6 py-2.5 bg-[#60a5fa] hover:bg-[#3b82f6] text-white text-[14px] font-bold rounded-lg transition-colors shrink-0 flex items-center justify-center"
              >
                Cari
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}