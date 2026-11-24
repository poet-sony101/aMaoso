import React, { useRef, useEffect } from 'react';
import { X, Play, ShieldCheck, ArrowRight, MapPin, Sparkles } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRFQ: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onOpenRFQ }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen) {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {
          // Autoplay was prevented by browser policy
        });
      }
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="relative w-full max-w-4xl glass-panel rounded-2xl border border-[#363b94]/60 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-[#363b94]/30 flex justify-between items-center bg-[#111524]">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#c9313b]/20 text-[#e03a45] flex items-center justify-center border border-[#c9313b]/40">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-950/70 text-emerald-300 border border-emerald-500/40 uppercase">
                  Live Field Video
                </span>
                <span className="text-[10px] text-slate-400 font-semibold hidden sm:inline">
                  60s Night Drive Inspection
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white font-['Space_Grotesk'] mt-0.5">
                Community Roadway Solar Lighting Inspection
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Close Video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 bg-[#090c15]">
          <div className="relative rounded-xl overflow-hidden bg-black border border-[#363b94]/40 flex items-center justify-center max-h-[58vh]">
            <video
              ref={videoRef}
              src="/videos/community-night-drive.mp4"
              poster="/images/video-poster.jpg"
              controls
              playsInline
              className="max-h-[56vh] w-auto max-w-full rounded-lg"
            />
          </div>

          {/* Video Metadata & Engineering Analysis */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-[#111524] border border-[#363b94]/30 space-y-1">
              <div className="flex items-center space-x-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#e03a45]" />
                <span className="font-semibold uppercase text-[10px]">Project Scope</span>
              </div>
              <p className="font-bold text-white">Niger Delta Community Road</p>
              <p className="text-[11px] text-slate-400">Continuous dual-sided street light poles</p>
            </div>

            <div className="p-3 rounded-xl bg-[#111524] border border-[#363b94]/30 space-y-1">
              <div className="flex items-center space-x-1.5 text-slate-400">
                <Sparkles className="w-3.5 h-3.5 text-[#363b94]" />
                <span className="font-semibold uppercase text-[10px]">Optical Performance</span>
              </div>
              <p className="font-bold text-emerald-300">Type II Batwing (140° × 70°)</p>
              <p className="text-[11px] text-slate-400">Zero dark spots between consecutive poles</p>
            </div>

            <div className="p-3 rounded-xl bg-[#111524] border border-[#363b94]/30 space-y-1">
              <div className="flex items-center space-x-1.5 text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-semibold uppercase text-[10px]">Compliance & Warranty</span>
              </div>
              <p className="font-bold text-white">NDDC Compliant • 3-Yr Warranty</p>
              <p className="text-[11px] text-slate-400">Philips SMD Chips & Grade-A LiFePO4</p>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-[#363b94]/30 bg-[#111524] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            Need similar solar street lighting installed for your community, estate, or highway?
          </p>
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenRFQ();
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#c9313b] hover:bg-[#a8252e] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5 shadow-lg shadow-[#c9313b]/30 cursor-pointer"
            >
              <span>Request Project Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
