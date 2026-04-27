import React, { useState } from 'react';
import { X, Monitor, ChevronDown, EyeOff, Settings, ChevronRight, LogOut } from 'lucide-react';

interface DevPreferencesProps {
  onClose: () => void;
}

export function DevPreferences({ onClose }: DevPreferencesProps) {
  const [theme, setTheme] = useState('System');
  const [position, setPosition] = useState('Bottom Left');
  const [size, setSize] = useState('Medium');
  
  // States for dropdowns
  const [openDropdown, setOpenDropdown] = useState<'theme' | 'position' | 'size' | null>(null);

  const themeOptions = ['System', 'Light', 'Dark'];
  const positionOptions = ['Bottom Left', 'Bottom Right', 'Top Left', 'Top Right'];
  const sizeOptions = ['Small', 'Medium', 'Large'];

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px] animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-[480px] bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl flex flex-col font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h2 className="text-[15px] font-semibold text-white">Preferences</h2>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[70vh] p-4 flex flex-col">
          
          {/* Theme */}
          <div className="flex items-center justify-between py-4 border-b border-white/10 relative">
            <div className="pr-4">
              <h3 className="text-[14px] font-semibold text-white mb-0.5">Theme</h3>
              <p className="text-[13px] text-white/50">Select your theme preference.</p>
            </div>
            <div className="relative">
              <button 
                onClick={() => setOpenDropdown(openDropdown === 'theme' ? null : 'theme')}
                className="flex items-center gap-2 px-3 py-1.5 bg-transparent border border-white/20 rounded-lg text-[13px] text-white hover:border-white/40 transition-colors w-32 justify-between"
              >
                <div className="flex items-center gap-2">
                  <Monitor size={14} className="text-white/70" />
                  {theme}
                </div>
                <ChevronDown size={14} className="text-white/50" />
              </button>
              
              {openDropdown === 'theme' && (
                <div className="absolute top-full right-0 mt-1 w-32 bg-[#1A1A1A] border border-blue-500 rounded-lg overflow-hidden z-10 shadow-xl py-1">
                  {themeOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => { setTheme(opt); setOpenDropdown(null); }}
                      className={`w-full text-left px-3 py-1.5 text-[13px] hover:bg-blue-600 transition-colors ${theme === opt ? 'bg-blue-600 text-white' : 'text-white'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Position */}
          <div className="flex items-center justify-between py-4 border-b border-white/10 relative">
            <div className="pr-4">
              <h3 className="text-[14px] font-semibold text-white mb-0.5">Position</h3>
              <p className="text-[13px] text-white/50">Adjust the placement of your dev tools.</p>
            </div>
            <div className="relative">
              <button 
                onClick={() => setOpenDropdown(openDropdown === 'position' ? null : 'position')}
                className="flex items-center justify-between px-3 py-1.5 bg-transparent border border-white/20 rounded-lg text-[13px] text-white hover:border-white/40 transition-colors w-36"
                style={openDropdown === 'position' ? { borderColor: '#3b82f6', outline: '1px solid #3b82f6' } : {}}
              >
                {position}
                <ChevronDown size={14} className="text-white/50" />
              </button>
              
              {openDropdown === 'position' && (
                <div className="absolute top-full right-0 mt-1 w-36 bg-[#1A1A1A] border border-white/20 rounded-lg overflow-hidden z-10 shadow-xl py-1">
                  {positionOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => { setPosition(opt); setOpenDropdown(null); }}
                      className={`w-full text-left px-3 py-1.5 text-[13px] hover:bg-blue-600 transition-colors ${position === opt ? 'bg-blue-600 text-white' : 'text-white'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Size */}
          <div className="flex items-center justify-between py-4 border-b border-white/10 relative">
            <div className="pr-4">
              <h3 className="text-[14px] font-semibold text-white mb-0.5">Size</h3>
              <p className="text-[13px] text-white/50">Adjust the size of your dev tools.</p>
            </div>
            <div className="relative">
              <button 
                onClick={() => setOpenDropdown(openDropdown === 'size' ? null : 'size')}
                className="flex items-center justify-between px-3 py-1.5 bg-transparent border border-white/20 rounded-lg text-[13px] text-white hover:border-white/40 transition-colors w-32"
                style={openDropdown === 'size' ? { borderColor: '#3b82f6', outline: '1px solid #3b82f6' } : {}}
              >
                {size}
                <ChevronDown size={14} className="text-white/50" />
              </button>
              
              {openDropdown === 'size' && (
                <div className="absolute top-full right-0 mt-1 w-32 bg-[#1A1A1A] border border-white/20 rounded-lg overflow-hidden z-10 shadow-xl py-1">
                  {sizeOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => { setSize(opt); setOpenDropdown(null); }}
                      className={`w-full text-left px-3 py-1.5 text-[13px] hover:bg-blue-600 transition-colors ${size === opt ? 'bg-blue-600 text-white' : 'text-white'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Hide Dev Tools for this session */}
          <div className="flex items-center justify-between py-4 border-b border-white/10">
            <div className="pr-4">
              <h3 className="text-[14px] font-semibold text-white mb-0.5">Hide Dev Tools for this session</h3>
              <p className="text-[13px] text-white/50">Hide Dev Tools until you restart your dev server, or 1 day.</p>
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-transparent border border-white/20 rounded-lg text-[13px] text-white hover:bg-white/5 transition-colors shrink-0">
              <EyeOff size={14} className="text-white/70" />
              Hide
            </button>
          </div>

          {/* Hide Dev Tools shortcut */}
          <div className="flex items-center justify-between py-4 border-b border-white/10">
            <div className="pr-4">
              <h3 className="text-[14px] font-semibold text-white mb-0.5">Hide Dev Tools shortcut</h3>
              <p className="text-[13px] text-white/50">Set a custom keyboard shortcut to toggle visibility.</p>
            </div>
            <button className="px-3 py-1.5 bg-transparent border border-white/20 border-dashed rounded-lg text-[13px] text-white hover:bg-white/5 transition-colors shrink-0">
              Record Shortcut
            </button>
          </div>

          {/* Disable Dev Tools for this project */}
          <div className="py-4 border-b border-white/10">
            <h3 className="text-[14px] font-semibold text-white mb-1">Disable Dev Tools for this project</h3>
            <p className="text-[13px] text-white/50 leading-relaxed">
              To disable this UI completely, set <code className="px-1.5 py-0.5 bg-white/10 rounded font-mono text-[12px] text-white/80">devIndicators: false</code> in your next.config file.
            </p>
          </div>

          {/* Restart Dev Server */}
          <div className="flex items-center justify-between py-4 border-b border-white/10">
            <div className="pr-4">
              <h3 className="text-[14px] font-semibold text-white mb-0.5">Restart Dev Server</h3>
              <p className="text-[13px] text-white/50">Restarts the development server without needing to leave the browser.</p>
            </div>
            <button className="px-3 py-1.5 bg-transparent border border-white/20 rounded-lg text-[13px] text-white hover:bg-white/5 transition-colors shrink-0">
              Restart
            </button>
          </div>

          {/* Reset Bundler Cache */}
          <div className="flex items-center justify-between py-4">
            <div className="pr-4">
              <h3 className="text-[14px] font-semibold text-white mb-0.5">Reset Bundler Cache</h3>
              <p className="text-[13px] text-white/50 leading-relaxed">
                Clears the bundler cache and restarts the dev server. Helpful if you are seeing stale errors or changes are not appearing.
              </p>
            </div>
            <button className="px-3 py-1.5 bg-transparent border border-white/20 rounded-lg text-[13px] text-white hover:bg-white/5 transition-colors shrink-0">
              Reset Cache
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export function DevIndicatorMenu({ onOpenPreferences, onClose, onLogout, onOpenProfile }: { onOpenPreferences: () => void; onClose: () => void; onLogout?: () => void; onOpenProfile?: () => void }) {
  return (
    <>
      <div className="fixed inset-0 z-[40]" onClick={onClose} />
      <div className="absolute bottom-[calc(100%+8px)] left-4 w-64 bg-[#0A0A0A] border border-white/10 rounded-xl shadow-2xl z-[50] text-white font-sans animate-in fade-in zoom-in-95 duration-200">
        <div className="p-1.5 space-y-0.5">
          <div className="flex items-center justify-between px-3 py-2 text-[13px]">
            <span className="font-semibold text-white/90">Role</span>
            <span className="text-white/50">Superadmin</span>
          </div>
          <div className="flex items-center justify-between px-3 py-2 text-[13px]">
            <span className="font-semibold text-white/90">Status</span>
            <span className="text-[#0070F3]">Active</span>
          </div>
          <button 
            onClick={() => {
              onClose();
              if (onOpenProfile) onOpenProfile();
            }}
            className="w-full flex items-center justify-between px-3 py-2 text-[13px] font-semibold text-white/90 hover:bg-white/10 rounded-[8px] transition-colors"
          >
            My Profile
            <ChevronRight size={16} className="text-white/50" />
          </button>
        </div>
        <div className="h-px w-full bg-white/10 my-0.5" />
        <div className="p-1.5">
          <button 
            onClick={() => {
              onClose();
              onOpenPreferences();
            }}
            className="w-full flex items-center justify-between px-3 py-2 text-[13px] font-semibold hover:bg-white/10 rounded-[8px] transition-colors"
          >
            <span className="text-white/90">Preferences</span>
            <Settings size={16} className="text-white/50" />
          </button>
          <button 
            onClick={() => {
              onClose();
              if (onLogout) onLogout();
            }}
            className="w-full mt-0.5 flex items-center justify-between px-3 py-2 text-[13px] font-semibold hover:bg-red-500/10 rounded-[8px] transition-colors group"
          >
            <span className="text-red-400 group-hover:text-red-500 transition-colors">Sign Out</span>
            <LogOut size={16} className="text-red-400/50 group-hover:text-red-500 transition-colors" />
          </button>
        </div>
      </div>
    </>
  );
}
