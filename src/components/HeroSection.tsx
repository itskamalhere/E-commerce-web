import React from 'react';
import { ArrowRight, Play, ShieldCheck, Award, Truck, Lock } from 'lucide-react';
import { Hero3DCanvas } from './Hero3DCanvas';
import { useCartWishlist } from '../context/CartWishlistContext';

export const HeroSection: React.FC = () => {
  const { setIsVideoModalOpen } = useCartWishlist();

  const handleShopNowClick = () => {
    const productsSection = document.querySelector('#products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-[92vh] pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-12 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left Column: Brand Marketing Copy & CTAs */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          
          {/* Eyebrow Label with Short Horizontal Lime Divider */}
          <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#b8e938] uppercase">
              NEXT-GEN GADGETS
            </span>
            <div className="w-12 h-[2px] bg-[#b8e938] rounded-full shadow-[0_0_8px_#b8e938]" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold text-white leading-[1.08] tracking-tight mb-5">
            Power Up Your{' '}
            <span className="font-script font-bold text-[#4ade80] sm:text-[4.8rem] lg:text-[5.2rem] inline-block -rotate-2 ml-1 text-shadow-lime hover:scale-105 transition-transform duration-300">
              World.
            </span>
          </h1>

          {/* Support Copy */}
          <p className="text-base sm:text-lg text-[#9cb3a5] max-w-xl font-normal leading-relaxed mb-8">
            Smart. Sleek. Reliable. Gadgets that keep you ahead with aerospace-grade durability and reference acoustic fidelity.
          </p>

          {/* Call to Action Row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12">
            {/* Primary CTA: Neon-Lime Pill Button */}
            <button
              onClick={handleShopNowClick}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#b8e938] hover:bg-[#ccff00] text-[#07140e] font-extrabold text-sm tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_30px_rgba(184,233,56,0.35)] hover:shadow-[0_0_45px_rgba(184,233,56,0.6)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#b8e938]/50 active:scale-95"
            >
              <span>SHOP NOW</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Secondary CTA: Watch Collection / Play Video */}
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="group inline-flex items-center gap-3.5 px-5 py-3.5 rounded-full hover:bg-white/[0.04] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <div className="w-11 h-11 rounded-full bg-white text-[#07140e] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#b8e938] transition-all duration-300">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white tracking-wide group-hover:text-[#b8e938] transition-colors">
                  Watch Collection
                </div>
                <div className="text-[11px] text-[#728579]">Play video preview</div>
              </div>
            </button>
          </div>

          {/* Trust Badges Strip (4 Indicators) */}
          <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#b8e938] shrink-0" />
              <div className="text-left">
                <div className="text-xs font-semibold text-white">Premium Quality</div>
                <div className="text-[10px] text-[#728579]">Aerospace Grade</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-[#b8e938] shrink-0" />
              <div className="text-left">
                <div className="text-xs font-semibold text-white">1 Year Warranty</div>
                <div className="text-[10px] text-[#728579]">Full Replacement</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Truck className="w-5 h-5 text-[#b8e938] shrink-0" />
              <div className="text-left">
                <div className="text-xs font-semibold text-white">Free Shipping $50+</div>
                <div className="text-[10px] text-[#728579]">Global Expedited</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Lock className="w-5 h-5 text-[#b8e938] shrink-0" />
              <div className="text-left">
                <div className="text-xs font-semibold text-white">Secure Payments</div>
                <div className="text-[10px] text-[#728579]">256-Bit Encrypted</div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive 3D Headphone Showcase */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          {/* Subtle Ambient Behind-Glow */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-[#163a28]/40 blur-[90px] pointer-events-none" />
          
          <Hero3DCanvas />
        </div>

      </div>
    </section>
  );
};
