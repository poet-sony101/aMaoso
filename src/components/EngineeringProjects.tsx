import React, { useState } from 'react';
import { PROJECT_PHOTOS } from '../data/products';
import { ArrowRight, X, ZoomIn, ShieldCheck, MapPin, Play, Sparkles, CheckCircle2 } from 'lucide-react';

interface OurProjectsProps {
  onOpenRFQ: (context?: string) => void;
  onWatchVideo?: () => void;
}

export const EngineeringProjects: React.FC<OurProjectsProps> = ({ onOpenRFQ, onWatchVideo }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [isPlayingInline, setIsPlayingInline] = useState(false);

  return (
    <section id="projects" className="py-20 relative bg-[#090c15] border-t border-[#363b94]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>NDDC Approved Specifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight">
            Our Projects
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Proven community and infrastructure lighting installations across <strong className="text-white">Akwa Ibom</strong>, <strong className="text-white">Rivers</strong>, and <strong className="text-white">Delta State</strong>, engineered for extreme humidity and continuous all-night security.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-lg bg-[#111526] border border-[#363b94]/40 text-slate-300 text-xs">
              <MapPin className="w-3.5 h-3.5 text-[#e03a45]" />
              <span>Akwa Ibom Communities</span>
            </span>
            <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-lg bg-[#111526] border border-[#363b94]/40 text-slate-300 text-xs">
              <MapPin className="w-3.5 h-3.5 text-[#e03a45]" />
              <span>Rivers State Infrastructure</span>
            </span>
            <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-lg bg-[#111526] border border-[#363b94]/40 text-slate-300 text-xs">
              <MapPin className="w-3.5 h-3.5 text-[#e03a45]" />
              <span>Delta State Roadways & Towns</span>
            </span>
          </div>
        </div>

        {/* Featured Live Field Video Proof Showcase */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#111526] via-[#0d1122] to-[#111526] border border-[#363b94]/50 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#363b94]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Video Description & Engineering Facts */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Verified Field Footage • Night Inspection</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk'] leading-tight">
                Watch Live Roadway Illumination in Action
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Take a 60-second night drive through an active community corridor illuminated by our <strong>aMaoso WSYTLD-WA All-in-One Solar Streetlights</strong>. Witness the wide Type II optical distribution ($140^\circ \times 70^\circ$) casting uniform, high-lux illumination across the roadway with zero dark spots between poles.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
                <div className="p-2.5 rounded-xl bg-[#090c15] border border-[#363b94]/40 text-left">
                  <p className="text-[#e03a45] font-bold">100% Off-Grid</p>
                  <p className="text-[11px] text-slate-400">Zero NEPA billing</p>
                </div>
                <div className="p-2.5 rounded-xl bg-[#090c15] border border-[#363b94]/40 text-left">
                  <p className="text-emerald-400 font-bold">Type II Optics</p>
                  <p className="text-[11px] text-slate-400">140° × 70° Batwing</p>
                </div>
                <div className="p-2.5 rounded-xl bg-[#090c15] border border-[#363b94]/40 text-left col-span-2 sm:col-span-1">
                  <p className="text-sky-300 font-bold">NDDC Compliant</p>
                  <p className="text-[11px] text-slate-400">3-Year Warranty</p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <button
                  type="button"
                  onClick={() => {
                    if (onWatchVideo) {
                      onWatchVideo();
                    } else {
                      setIsPlayingInline(true);
                    }
                  }}
                  className="px-6 py-3 rounded-xl bg-[#c9313b] hover:bg-[#a8252e] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center space-x-2 shadow-lg shadow-[#c9313b]/30 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Play Full Video (60s)</span>
                </button>

                <button
                  type="button"
                  onClick={() => onOpenRFQ('Inquiry from Live Roadway Field Video')}
                  className="px-5 py-3 rounded-xl bg-[#111526] hover:bg-[#1a2038] text-slate-200 border border-[#363b94]/50 font-bold text-xs uppercase tracking-wider transition-all flex items-center space-x-1.5 cursor-pointer"
                >
                  <span>Request Project Sizing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Video Player Thumbnail or Inline Player */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#363b94]/60 shadow-2xl bg-black max-w-xs sm:max-w-sm w-full aspect-[9/16] group">
                {isPlayingInline ? (
                  <video
                    src="/videos/community-night-drive.mp4"
                    poster="/images/video-poster.jpg"
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div 
                    onClick={() => {
                      if (onWatchVideo) {
                        onWatchVideo();
                      } else {
                        setIsPlayingInline(true);
                      }
                    }}
                    className="relative w-full h-full cursor-pointer"
                  >
                    <img
                      src="/images/video-poster.jpg"
                      alt="aMaoso Solar Streetlight Night Drive Video Poster"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    {/* Big pulsing play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#c9313b] text-white flex items-center justify-center shadow-2xl shadow-[#c9313b]/60 group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 fill-current ml-1" />
                      </div>
                    </div>

                    {/* Bottom overlay info */}
                    <div className="absolute bottom-4 left-4 right-4 text-left space-y-1">
                      <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 text-[10px] font-bold border border-emerald-500/40">
                        1:00 Min Night Drive
                      </span>
                      <p className="text-xs font-bold text-white">
                        Community Roadway Illumination
                      </p>
                      <p className="text-[11px] text-slate-300">
                        Click to watch full video
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery strictly using the 7 photos from amaoso.com */}
        <div className="relative mb-10">
          <div className="text-center lg:text-left mb-6">
            <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] flex items-center justify-center lg:justify-start space-x-2">
              <span>Project Assembly & Installation Gallery</span>
              <span className="text-xs text-slate-400 font-normal">({PROJECT_PHOTOS.length} Authentic Photos)</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {PROJECT_PHOTOS.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo.src)}
                className="group relative rounded-xl overflow-hidden bg-[#111526] border border-[#363b94]/40 hover:border-[#c9313b] transition-all duration-300 aspect-[4/3] cursor-pointer shadow-lg hover:shadow-xl hover:shadow-[#363b94]/20"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-[#090c15]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#111524] text-[#e03a45] flex items-center justify-center border border-[#363b94] shadow-lg">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GET MORE Button in Logo Indigo/Crimson */}
        <div className="text-center pt-4">
          <button
            onClick={() => onOpenRFQ('Inquiry about Our Projects')}
            className="px-8 py-3.5 rounded-xl bg-[#363b94] hover:bg-[#272a6e] text-white border border-white/20 font-extrabold text-xs uppercase tracking-widest inline-flex items-center space-x-2 transition-all shadow-lg shadow-[#363b94]/30 cursor-pointer"
          >
            <span>GET MORE</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>

      {/* Lightbox Preview */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full glass-panel rounded-2xl border border-[#363b94] overflow-hidden shadow-2xl p-3 space-y-3"
          >
            <div className="flex justify-between items-center px-2 pt-1">
              <span className="text-xs font-bold text-[#e03a45] uppercase tracking-wider">
                Our Projects Gallery
              </span>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden max-h-[75vh] flex items-center justify-center bg-[#090c15]">
              <img
                src={selectedPhoto}
                alt="Amaoso Project"
                className="max-h-[72vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
