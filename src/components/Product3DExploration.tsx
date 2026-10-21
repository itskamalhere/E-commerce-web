import React, { useState } from 'react';
import { Volume2, Shield, Battery, Sliders, Cpu, CheckCircle2, RotateCw } from 'lucide-react';

interface Hotspot {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  specs: string;
  position: { x: number; y: number }; // Percentage coordinates on the product
}

export const Product3DExploration: React.FC = () => {
  const hotspots: Hotspot[] = [
    {
      id: 'hotspot-drivers',
      title: '40mm Beryllium Transducers',
      tagline: 'Ultralight acoustic diaphragms',
      description: 'Zero modal distortion up to 45kHz. Beryllium delivers 4x greater rigidity than titanium with exceptional internal dampening.',
      specs: '5Hz - 45,000Hz Frequency Response',
      icon: <Volume2 className="w-4 h-4 text-[#b8e938]" />,
      position: { x: 32, y: 55 }
    },
    {
      id: 'hotspot-anc',
      title: '48dB Triple-Mic Hybrid ANC',
      tagline: 'Acoustic anti-phase synthesis',
      description: '6 feedback and feedforward microphones process external ambient frequencies 200,000 times per second for instant silence.',
      specs: '-48dB Ambient Noise Attenuation',
      icon: <Cpu className="w-4 h-4 text-[#b8e938]" />,
      position: { x: 68, y: 58 }
    },
    {
      id: 'hotspot-chassis',
      title: 'Aerospace Grade-5 Titanium Arch',
      tagline: 'Precision CNC machined unibody',
      description: 'Torque-tested to 50,000 flex cycles. Lightweight memory alloy automatically calibrates clamping force to cranial contours.',
      specs: '268 grams balanced distribution',
      icon: <Shield className="w-4 h-4 text-[#b8e938]" />,
      position: { x: 50, y: 22 }
    },
    {
      id: 'hotspot-crown',
      title: 'Rotary Bronze Haptic Crown',
      tagline: 'Tactile stepped volume calibration',
      description: 'Solid machined brass with 36 micro-notches per full rotation. Gives physical mechanical sensation to digital gain controls.',
      specs: '0.5dB incremental step adjustments',
      icon: <Sliders className="w-4 h-4 text-[#b8e938]" />,
      position: { x: 74, y: 44 }
    },
    {
      id: 'hotspot-battery',
      title: '62-Hour Dual-Cell Architecture',
      tagline: 'Graphene-enhanced lithium polymer',
      description: 'Power through 3 cross-continental flights on a single charge. 15-minute quick boost provides 10 full hours of wireless playback.',
      specs: '1,200mAh Graphene-Polymer Array',
      icon: <Battery className="w-4 h-4 text-[#b8e938]" />,
      position: { x: 35, y: 38 }
    }
  ];

  const [activeHotspot, setActiveHotspot] = useState<Hotspot>(hotspots[0]);
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);

  const handleRotate = () => {
    setRotationAngle((prev) => prev + 90);
  };

  const toggleSoundTest = () => {
    setIsPlayingDemo(!isPlayingDemo);
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="rounded-3xl bg-[#091a13] border border-white/[0.08] p-6 sm:p-10 lg:p-16 relative overflow-hidden shadow-2xl">
        
        {/* Soft Ambient Light */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#1e4834]/40 blur-[130px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#b8e938]/10 blur-[140px] pointer-events-none" />

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#b8e938] uppercase">
              INTERACTIVE ARCHITECTURE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Technology You Can Feel.
          </h2>
          <p className="text-sm sm:text-base text-[#9cb3a5]">
            Explore the internal acoustic engineering and tactile materials that compose the ODDA flagship ecosystem.
          </p>
        </div>

        {/* Interactive Staging Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left / Center: Interactive Product Staging Viewport */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center rounded-2xl bg-[#06120d] border border-white/5 p-8 shadow-inner overflow-hidden">
              
              {/* Luminous Floor Halo */}
              <div className="absolute bottom-10 w-[78%] h-[20%] rounded-full bg-[#b8e938]/15 blur-2xl pointer-events-none" />
              <div className="absolute bottom-12 w-[70%] h-[16%] rounded-full border border-[#b8e938]/40 pointer-events-none" />

              {/* Central Product Image with Interactive 3D Perspective Rotation */}
              <div
                className="relative z-10 w-[82%] h-[82%] flex items-center justify-center transition-transform duration-700 ease-out"
                style={{
                  transform: `perspective(1000px) rotateY(${rotationAngle}deg)`,
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=85"
                  alt="ODDA-1 Apex Studio Engineering Architecture"
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]"
                />
              </div>

              {/* Interactive Hotspot Trigger Nodes */}
              {hotspots.map((spot) => {
                const isActive = activeHotspot.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspot(spot)}
                    aria-label={`Inspect ${spot.title}`}
                    className={`absolute z-20 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 focus:outline-none ${
                      isActive
                        ? 'bg-[#b8e938] text-[#07140e] scale-125 shadow-[0_0_20px_rgba(184,233,56,0.8)]'
                        : 'bg-[#12251c]/90 text-white hover:bg-[#b8e938] hover:text-[#07140e] border border-white/20'
                    }`}
                    style={{
                      left: `${spot.position.x}%`,
                      top: `${spot.position.y}%`,
                    }}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-current" />
                  </button>
                );
              })}

              {/* Viewport Control Bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20">
                <button
                  onClick={handleRotate}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#12251c]/80 hover:bg-[#162e23] border border-white/10 text-xs text-white transition-colors"
                >
                  <RotateCw className="w-3.5 h-3.5 text-[#b8e938]" />
                  <span>Turn View 90°</span>
                </button>

                <button
                  onClick={toggleSoundTest}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all ${
                    isPlayingDemo
                      ? 'bg-[#b8e938] text-[#07140e] border-[#b8e938]'
                      : 'bg-[#12251c]/80 text-[#9cb3a5] hover:text-white border-white/10'
                  }`}
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>{isPlayingDemo ? 'Acoustic Test Playing' : 'Simulate Sound'}</span>
                </button>
              </div>

            </div>

            {/* Audio frequency simulator wave preview (when test is active) */}
            {isPlayingDemo && (
              <div className="w-full max-w-[500px] mt-4 p-3 rounded-xl bg-white/[0.04] border border-[#b8e938]/30 flex items-center justify-between text-xs text-[#b8e938] animate-fadeIn">
                <span className="font-mono">Fidelity: 96kHz / 24-Bit FLAC</span>
                <div className="flex items-center gap-1">
                  <span className="w-1 h-3 bg-[#b8e938] animate-pulse" />
                  <span className="w-1 h-5 bg-[#b8e938] animate-pulse" />
                  <span className="w-1 h-2 bg-[#b8e938] animate-pulse" />
                  <span className="w-1 h-4 bg-[#b8e938] animate-pulse" />
                </div>
                <span className="text-[#9cb3a5]">Active Acoustic Modeling</span>
              </div>
            )}
          </div>

          {/* Right: Technical Inspector Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6 sm:p-8">
              
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#12251c] flex items-center justify-center border border-[#b8e938]/30">
                  {activeHotspot.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#b8e938]">
                  Component Telemetry
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white tracking-tight mb-2">
                {activeHotspot.title}
              </h3>

              <div className="text-xs font-semibold text-[#4ade80] mb-4">
                {activeHotspot.tagline}
              </div>

              <p className="text-sm text-[#9cb3a5] leading-relaxed mb-6">
                {activeHotspot.description}
              </p>

              <div className="p-4 rounded-xl bg-[#06120d] border border-white/5 mb-6">
                <div className="text-[10px] uppercase font-bold tracking-wider text-[#728579] mb-1">
                  Benchmark Metric
                </div>
                <div className="text-sm font-mono font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#b8e938]" />
                  <span>{activeHotspot.specs}</span>
                </div>
              </div>

              {/* Selector List */}
              <div className="space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#728579] mb-2">
                  Select Component to Inspect:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {hotspots.map((spot) => (
                    <button
                      key={spot.id}
                      onClick={() => setActiveHotspot(spot)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium text-left truncate transition-all ${
                        activeHotspot.id === spot.id
                          ? 'bg-[#12251c] text-[#b8e938] border border-[#b8e938]/40 font-bold'
                          : 'bg-white/5 text-[#9cb3a5] hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {spot.title}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
