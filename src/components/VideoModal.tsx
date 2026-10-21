import React, { useEffect, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, CheckCircle2 } from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext';

export const VideoModal: React.FC = () => {
  const { isVideoModalOpen, setIsVideoModalOpen } = useCartWishlist();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeFrame, setActiveFrame] = useState(0);

  const frames = [
    {
      title: 'Precision Machined Chassis',
      subtitle: 'Aerospace-Grade Titanium Grade 5 & Botanical Alloys',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=85',
      timestamp: '00:08'
    },
    {
      title: 'Acoustic Chamber Resonance',
      subtitle: '40mm Beryllium Diaphragm in Dual Resonant Helmholtz Tubes',
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=85',
      timestamp: '00:24'
    },
    {
      title: 'Sub-Zero Distortion Active Tuning',
      subtitle: 'Hybrid ANC Anti-Phase Signal Synthesizer at 200kHz',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1200&q=85',
      timestamp: '00:46'
    }
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVideoModalOpen) {
        setIsVideoModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVideoModalOpen, setIsVideoModalOpen]);

  // Frame slide progression simulation
  useEffect(() => {
    if (!isVideoModalOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setActiveFrame((prev) => (prev + 1) % frames.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isVideoModalOpen, isPlaying, frames.length]);

  if (!isVideoModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={() => setIsVideoModalOpen(false)}
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
      />

      {/* Video Film Container */}
      <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden bg-[#07140e] border border-white/10 shadow-2xl z-10 flex flex-col">
        
        {/* Top Video Header */}
        <div className="p-4 sm:p-6 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between z-20 absolute top-0 left-0 right-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-white">
              ODDA Film · 4K UHD Cinematic
            </span>
          </div>

          <button
            onClick={() => setIsVideoModalOpen(false)}
            aria-label="Close Film Viewer"
            className="w-9 h-9 rounded-full bg-black/50 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Stage with Cinematic Motion Presentation */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
          <img
            src={frames[activeFrame].image}
            alt={frames[activeFrame].title}
            className="w-full h-full object-cover filter brightness-75 scale-105 animate-pulse-subtle transition-all duration-1000"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#07140e] via-transparent to-black/40 pointer-events-none" />

          {/* Center Play/Pause Overlay Control */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause presentation' : 'Play presentation'}
            className="w-16 h-16 rounded-full bg-[#b8e938]/90 hover:bg-[#ccff00] text-[#07140e] flex items-center justify-center shadow-[0_0_35px_rgba(184,233,56,0.6)] transform hover:scale-110 active:scale-95 transition-all z-20"
          >
            {isPlaying ? (
              <Pause className="w-7 h-7 fill-current" />
            ) : (
              <Play className="w-7 h-7 fill-current ml-1" />
            )}
          </button>

          {/* Lower Cinematic Subtitle Bar */}
          <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#b8e938] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Chapter {activeFrame + 1} of {frames.length}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {frames[activeFrame].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#9cb3a5]">
                {frames[activeFrame].subtitle}
              </p>
            </div>

            {/* Audio Toggle */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="w-9 h-9 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors self-start sm:self-auto"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-[#b8e938]" />}
            </button>
          </div>
        </div>

        {/* Video Scrubber & Frame Chapters */}
        <div className="p-4 sm:p-5 bg-[#091a13] border-t border-white/[0.08] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 w-full">
            {frames.map((frame, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveFrame(idx);
                  setIsPlaying(false);
                }}
                className={`flex-1 text-left p-2 rounded-xl transition-all ${
                  activeFrame === idx
                    ? 'bg-[#12251c] border border-[#b8e938]/40 text-white'
                    : 'bg-white/5 hover:bg-white/10 text-[#728579]'
                }`}
              >
                <div className="text-[10px] font-mono">{frame.timestamp}</div>
                <div className="text-xs font-semibold truncate text-[#9cb3a5]">{frame.title}</div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
