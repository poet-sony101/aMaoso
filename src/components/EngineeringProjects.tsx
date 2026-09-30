import React, { useState } from 'react';
import { PROJECT_PHOTOS } from '../data/products';
import { ArrowRight, X, ZoomIn } from 'lucide-react';

interface OurProjectsProps {
  onOpenRFQ: (context?: string) => void;
}

export const EngineeringProjects: React.FC<OurProjectsProps> = ({ onOpenRFQ }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 relative bg-[#090c15] border-t border-[#363b94]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading exactly as on amaoso.com */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight">
            Our Projects
          </h2>
        </div>

        {/* Gallery strictly using the 7 photos from amaoso.com */}
        <div className="relative mb-10">
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
