import { useState } from "react";
import { toast } from "sonner";

export function CategoriesPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleAddCategory = () => {
    if (!name.trim()) {
      toast.error("Tidak Dapat Menyimpan", {
        description: "Silakan isi nama kategori terlebih dahulu."
      });
      return;
    }
    
    toast.success("Kategori Berhasil Ditambahkan", {
      description: `Kategori "${name}" telah disimpan ke database.`
    });
    setName("");
    setDescription("");
  };

  const categories = [
    {
      name: "Tutorial",
      slug: "tutorial",
      description: "Panduan dan tutorial",
    },
    {
      name: "SEO",
      slug: "seo",
      description: "Optimasi mesin pencari",
    },
    {
      name: "Performance",
      slug: "performance",
      description: "Performa website",
    },
    {
      name: "Marketing",
      slug: "marketing",
      description: "Strategi marketing",
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Title */}
      <div>
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-1">
          Kategori
        </h2>
        <p className="text-slate-500 text-base">4 kategori tersimpan</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Add Category Form (Left) */}
        <div className="w-full lg:w-[400px] xl:w-[480px] shrink-0">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/60 flex flex-col space-y-6">
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              Tambah Kategori Baru
            </h3>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 tracking-wide uppercase">
                  NAMA KATEGORI
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Misal: Teknologi"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800 placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 tracking-wide uppercase">
                  DESKRIPSI (OPSIONAL)
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Deskripsi singkat kategori..."
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-800 placeholder:text-slate-400 min-h-[140px] resize-none"
                ></textarea>
              </div>
            </div>

            <button 
              onClick={handleAddCategory}
              className="w-full mt-4 bg-[#1976d2] hover:bg-[#176bbf] text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5"
            >
              Tambah Kategori
            </button>
          </div>
        </div>

        {/* Categories List (Right) */}
        <div className="flex-1">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/60 min-h-[500px]">
            <div className="grid grid-cols-[1fr_120px] sm:grid-cols-[1fr_200px] gap-4 mb-4 px-6">
              <div className="text-xs font-bold text-slate-500 tracking-wide uppercase">
                NAMA
              </div>
              <div className="text-xs font-bold text-slate-500 tracking-wide uppercase">
                SLUG
              </div>
            </div>
            
            <div className="h-px bg-slate-100 mb-6"></div>

            <div className="space-y-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer group"
                >
                  <div className="grid grid-cols-[1fr_120px] sm:grid-cols-[1fr_200px] gap-4 items-center">
                    <div>
                      <h4 className="text-[15px] font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </h4>
                      <p className="text-[13px] text-slate-500 font-medium">
                        {category.description}
                      </p>
                    </div>
                    <div className="font-mono text-sm text-slate-500 font-medium tracking-tight">
                      {category.slug}
                    </div>
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
