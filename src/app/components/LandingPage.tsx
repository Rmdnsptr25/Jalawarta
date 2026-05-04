import { useState, useEffect } from "react";
import { 
  ArrowRight, Cloud, Zap, Shield, Globe, 
  Menu, X, CheckCircle2, ChevronRight, 
  Play, Sparkles, Activity, Layers, Lock,
  Sun, Moon
} from "lucide-react";
import { motion } from "motion/react";

interface LandingPageProps {
  onLoginClick: () => void;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export function LandingPage({ onLoginClick }: LandingPageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Default to light mode (false), you can toggle
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="min-h-screen font-['Inter',sans-serif] bg-[#f2fbff] dark:bg-[#030303] text-slate-600 dark:text-slate-200 overflow-x-hidden selection:bg-[#2f80ed]/30 transition-colors duration-300">
        
        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled ? "bg-white/80 dark:bg-[#030303]/80 backdrop-blur-xl border-slate-200 dark:border-white/10 py-4" : "bg-transparent border-transparent py-6"
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#81d4fa] to-[#2f80ed] flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(47,128,237,0.4)]">
                  JW
                </div>
                <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">JalaWarta</span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8 items-center bg-white/50 dark:bg-white/5 px-6 py-2 rounded-full border border-slate-200 dark:border-white/10 backdrop-blur-md">
                <a href="#features" className="text-sm text-slate-600 hover:text-[#2f80ed] dark:text-slate-300 dark:hover:text-white font-medium transition-colors">Fitur</a>
                <a href="#bento" className="text-sm text-slate-600 hover:text-[#2f80ed] dark:text-slate-300 dark:hover:text-white font-medium transition-colors">Solusi</a>
                <a href="#pricing" className="text-sm text-slate-600 hover:text-[#2f80ed] dark:text-slate-300 dark:hover:text-white font-medium transition-colors">Harga</a>
              </div>

              <div className="hidden md:flex items-center gap-4">
                <button 
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                  title="Toggle Theme"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button 
                  onClick={onLoginClick}
                  className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-semibold transition-colors"
                >
                  Masuk
                </button>
                <button 
                  onClick={onLoginClick}
                  className="text-sm bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-200 dark:text-slate-900 px-5 py-2.5 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2"
                >
                  Coba Gratis <ChevronRight size={16} />
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center gap-4">
                <button 
                  onClick={() => setIsDark(!isDark)}
                  className="text-slate-500 dark:text-slate-400"
                >
                  {isDark ? <Sun size={24} /> : <Moon size={24} />}
                </button>
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-slate-700 dark:text-slate-300"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0a0a0a] border-b border-slate-200 dark:border-white/10 px-4 py-6 space-y-4 shadow-2xl"
            >
              <a href="#features" className="block text-base font-medium text-slate-600 dark:text-slate-300">Fitur</a>
              <a href="#bento" className="block text-base font-medium text-slate-600 dark:text-slate-300">Solusi</a>
              <a href="#pricing" className="block text-base font-medium text-slate-600 dark:text-slate-300">Harga</a>
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-3">
                <button onClick={onLoginClick} className="w-full text-center py-3 text-slate-700 dark:text-slate-300 font-bold border border-slate-200 dark:border-white/10 rounded-xl">
                  Masuk
                </button>
                <button onClick={onLoginClick} className="w-full bg-[#2f80ed] text-white py-3 rounded-xl font-bold">
                  Coba Gratis Sekarang
                </button>
              </div>
            </motion.div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh] flex flex-col items-center">
          {/* Abstract Glowing Orbs Background */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#2f80ed]/10 dark:bg-[#2f80ed]/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#81d4fa]/20 dark:bg-[#81d4fa]/20 rounded-full blur-[100px] pointer-events-none translate-x-1/2" />
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-[#2360b2]/10 dark:bg-[#2360b2]/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-20 pointer-events-none mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

          <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium text-sm mb-8 backdrop-blur-md shadow-sm"
            >
              <Sparkles size={16} className="text-[#2f80ed] dark:text-[#81d4fa]" />
              <span>SaaS Media Generasi Berikutnya v2.0</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-slate-900 dark:text-white mb-8 leading-[1.1]"
            >
              Bangun Media, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2f80ed] via-[#2360b2] to-[#102d53] dark:from-[#81d4fa] dark:via-[#2f80ed] dark:to-[#102d53]">
                Bukan Infrastruktur.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Tinggalkan CMS tradisional. JalaWarta adalah platform SaaS <strong className="text-slate-900 dark:text-white font-medium">all-in-one</strong> dengan auto-scaling, analitik pintar, dan performa super cepat.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
            >
              <button 
                onClick={onLoginClick}
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 flex items-center justify-center gap-2"
              >
                Mulai Gratis <ArrowRight size={20} />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-900 dark:text-white rounded-full font-bold text-lg transition-all backdrop-blur-md flex items-center justify-center gap-2 shadow-sm">
                <Play size={20} className="fill-slate-900 dark:fill-white" /> Lihat Demo
              </button>
            </motion.div>
          </div>

          {/* Floating Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.2 }}
            className="w-full max-w-6xl mx-auto mt-24 relative z-10 perspective-[2000px]"
          >
            <div className="relative rounded-[2rem] bg-white/50 dark:bg-gradient-to-b dark:from-white/10 dark:to-white/5 p-1 border border-slate-200 dark:border-white/10 shadow-2xl backdrop-blur-xl transform rotateX-[10deg] hover:rotateX-[0deg] transition-transform duration-700 ease-out">
              <div className="rounded-[1.8rem] overflow-hidden bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/5 flex flex-col aspect-[16/9] relative shadow-inner">
                {/* Fake Mac Header */}
                <div className="h-10 bg-slate-50 dark:bg-[#111] flex items-center px-4 gap-2 border-b border-slate-200 dark:border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <div className="mx-auto bg-white dark:bg-white/5 px-3 py-1 rounded-md flex items-center gap-2 border border-slate-200 dark:border-transparent shadow-sm dark:shadow-none">
                    <Lock size={10} className="text-slate-400" />
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">jalawarta.com/dashboard</span>
                  </div>
                </div>
                
                {/* App Mockup UI */}
                <div className="flex flex-1 p-4 gap-4 bg-slate-50/50 dark:bg-transparent">
                  {/* Sidebar */}
                  <div className="w-48 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 p-3 flex flex-col gap-3 hidden sm:flex shadow-sm dark:shadow-none">
                    <div className="h-8 bg-[#eaf2fd] dark:bg-[#2f80ed]/20 border border-[#2f80ed]/30 rounded-lg w-full"></div>
                    <div className="h-8 bg-slate-100 dark:bg-white/5 rounded-lg w-5/6"></div>
                    <div className="h-8 bg-slate-100 dark:bg-white/5 rounded-lg w-4/6"></div>
                    <div className="h-8 bg-slate-100 dark:bg-white/5 rounded-lg w-full"></div>
                    <div className="mt-auto h-10 bg-slate-100 dark:bg-white/5 rounded-lg w-full flex items-center px-2 gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#81d4fa] to-[#2f80ed]"></div>
                      <div className="h-3 bg-slate-300 dark:bg-white/20 rounded w-16"></div>
                    </div>
                  </div>
                  
                  {/* Main Content */}
                  <div className="flex-1 flex flex-col gap-4">
                    {/* Stats */}
                    <div className="flex gap-4">
                      <div className="flex-1 h-24 bg-gradient-to-br from-[#eaf2fd] dark:from-[#2f80ed]/10 to-transparent border border-[#2f80ed]/20 rounded-xl p-4 flex flex-col justify-between bg-white dark:bg-transparent shadow-sm dark:shadow-none">
                        <div className="h-3 w-20 bg-[#2f80ed]/40 dark:bg-[#2f80ed]/50 rounded"></div>
                        <div className="h-8 w-24 bg-[#2f80ed]/80 rounded mt-auto"></div>
                      </div>
                      <div className="flex-1 h-24 bg-gradient-to-br from-[#f2fbff] dark:from-[#81d4fa]/10 to-transparent border border-[#81d4fa]/20 rounded-xl p-4 flex flex-col justify-between hidden sm:flex bg-white dark:bg-transparent shadow-sm dark:shadow-none">
                        <div className="h-3 w-20 bg-[#81d4fa]/60 dark:bg-[#81d4fa]/50 rounded"></div>
                        <div className="h-8 w-24 bg-[#81d4fa]/80 rounded mt-auto"></div>
                      </div>
                      <div className="flex-1 h-24 bg-gradient-to-br from-[#f0f9ff] dark:from-[#2360b2]/10 to-transparent border border-[#2360b2]/20 rounded-xl p-4 flex flex-col justify-between bg-white dark:bg-transparent shadow-sm dark:shadow-none">
                        <div className="h-3 w-20 bg-[#2360b2]/40 dark:bg-[#2360b2]/50 rounded"></div>
                        <div className="h-8 w-24 bg-[#2360b2]/80 rounded mt-auto"></div>
                      </div>
                    </div>
                    
                    {/* Chart Area */}
                    <div className="flex-1 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-xl p-4 relative overflow-hidden flex flex-col shadow-sm dark:shadow-none">
                      <div className="h-4 w-32 bg-slate-200 dark:bg-white/20 rounded mb-6"></div>
                      <div className="flex-1 flex items-end gap-2 px-2 pb-2">
                        {/* Fake Bar Chart */}
                        {[40, 70, 45, 90, 65, 85, 120, 95, 110, 80, 130, 100].map((h, i) => (
                          <div key={i} className="flex-1 bg-gradient-to-t from-[#2f80ed] to-[#81d4fa] rounded-t-sm" style={{ height: `${h}%`, opacity: 0.7 + (i * 0.02) }}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Logos Section */}
        <section className="py-10 border-y border-slate-200 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-widest">Dipercaya oleh portal media terdepan</p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 dark:opacity-50 grayscale hover:grayscale-0 transition-all duration-500 text-slate-800 dark:text-slate-200">
              {/* Abstract dummy logos */}
              <div className="text-xl font-bold font-serif flex items-center gap-2"><div className="w-6 h-6 bg-current rounded-sm rotate-45"></div> NUSA NEWS</div>
              <div className="text-xl font-extrabold tracking-tighter flex items-center gap-2"><Activity /> PULSA Media</div>
              <div className="text-xl font-bold uppercase tracking-widest">Kabar<span className="font-light">Kini</span></div>
              <div className="text-xl font-bold flex items-center gap-2"><Globe /> Regional<span className="text-[#2f80ed]">.ID</span></div>
            </div>
          </div>
        </section>

        {/* Bento Grid Features */}
        <section id="bento" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Semua Alat dalam Satu Ekosistem</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-light">Tidak perlu merakit puzzle plugin. JalaWarta menghadirkan pengalaman terpadu dari penulisan hingga monetisasi.</p>
            </motion.div>

            {/* Bento Box Grid */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]"
            >
              {/* Big Feature 1 */}
              <motion.div variants={fadeInUp} className="md:col-span-2 bg-white dark:bg-gradient-to-br dark:from-[#111] dark:to-[#0a0a0a] rounded-3xl p-8 border border-slate-200 dark:border-white/10 hover:border-[#2f80ed]/50 transition-colors group relative overflow-hidden shadow-sm dark:shadow-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#eaf2fd] dark:bg-[#2f80ed]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#bfd8f9] dark:group-hover:bg-[#2f80ed]/20 transition-all"></div>
                <Activity className="text-[#2f80ed] w-10 h-10 mb-6 relative z-10" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">Real-time Analytics</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md relative z-10">
                  Pantau trafik, performa penulis, dan artikel trending detik ini juga. Insight mendalam tanpa perlu integrasi pihak ketiga yang memberatkan *loading* web.
                </p>
              </motion.div>

              {/* Small Feature 1 */}
              <motion.div variants={fadeInUp} className="bg-white dark:bg-gradient-to-br dark:from-[#111] dark:to-[#0a0a0a] rounded-3xl p-8 border border-slate-200 dark:border-white/10 hover:border-[#81d4fa]/50 transition-colors group relative overflow-hidden shadow-sm dark:shadow-none">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f2fbff] dark:bg-[#81d4fa]/10 rounded-full blur-2xl group-hover:bg-[#d8f2fd] dark:group-hover:bg-[#81d4fa]/20 transition-all"></div>
                <Cloud className="text-[#81d4fa] w-10 h-10 mb-6 relative z-10" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">Auto-Scaling Cloud</h3>
                <p className="text-slate-600 dark:text-slate-400 relative z-10">
                  Server otomatis membesar ketika ada berita viral. Nol downtime.
                </p>
              </motion.div>

              {/* Small Feature 2 */}
              <motion.div variants={fadeInUp} className="bg-white dark:bg-gradient-to-br dark:from-[#111] dark:to-[#0a0a0a] rounded-3xl p-8 border border-slate-200 dark:border-white/10 hover:border-[#619fbc]/50 transition-colors group relative overflow-hidden shadow-sm dark:shadow-none">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f2fbff] dark:bg-[#619fbc]/10 rounded-full blur-2xl group-hover:bg-[#d8f2fd] dark:group-hover:bg-[#619fbc]/20 transition-all"></div>
                <Shield className="text-[#619fbc] w-10 h-10 mb-6 relative z-10" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">Keamanan Enterprise</h3>
                <p className="text-slate-600 dark:text-slate-400 relative z-10">
                  Anti DDoS, WAF, dan SSL otomatis melindungi kredibilitas media Anda.
                </p>
              </motion.div>

              {/* Big Feature 2 */}
              <motion.div variants={fadeInUp} className="md:col-span-2 bg-white dark:bg-gradient-to-br dark:from-[#111] dark:to-[#0a0a0a] rounded-3xl p-8 border border-slate-200 dark:border-white/10 hover:border-[#2360b2]/50 transition-colors group relative overflow-hidden shadow-sm dark:shadow-none">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#eaf2fd] dark:bg-[#2360b2]/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 group-hover:bg-[#bfd8f9] dark:group-hover:bg-[#2360b2]/20 transition-all"></div>
                <Layers className="text-[#2360b2] w-10 h-10 mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">Headless Architecture API</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md relative z-10">
                  Distribusikan konten Anda ke Website, Aplikasi Mobile (iOS/Android), hingga Smart TV dengan API kami yang fleksibel dan berkecepatan tinggi.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Interactive SaaS vs CMS Comparison */}
        <section className="py-24 bg-white dark:bg-[#0a0a0a] border-y border-slate-200 dark:border-white/5 relative overflow-hidden">
          <div className="absolute left-0 top-1/2 w-[500px] h-[500px] bg-[#eaf2fd] dark:bg-[#2f80ed]/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="max-w-5xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">SaaS vs CMS Tradisional</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">Mengapa media besar beralih ke model Software-as-a-Service.</p>
            </div>

            <div className="bg-white dark:bg-[#111] border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-xl dark:shadow-2xl">
              <div className="grid grid-cols-3 gap-0 p-6 bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 font-bold text-sm text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                <div>Aspek Operasional</div>
                <div className="text-center text-slate-400 dark:text-slate-500">CMS Open-Source</div>
                <div className="text-center text-[#2f80ed] flex items-center justify-center gap-2">JalaWarta SaaS <Sparkles size={14}/></div>
              </div>
              
              <div className="divide-y divide-slate-100 dark:divide-white/5">
                {[
                  { title: "Manajemen Server", bad: "Sewa & Setup Sendiri", good: "Fully Managed Cloud" },
                  { title: "Penanganan Trafik Spike", bad: "Situs Down / 503 Error", good: "Auto-Scaling Instan" },
                  { title: "Update & Maintenance", bad: "Manual Update (Risiko Rusak)", good: "Otomatis & Transparan" },
                  { title: "Biaya Tersembunyi", bad: "Beli Plugin Premium & Security", good: "Harga Tetap, Fitur Lengkap" },
                  { title: "Performa & Kecepatan", bad: "Tergantung Optimasi Pribadi", good: "Premium Global CDN" },
                ].map((row, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="grid grid-cols-3 gap-4 p-6 text-sm sm:text-base items-center hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                  >
                    <div className="font-medium text-slate-800 dark:text-slate-200">{row.title}</div>
                    <div className="text-center text-slate-500">{row.bad}</div>
                    <div className="text-center font-bold text-slate-900 dark:text-white flex justify-center items-center gap-2">
                      <CheckCircle2 size={18} className="text-[#2f80ed] hidden sm:block" /> {row.good}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Investasi Cerdas untuk Media</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">Harga simpel, transparan, dan dapat diprediksi. Bebas biaya tersembunyi.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
              {/* Starter */}
              <div className="bg-white dark:bg-[#111] rounded-3xl p-8 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all flex flex-col h-full shadow-sm dark:shadow-none">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Starter</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Bagi media lokal yang mulai berkembang.</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">Rp 499k</span>
                  <span className="text-slate-500">/bln</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300"><CheckCircle2 size={18} className="text-[#2f80ed]/70" /> 100,000 Pageviews</li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300"><CheckCircle2 size={18} className="text-[#2f80ed]/70" /> 3 Akun Tim</li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300"><CheckCircle2 size={18} className="text-[#2f80ed]/70" /> Standar SSL & CDN</li>
                </ul>
                <button onClick={onLoginClick} className="w-full py-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                  Mulai Trial
                </button>
              </div>

              {/* Pro - Highlighted */}
              <div className="relative transform md:-translate-y-4">
                <div className="absolute inset-0 bg-gradient-to-b from-[#81d4fa] to-[#2f80ed] rounded-3xl blur shadow-[0_0_40px_rgba(47,128,237,0.3)]"></div>
                <div className="bg-white dark:bg-[#0a0a0a] rounded-3xl p-8 border border-[#2f80ed]/30 dark:border-[#2f80ed]/50 flex flex-col relative h-full z-10 shadow-2xl">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2f80ed] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#2f80ed]/50">
                    Rekomendasi
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Professional</h3>
                  <p className="text-[#2360b2] dark:text-[#eaf2fd]/70 text-sm mb-6">Skala menengah dengan trafik stabil.</p>
                  <div className="mb-8">
                    <span className="text-5xl font-bold text-slate-900 dark:text-white">Rp 1.5jt</span>
                    <span className="text-slate-500 dark:text-[#eaf2fd]/50">/bln</span>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-center gap-3 text-slate-800 dark:text-white"><CheckCircle2 size={18} className="text-[#2f80ed] dark:text-[#81d4fa]" /> 1,000,000 Pageviews</li>
                    <li className="flex items-center gap-3 text-slate-800 dark:text-white"><CheckCircle2 size={18} className="text-[#2f80ed] dark:text-[#81d4fa]" /> 15 Akun Tim</li>
                    <li className="flex items-center gap-3 text-slate-800 dark:text-white"><CheckCircle2 size={18} className="text-[#2f80ed] dark:text-[#81d4fa]" /> Premium Global CDN</li>
                    <li className="flex items-center gap-3 text-slate-800 dark:text-white"><CheckCircle2 size={18} className="text-[#2f80ed] dark:text-[#81d4fa]" /> AI Content Assistant</li>
                  </ul>
                  <button onClick={onLoginClick} className="w-full py-4 rounded-xl bg-[#2f80ed] hover:bg-[#2a73d5] text-white font-bold transition-all shadow-lg shadow-[#2f80ed]/25">
                    Coba Gratis 14 Hari
                  </button>
                </div>
              </div>

              {/* Enterprise */}
              <div className="bg-white dark:bg-[#111] rounded-3xl p-8 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all flex flex-col h-full shadow-sm dark:shadow-none">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Enterprise</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Infrastruktur kustom skala nasional.</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">Custom</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300"><CheckCircle2 size={18} className="text-[#2f80ed]/70" /> Unlimited Pageviews</li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300"><CheckCircle2 size={18} className="text-[#2f80ed]/70" /> Dedicated Server</li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300"><CheckCircle2 size={18} className="text-[#2f80ed]/70" /> SLA 99.99% & 24/7 Support</li>
                </ul>
                <button className="w-full py-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                  Hubungi Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA & Footer */}
        <footer className="relative border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-[#2f80ed] to-transparent opacity-50"></div>
          
          {/* Massive CTA */}
          <div className="py-24 text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">Siap mendisrupsi media digital?</h2>
            <button onClick={onLoginClick} className="px-10 py-5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              Mulai Gunakan JalaWarta
            </button>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200 dark:border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#2f80ed] flex items-center justify-center font-bold text-xs text-white">
                  JW
                </div>
                <span className="font-bold text-lg text-slate-900 dark:text-white">JalaWarta</span>
              </div>
              
              <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-400">
                <a href="#" className="hover:text-[#2f80ed] dark:hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-[#2f80ed] dark:hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-[#2f80ed] dark:hover:text-white transition-colors">API Status</a>
                <a href="#" className="hover:text-[#2f80ed] dark:hover:text-white transition-colors">Twitter</a>
              </div>
              
              <p className="text-sm text-slate-400 dark:text-slate-500">
                &copy; 2026 JalaWarta SaaS. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}