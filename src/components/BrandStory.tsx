import React from 'react';
import { BRAND_PRINCIPLES } from '../data/products';
import { Compass, Feather, Sparkles } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section id="brand-story" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Asymmetric Editorial Image Composition */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden bg-[#0d2218] border border-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1200&q=85"
              alt="ODDAWURLD Industrial Design Philosophy"
              loading="lazy"
              className="w-full h-[420px] sm:h-[500px] object-cover object-center filter brightness-90 hover:scale-105 transition-transform duration-700 ease-out"
            />
            
            {/* Dark green gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07140e] via-transparent to-transparent opacity-80" />
            
            {/* Floating Brand Philosophy Quote Card */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#07140e]/85 backdrop-blur-md border border-white/10 shadow-xl">
              <div className="flex items-center gap-2 mb-2 text-[#b8e938]">
                <Sparkles className="w-4 h-4" />
                <span className="text-[11px] font-bold tracking-widest uppercase">The ODDA Ethos</span>
              </div>
              <p className="text-xs sm:text-sm text-[#9cb3a5] leading-relaxed italic">
                "We believe gadgets should not distract from life, but rather heighten every human touchpoint through understated craft."
              </p>
            </div>
          </div>

          {/* Decorative Bronze Metallic Corner Accent */}
          <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#b38b57] rounded-tl-xl pointer-events-none opacity-60" />
        </div>

        {/* Right Column: Editorial Copy & 3 Brand Principles */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#b8e938] uppercase">
              DESIGN PHILOSOPHY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Technology,{' '}
            <span className="font-script text-[#4ade80] text-4xl sm:text-5xl lg:text-6xl inline-block -rotate-1">
              Refined.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#9cb3a5] font-normal leading-relaxed mb-10">
            "Powerful ideas. Thoughtful design. Technology made to move with you." We create electronics that marry the organic stillness of nature with the exactitude of futuristic engineering.
          </p>

          {/* 3 Brand Principles */}
          <div className="space-y-6">
            {BRAND_PRINCIPLES.map((principle, index) => (
              <div
                key={principle.number}
                className="group p-5 rounded-2xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/[0.06] hover:border-[#b8e938]/30 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#12251c] group-hover:bg-[#b8e938] text-[#b8e938] group-hover:text-[#07140e] font-mono text-sm font-bold flex items-center justify-center shrink-0 transition-colors duration-300 shadow-sm">
                  {principle.number}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#b8e938] transition-colors mb-1">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#728579] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
