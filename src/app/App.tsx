import {
  LayoutGrid,
  FileText,
  BarChart2,
  Files,
  Image as ImageIcon,
  Wrench,
  Users,
  Puzzle,
  Settings,
  LogOut,
  File,
  MessageSquare,
  PenTool,
  Upload,
  FilePlus,
  Rocket,
  Menu,
  X,
  CreditCard,
  Receipt,
  Search,
  Eye,
  Edit,
  Trash2,
  Plus,
  ChevronDown,
  User,
  Key,
  Bell,
  LifeBuoy,
} from "lucide-react";
import { useState, useEffect } from "react";
import { CreatePostPage } from "./components/CreatePostPage";
import { CategoriesPage } from "./components/CategoriesPage";
import { TagsPage } from "./components/TagsPage";
import { InsightsPage } from "./components/InsightsPage";
import { AllPagesPage } from "./components/AllPagesPage";
import { CreatePage } from "./components/CreatePage";
import { PostListPage } from "./components/PostListPage";
import { MediaLibraryPage } from "./components/MediaLibraryPage";
import { ToolsPage } from "./components/ToolsPage";
import { UsersPage } from "./components/UsersPage";
import { AddOnsPage } from "./components/AddOnsPage";
import { SettingsPage } from "./components/SettingsPage";
import { ProfilePage } from "./components/ProfilePage";
import { LoginPage } from "./components/LoginPage";
import { supabase } from "./lib/supabase";
import { Toaster } from "sonner";
import {
  DevPreferences,
  DevIndicatorMenu,
} from "./components/DevPreferences";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("All Posts");
  const [expandedMenus, setExpandedMenus] = useState<string[]>([
    "Posts",
  ]);
  const [filter, setFilter] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
      setIsLoadingAuth(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
  };

  const colors = {
    50: "#e8f1fb",
    100: "#b8d5f1",
    200: "#95c0ea",
    300: "#65a3e1",
    400: "#4791db",
    500: "#1976d2",
    600: "#176bbf",
    700: "#125495",
    800: "#0e4174",
    900: "#0b3258",
  };

  const navItems = [
    { icon: LayoutGrid, label: "Dashboard" },
    {
      icon: FileText,
      label: "Posts",
      subItems: [
        { id: "All Posts", label: "All Posts" },
        { id: "Create New Post", label: "Create New" },
        { id: "Categories", label: "Categories" },
        { id: "Tags", label: "Tags" },
      ],
    },
    {
      icon: BarChart2,
      label: "Insights",
      subItems: [
        { id: "Saved Insights", label: "Saved Insights" },
        { id: "News Search", label: "News Search" },
        { id: "Social Trends", label: "Social Trends" },
      ],
    },
    {
      icon: Files,
      label: "Pages",
      subItems: [
        { id: "All Pages", label: "All Pages" },
        { id: "Create New Page", label: "Create New" },
      ],
    },
    { icon: ImageIcon, label: "Media Library" },
    { icon: Wrench, label: "Tools" },
    { icon: Users, label: "Users" },
    { icon: Puzzle, label: "Add-Ons" },
  ];

  const dummyPosts = [
    {
      id: 1,
      title: "Panduan Lengkap Menggunakan Jalawarta CMS",
      author: "Admin",
      category: "Tutorial",
      status: "Published",
      date: "15/4/2026",
      views: "1,234",
    },
    {
      id: 2,
      title: "Tips Menulis Artikel SEO-Friendly",
      author: "Admin",
      category: "SEO",
      status: "Draft",
      date: "14/4/2026",
      views: "856",
    },
    {
      id: 3,
      title: "Cara Mengoptimalkan Kecepatan Website",
      author: "Editor",
      category: "Performance",
      status: "Published",
      date: "13/4/2026",
      views: "2,341",
    },
    {
      id: 4,
      title: "Strategi Content Marketing 2026",
      author: "Editor",
      category: "Marketing",
      status: "Published",
      date: "12/4/2026",
      views: "1,876",
    },
    {
      id: 5,
      title: "Mengenal Fitur-Fitur Jalawarta Pro",
      author: "Admin",
      category: "Tutorial",
      status: "Draft",
      date: "11/4/2026",
      views: "543",
    },
  ];

  const filteredPosts = dummyPosts
    .filter((post) =>
      filter === "Semua" ? true : post.status === filter,
    )
    .filter((post) =>
      post.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase()),
    );

  const toggleMenu = (label: string) => {
    setExpandedMenus((prev) =>
      prev.includes(label)
        ? prev.filter((m) => m !== label)
        : [...prev, label],
    );
  };

  if (isLoadingAuth) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#f8fafc]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex h-screen w-full flex-col font-['Inter',sans-serif] overflow-hidden">
        <Toaster position="top-center" richColors />
        <LoginPage onLogin={() => setIsAuthenticated(true)} />
      </div>
    );
  }

  return (
    <>
      <Toaster position="top-center" richColors />
      <div className="flex h-screen bg-[#f8fafc] font-['Inter',sans-serif] overflow-hidden">
        {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-[260px] text-white flex flex-col transition-transform duration-300 ease-in-out ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        } shadow-xl lg:shadow-none`}
        style={{ backgroundColor: colors[900] }}
      >
        <div className="flex items-center gap-3 p-6 border-b border-white/10">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${colors[500]} 0%, ${colors[700]} 100%)`,
            }}
          >
            JW
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight tracking-wide">
              Jala Warta
            </h1>
            <p className="text-xs text-white/60">
              Premium CMS Platform
            </p>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden ml-auto text-white/70 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1.5 scrollbar-hide">
          {navItems.map((item, idx) => {
            const isExpanded = expandedMenus.includes(
              item.label,
            );
            const isItemActive =
              activePage === item.label ||
              (item.subItems &&
                item.subItems.some(
                  (s: any) => s.id === activePage,
                ));

            return (
              <div key={idx} className="flex flex-col">
                <button
                  onClick={() => {
                    if (item.subItems) toggleMenu(item.label);
                    else setActivePage(item.label);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isItemActive && !item.subItems
                      ? "text-white shadow-md shadow-black/10"
                      : isItemActive && item.subItems
                        ? "text-white"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                  style={
                    isItemActive && !item.subItems
                      ? { backgroundColor: colors[500] }
                      : isItemActive && item.subItems
                        ? { backgroundColor: colors[500] }
                        : {}
                  }
                >
                  <div className="flex items-center gap-3">
                    <item.icon
                      size={20}
                      className={
                        isItemActive
                          ? "opacity-100"
                          : "opacity-70"
                      }
                    />
                    {item.label}
                  </div>
                  {item.subItems && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                    />
                  )}
                </button>

                {item.subItems && isExpanded && (
                  <div className="flex flex-col mt-1 ml-4 pl-4 border-l border-white/10 space-y-1">
                    {item.subItems.map((subItem: any) => (
                      <button
                        key={subItem.id}
                        onClick={() =>
                          setActivePage(subItem.id)
                        }
                        className={`w-full text-left px-4 py-2 text-sm rounded-lg transition-all ${
                          activePage === subItem.id
                            ? "bg-white/10 text-white font-semibold"
                            : "text-white/60 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className="pt-6 mt-6 border-t border-white/10 space-y-1.5">
            <p className="px-4 text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">
              System
            </p>
            <button
              onClick={() => setActivePage("Settings")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activePage === "Settings"
                  ? "text-white shadow-md shadow-black/10"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
              style={
                activePage === "Settings"
                  ? { backgroundColor: colors[500] }
                  : {}
              }
            >
              <Settings
                size={20}
                className={
                  activePage === "Settings"
                    ? "opacity-100"
                    : "opacity-70"
                }
              />
              Settings
            </button>
            <button
              onClick={() =>
                setActivePage("Tagihan & Pembayaran")
              }
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activePage === "Tagihan & Pembayaran"
                  ? "text-white shadow-md shadow-black/10"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
              style={
                activePage === "Tagihan & Pembayaran"
                  ? { backgroundColor: colors[500] }
                  : {}
              }
            >
              <CreditCard
                size={20}
                className={
                  activePage === "Tagihan & Pembayaran"
                    ? "opacity-100"
                    : "opacity-70"
                }
              />
              Tagihan & Pembayaran
            </button>
          </div>
        </div>

        <div className="relative p-4 border-t border-white/10">
          {showProfileMenu && (
            <DevIndicatorMenu
              onClose={() => setShowProfileMenu(false)}
              onOpenPreferences={() => setShowPreferences(true)}
              onLogout={handleLogout}
              onOpenProfile={() => setActivePage("Profile")}
            />
          )}

          {showPreferences && (
            <DevPreferences
              onClose={() => setShowPreferences(false)}
            />
          )}

          <div
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className={`flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition-colors ${
              showProfileMenu
                ? "bg-white/10"
                : "bg-white/5 hover:bg-white/10"
            }`}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
              style={{
                background: `linear-gradient(135deg, ${colors[500]} 0%, ${colors[700]} 100%)`,
              }}
            >
              AJ
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium truncate">
                Admin Jala Warta
              </p>
              <p className="text-[12px] text-white/60 truncate">
                admin@jalawarta.local
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-30 px-6 lg:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              <Menu size={24} />
            </button>
            <p className="text-sm text-slate-500 hidden sm:block">
              Selamat datang kembali,{" "}
              <span
                className="font-semibold"
                style={{ color: colors[600] }}
              >
                Admin Jala Warta
              </span>{" "}
              👋
            </p>
          </div>
          <div className="flex items-center gap-2 bg-slate-100/80 px-4 py-2 rounded-full border border-slate-200">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse" />
            <span className="text-xs text-slate-600 font-medium">
              Kamis, 16 April 2026
            </span>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-6 lg:p-10">
          {activePage === "All Posts" ? (
            <PostListPage setActivePage={setActivePage} colors={colors} />
          ) : activePage === "Tagihan & Pembayaran" ? (
            <div className="max-w-[1000px] mx-auto space-y-8 animate-in fade-in duration-300">
              {/* Title */}
              <div>
                <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-2">
                  Tagihan & Pembayaran
                </h2>
                <p className="text-slate-500 text-lg">
                  Riwayat tagihan subscription dan informasi
                  cara pembayaran ke platform.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 min-h-[400px] flex flex-col">
                <div className="flex items-center justify-between border-b border-slate-100 pb-6 mb-8">
                  <h3 className="text-sm font-bold text-slate-400 tracking-wider uppercase">
                    Riwayat Tagihan
                  </h3>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center text-center opacity-70">
                  <div className="w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center mb-6">
                    <Receipt
                      size={48}
                      className="text-slate-300"
                    />
                  </div>
                  <p className="text-slate-500 font-medium text-lg">
                    Belum ada tagihan.
                  </p>
                </div>
              </div>
            </div>
          ) : activePage === "Dashboard" ? (
            <div className="max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-300">
              {/* Title */}
              <div>
                <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-2">
                  Dashboard Utama
                </h2>
                <p className="text-slate-500 text-lg">
                  Ringkasan aktivitas dan statistik platform
                  Anda
                </p>
              </div>

              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    label: "Artikel Berita",
                    value: "0",
                    icon: FileText,
                    bg: `linear-gradient(135deg, ${colors[400]} 0%, ${colors[600]} 100%)`,
                  },
                  {
                    label: "Halaman Statis",
                    value: "0",
                    icon: File,
                    bg: `linear-gradient(135deg, ${colors[300]} 0%, ${colors[500]} 100%)`,
                  },
                  {
                    label: "Komentar Baru",
                    value: "0",
                    icon: MessageSquare,
                    bg: `linear-gradient(135deg, ${colors[500]} 0%, ${colors[800]} 100%)`,
                  },
                  {
                    label: "File Media",
                    value: "0",
                    icon: ImageIcon,
                    bg: `linear-gradient(135deg, ${colors[400]} 0%, ${colors[700]} 100%)`,
                  },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 flex items-center justify-between group hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer"
                  >
                    <div>
                      <p className="text-sm font-medium text-slate-500 mb-1">
                        {stat.label}
                      </p>
                      <p className="text-4xl font-bold text-slate-800">
                        {stat.value}
                      </p>
                    </div>
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-black/10 group-hover:scale-110 transition-transform"
                      style={{ background: stat.bg }}
                    >
                      <stat.icon size={24} strokeWidth={2.5} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Quick Actions */}
                <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60">
                  <div className="flex items-center gap-3 mb-8">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md shadow-black/10"
                      style={{
                        background: `linear-gradient(135deg, ${colors[500]} 0%, ${colors[600]} 100%)`,
                      }}
                    >
                      <Rocket size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">
                      Quick Actions
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <button
                      onClick={() =>
                        setActivePage("Create New Post")
                      }
                      className="rounded-2xl p-8 flex flex-col items-center justify-center gap-4 transition-all group hover:-translate-y-1 border border-slate-100"
                      style={{ backgroundColor: colors[50] }}
                    >
                      <div className="bg-white/80 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <PenTool
                          size={28}
                          style={{ color: colors[600] }}
                        />
                      </div>
                      <span
                        className="font-semibold text-lg"
                        style={{ color: colors[900] }}
                      >
                        Tulis Berita
                      </span>
                    </button>

                    <button
                      onClick={() =>
                        setActivePage("Media Library")
                      }
                      className="rounded-2xl p-8 flex flex-col items-center justify-center gap-4 transition-all group hover:-translate-y-1 border border-slate-100"
                      style={{ backgroundColor: colors[50] }}
                    >
                      <div className="bg-white/80 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <Upload
                          size={28}
                          style={{ color: colors[600] }}
                        />
                      </div>
                      <span
                        className="font-semibold text-lg"
                        style={{ color: colors[900] }}
                      >
                        Upload Media
                      </span>
                    </button>

                    <button
                      onClick={() => setActivePage("Pages")}
                      className="rounded-2xl p-8 flex flex-col items-center justify-center gap-4 transition-all group hover:-translate-y-1 border border-slate-100"
                      style={{ backgroundColor: colors[50] }}
                    >
                      <div className="bg-white/80 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <FilePlus
                          size={28}
                          style={{ color: colors[600] }}
                        />
                      </div>
                      <span
                        className="font-semibold text-lg"
                        style={{ color: colors[900] }}
                      >
                        Buat Halaman
                      </span>
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-1 bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 min-h-[400px] flex flex-col">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    Aktivitas Terbaru
                  </h3>
                  <p className="text-sm text-slate-500 mb-auto">
                    Log sistem dan aksi pengguna
                  </p>

                  <div className="flex-1 flex flex-col items-center justify-center text-center opacity-70">
                    <div className="w-20 h-20 rounded-3xl bg-slate-100 flex items-center justify-center mb-6">
                      <FileText
                        size={32}
                        className="text-slate-400"
                      />
                    </div>
                    <p className="text-slate-500 font-medium mb-8">
                      Belum ada aktivitas tercatat
                    </p>

                    <button className="px-6 py-3 rounded-full border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-medium transition-colors text-sm">
                      Lihat Log Lengkap →
                    </button>
                  </div>
                </div>

                {/* Promo Card */}
                <div
                  className="lg:col-span-2 rounded-2xl p-10 shadow-sm border border-white relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[400px]"
                  style={{
                    background: `linear-gradient(145deg, white 0%, ${colors[50]} 100%)`,
                  }}
                >
                  <div
                    className="w-24 h-24 rounded-3xl flex items-center justify-center text-white mb-8 shadow-xl shadow-black/10 z-10"
                    style={{
                      background: `linear-gradient(135deg, ${colors[400]} 0%, ${colors[600]} 100%)`,
                    }}
                  >
                    <LayoutGrid size={40} strokeWidth={2.5} />
                  </div>

                  <h3
                    className="text-3xl font-extrabold mb-4 z-10 text-transparent bg-clip-text"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${colors[600]} 0%, ${colors[800]} 100%)`,
                    }}
                  >
                    Jalawarta Pro v1.2
                  </h3>

                  <p className="text-slate-600 text-lg max-w-xl mx-auto mb-10 z-10 leading-relaxed">
                    Platform CMS Multi-Tenant Anda sudah
                    optimal. Gunakan Blur AI Assistant di
                    halaman editor untuk bantuan penulisan
                    berita profesional.
                  </p>

                  <button
                    className="px-8 py-4 rounded-full text-white font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all z-10 flex items-center gap-2"
                    style={{
                      background: `linear-gradient(90deg, ${colors[500]} 0%, ${colors[700]} 100%)`,
                    }}
                  >
                    Konfigurasi Domain Utama
                    <span aria-hidden="true">→</span>
                  </button>

                  {/* Decorative background shapes */}
                  <div
                    className="absolute -top-20 -right-20 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                    style={{ background: colors[300] }}
                  />
                  <div
                    className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                    style={{ background: colors[200] }}
                  />
                </div>
              </div>
            </div>
          ) : activePage === "Create New" ? (
            <CreatePostPage />
          ) : activePage === "Categories" ? (
            <CategoriesPage />
          ) : activePage === "Tags" ? (
            <TagsPage />
          ) : activePage === "All Pages" ? (
            <AllPagesPage setActivePage={setActivePage} />
          ) : activePage === "Create New Page" ? (
            <CreatePage setActivePage={setActivePage} />
          ) : activePage === "Create New Post" ||
            activePage === "Create New" ? (
            <CreatePostPage setActivePage={setActivePage} />
          ) : activePage === "Media Library" ? (
            <MediaLibraryPage />
          ) : activePage === "Tools" ? (
            <ToolsPage />
          ) : activePage === "Users" ? (
            <UsersPage />
          ) : activePage === "Add-Ons" ? (
            <AddOnsPage />
          ) : activePage === "Settings" ? (
            <SettingsPage />
          ) : activePage === "Profile" ? (
            <ProfilePage />
          ) : [
              "Insights",
              "Saved Insights",
              "News Search",
              "Social Trends",
              "News Insight",
              "Social Insight",
            ].includes(activePage) ? (
            <InsightsPage
              activeTab={
                activePage === "Insights"
                  ? "Saved Insights"
                  : activePage
              }
              setActivePage={setActivePage}
            />
          ) : (
            <div className="max-w-[1000px] mx-auto space-y-8 flex flex-col items-center justify-center min-h-[60vh] text-center animate-in fade-in duration-300">
              <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center mb-6 shadow-inner">
                <Wrench size={40} className="text-slate-400" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 tracking-tight">
                {activePage}
              </h2>
              <p className="text-slate-500 text-lg max-w-md">
                Halaman ini sedang dalam tahap pengembangan dan
                akan segera tersedia.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
    </>
  );
}