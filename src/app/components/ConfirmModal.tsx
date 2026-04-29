import { AlertTriangle, X } from "lucide-react";
import { useEffect } from "react";

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  isDestructive?: boolean;
  isLoading?: boolean;
}

export function ConfirmModal({
  isOpen,
  title,
  message,
  confirmText = "OK",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  isDestructive = true,
  isLoading = false,
}: ConfirmModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={!isLoading ? onCancel : undefined}
      />
      
      {/* Modal Card */}
      <div className="relative w-full max-w-[400px] bg-white rounded-[24px] shadow-2xl p-6 mx-4 animate-in zoom-in-95 duration-300">
        <button 
          onClick={!isLoading ? onCancel : undefined}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X size={20} strokeWidth={2.5} />
        </button>

        <div className="flex flex-col items-center text-center mt-2">
          {isDestructive ? (
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mb-5 shadow-sm border border-red-100">
              <AlertTriangle size={32} strokeWidth={2} />
            </div>
          ) : (
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-500 mb-5 shadow-sm border border-indigo-100">
              <AlertTriangle size={32} strokeWidth={2} />
            </div>
          )}
          
          <h3 className="text-[20px] font-bold text-slate-800 tracking-tight mb-2">
            {title}
          </h3>
          <p className="text-[14px] text-slate-500 font-medium leading-relaxed px-4 mb-8">
            {message}
          </p>

          <div className="flex items-center gap-3 w-full">
            <button
              onClick={onCancel}
              disabled={isLoading}
              className="flex-1 px-4 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-[14px] font-bold rounded-xl transition-all disabled:opacity-50"
            >
              {cancelText}
            </button>
            <button
              onClick={onConfirm}
              disabled={isLoading}
              className={`flex-1 px-4 py-3 text-white text-[14px] font-bold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 ${
                isDestructive 
                  ? "bg-red-500 hover:bg-red-600 shadow-red-500/20" 
                  : "bg-[#2563eb] hover:bg-[#1d4ed8] shadow-blue-500/20"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  Memproses...
                </>
              ) : (
                confirmText
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}