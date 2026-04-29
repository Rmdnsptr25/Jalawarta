import { ArrowRight, Cloud, Zap, Shield, BarChart3, Globe, Smartphone, CheckCircle2, Menu, X } from "lucide-react";
import { useState } from "react";

interface LandingPageProps {
  onLoginClick: () => void;
}

export function LandingPage({ onLoginClick }: LandingPageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-['Inter',sans-serif] text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center font-bold text-white shadow-lg">
                JW
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-800">Jala Warta</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#features" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Fitur</a>
              <a href="#solutions" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Solusi</a>
              <a href="#pricing" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Harga</a>
              <button 
                onClick={onLoginClick}
                className="text-slate-600 hover:text-blue-600 font-bold transition-colors"
              >
                Masuk
              </button>
              <button 
                onClick={onLoginClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-bold transition-colors shadow-md shadow-blue-500/20"
              >
                Coba Gratis
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-slate-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-4 space-y-1 shadow-lg absolute w-full">
            <a href="#features" className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg">Fitur</a>
            <a href="#solutions" className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg">Solusi</a>
            <a href="#pricing" className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg">Harga</a>
            <button 
              onClick={onLoginClick}
              className="block w-full text-left px-3 py-3 text-base font-bold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Masuk
            </button>
            <div className="px-3 pt-2">
              <button 
                onClick={onLoginClick}
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl font-bold"
              >
                Coba Gratis Sekarang
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm mb-8 border border-blue-100">
            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
            Bukan Sekadar CMS. Ini adalah SaaS Media.
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
            Bangun Imperium Media <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Tanpa Ribet Server</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Jala Warta adalah platform SaaS *end-to-end* untuk portal berita modern. Skalabilitas otomatis, monetisasi terintegrasi, dan analitik cerdas—semua siap pakai di cloud.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onLoginClick}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
            >
              Mulai 14 Hari Trial <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 rounded-full font-bold text-lg transition-all">
              Jadwalkan Demo
            </button>
          </div>
          
          <div className="mt-12 text-sm text-slate-500 font-medium">
            Telah dipercaya oleh 500+ media lokal & nasional.
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-6xl mx-auto mt-20 relative z-10">
          <div className="rounded-2xl md:rounded-[40px] bg-white p-2 md:p-4 shadow-2xl border border-slate-200/50 transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="rounded-xl md:rounded-[32px] overflow-hidden border border-slate-100 bg-slate-50 aspect-[16/9] relative">
              {/* Abstract Dashboard UI */}
              <div className="absolute inset-0 p-6 flex flex-col">
                {/* Topbar mock */}
                <div className="h-12 w-full bg-white rounded-xl mb-6 shadow-sm border border-slate-100 flex items-center px-4 justify-between">
                  <div className="w-32 h-4 bg-slate-200 rounded-full"></div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                    <div className="w-8 h-8 rounded-full bg-blue-100"></div>
                  </div>
                </div>
                
                <div className="flex gap-6 flex-1">
                  {/* Sidebar mock */}
                  <div className="w-64 bg-white rounded-xl shadow-sm border border-slate-100 p-4 flex flex-col gap-4">
                    <div className="h-8 bg-slate-100 rounded-md w-full"></div>
                    <div className="h-8 bg-slate-50 rounded-md w-3/4"></div>
                    <div className="h-8 bg-slate-50 rounded-md w-5/6"></div>
                    <div className="h-8 bg-slate-50 rounded-md w-full"></div>
                  </div>
                  
                  {/* Content mock */}
                  <div className="flex-1 flex flex-col gap-6">
                    <div className="flex gap-6">
                      <div className="flex-1 h-32 bg-white rounded-xl shadow-sm border border-slate-100 p-4">
                        <div className="h-4 w-24 bg-slate-100 rounded-full mb-4"></div>
                        <div className="h-10 w-16 bg-blue-500/20 rounded-lg"></div>
                      </div>
                      <div className="flex-1 h-32 bg-white rounded-xl shadow-sm border border-slate-100 p-4">
                         <div className="h-4 w-24 bg-slate-100 rounded-full mb-4"></div>
                        <div className="h-10 w-20 bg-indigo-500/20 rounded-lg"></div>
                      </div>
                      <div className="flex-1 h-32 bg-white rounded-xl shadow-sm border border-slate-100 p-4">
                         <div className="h-4 w-24 bg-slate-100 rounded-full mb-4"></div>
                        <div className="h-10 w-12 bg-emerald-500/20 rounded-lg"></div>
                      </div>
                    </div>
                    
                    <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                      <div className="h-4 w-48 bg-slate-200 rounded-full mb-8"></div>
                      <div className="space-y-4">
                        <div className="h-12 w-full bg-slate-50 rounded-lg"></div>
                        <div className="h-12 w-full bg-slate-50 rounded-lg"></div>
                        <div className="h-12 w-full bg-slate-50 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Kekuatan SaaS untuk Media Modern</h2>
            <p className="text-lg text-slate-600">Tinggalkan kerumitan mengurus hosting dan plugin. Fokus pada pembuatan konten, biarkan infrastruktur kami yang bekerja.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Cloud size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cloud Auto-Scaling</h3>
              <p className="text-slate-600 leading-relaxed">
                Trafik meledak karena berita viral? Server Jala Warta akan menyesuaikan kapasitas secara otomatis tanpa downtime.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Sistem Terintegrasi</h3>
              <p className="text-slate-600 leading-relaxed">
                CMS, Analytics, Paywall, dan Ad-Manager sudah terpasang dan siap digunakan tanpa perlu instalasi plugin pihak ketiga.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Keamanan Enterprise</h3>
              <p className="text-slate-600 leading-relaxed">
                Proteksi DDoS bawaan, SSL otomatis, dan backup data harian memastikan portal berita Anda selalu aman dari serangan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Distinction Section (CMS vs SaaS) */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Mengapa Memilih SaaS daripada CMS Tradisional?
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                CMS tradisional mengharuskan Anda menyewa server sendiri, memperbarui sistem, dan merakit puluhan plugin. Jala Warta memberikan pengalaman *All-in-One* yang bebas repot.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Pembaruan Sistem Otomatis</h4>
                    <p className="text-slate-400">Tidak ada lagi "Update Failed". Sistem Jala Warta diperbarui secara terpusat tanpa mengganggu operasi media Anda.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Infrastruktur Multi-Tenant</h4>
                    <p className="text-slate-400">Arsitektur modern yang menjamin kecepatan akses super cepat di seluruh Indonesia melalui CDN premium kami.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-emerald-400 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Dukungan Teknis B2B</h4>
                    <p className="text-slate-400">Tim engineer kami memantau performa situs Anda 24/7. Anda tidak perlu mempekerjakan tim IT tambahan.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-3xl transform rotate-3 scale-105 opacity-50 blur-lg"></div>
              <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 relative z-10">
                <div className="space-y-6">
                  {/* Table Comparison Header */}
                  <div className="grid grid-cols-3 gap-4 pb-4 border-b border-slate-700 font-bold text-sm">
                    <div>Fitur</div>
                    <div className="text-center text-slate-400">CMS Biasa</div>
                    <div className="text-center text-blue-400">Jala Warta</div>
                  </div>
                  
                  {/* Rows */}
                  {[
                    ["Hosting & Server", "Urus Sendiri", "Termasuk (Cloud)"],
                    ["Maintenance", "Manual", "Otomatis"],
                    ["Keamanan", "Beli Plugin", "Bawaan Enterprise"],
                    ["Monetisasi", "Setup Rumit", "1-Klik Aktif"],
                    ["Skalabilitas", "Terbatas Server", "Auto-Scale"]
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-3 gap-4 pb-4 border-b border-slate-700/50 text-sm items-center">
                      <div className="font-medium text-slate-300">{row[0]}</div>
                      <div className="text-center text-slate-500">{row[1]}</div>
                      <div className="text-center font-bold text-emerald-400 flex justify-center items-center gap-1">
                        {row[2]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Harga Transparan Sesuai Skala Media Anda</h2>
            <p className="text-lg text-slate-600">Semua paket sudah termasuk Cloud Hosting, CDN, SSL, dan Maintenance.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-300 transition-colors shadow-sm flex flex-col">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Starter</h3>
              <p className="text-slate-500 text-sm mb-6">Untuk media lokal yang baru berkembang.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-slate-900">Rp 499k</span>
                <span className="text-slate-500 font-medium">/bulan</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 size={18} className="text-blue-500" /> 100,000 Pageviews/bln</li>
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 size={18} className="text-blue-500" /> 3 Akun Penulis</li>
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 size={18} className="text-blue-500" /> Standard CDN</li>
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 size={18} className="text-blue-500" /> Basic Analytics</li>
              </ul>
              <button 
                onClick={onLoginClick}
                className="w-full py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-bold hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                Mulai Trial
              </button>
            </div>

            {/* Pro - Highlighted */}
            <div className="bg-blue-600 rounded-3xl p-8 border border-blue-500 shadow-xl shadow-blue-500/20 flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Paling Populer
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Professional</h3>
              <p className="text-blue-100 text-sm mb-6">Untuk portal berita regional yang mapan.</p>
              <div className="mb-8 text-white">
                <span className="text-4xl font-extrabold">Rp 1.5jt</span>
                <span className="text-blue-200 font-medium">/bulan</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1 text-blue-50">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-white" /> 1,000,000 Pageviews/bln</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-white" /> 15 Akun Tim</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-white" /> Premium Global CDN</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-white" /> Advanced Insights</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-white" /> AI Assistant (Blur AI)</li>
              </ul>
              <button 
                onClick={onLoginClick}
                className="w-full py-3 rounded-xl bg-white text-blue-600 font-bold hover:bg-slate-50 transition-colors shadow-lg"
              >
                Mulai Trial
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-300 transition-colors shadow-sm flex flex-col">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Enterprise</h3>
              <p className="text-slate-500 text-sm mb-6">Skala nasional dengan kebutuhan kustom.</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-slate-900">Custom</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 size={18} className="text-blue-500" /> Unlimited Pageviews</li>
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 size={18} className="text-blue-500" /> Unlimited Tim</li>
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 size={18} className="text-blue-500" /> Dedicated Server</li>
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 size={18} className="text-blue-500" /> Custom API & Headless</li>
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 size={18} className="text-blue-500" /> SLA 99.99%</li>
              </ul>
              <button className="w-full py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-bold hover:border-slate-800 hover:text-slate-800 hover:bg-slate-50 transition-colors">
                Hubungi Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4 text-white">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-xs">
                  JW
                </div>
                <span className="font-bold text-lg">Jala Warta</span>
              </div>
              <p className="text-sm mb-4">
                SaaS platform khusus portal berita. Bangun dan kembangkan media Anda tanpa memikirkan infrastruktur IT.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Produk</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Fitur Utama</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Harga</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">API Dokumentasi</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Solusi</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Untuk Media Lokal</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Untuk Jaringan Berita</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Migrasi dari WordPress</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Kontak</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2026 Jala Warta SaaS. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <span className="text-slate-500 hover:text-white cursor-pointer transition-colors">Twitter</span>
              <span className="text-slate-500 hover:text-white cursor-pointer transition-colors">LinkedIn</span>
              <span className="text-slate-500 hover:text-white cursor-pointer transition-colors">Instagram</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}