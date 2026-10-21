import React from 'react';
import { ArrowRight, Volume2, BatteryCharging, Sparkles } from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext';
import { PRODUCTS } from '../data/products';

export const NewArrivalBanner: React.FC = () => {
  const { addToCart, openQuickView } = useCartWishlist();
  const earbudsProduct = PRODUCTS.find((p) => p.id === 'prod-earbuds-pod') || PRODUCTS[1];

  const handleShopNow = () => {
    openQuickView(earbudsProduct);
  };

  return (
    <section id="new-arrival" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0d2218] via-[#091a13] to-[#07140e] border border-white/[0.08] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] p-6 sm:p-10 lg:p-16">
        
        {/* Soft Ambient Forest Green Behind-Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#183d2c]/50 blur-[120px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left-Side Visual: Earbuds in Open Case on Dark Pedestal with Halo Ring */}
          <div className="lg:col-span-6 flex items-center justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center">
              
              {/* Luminous Lime Halo Ring */}
              <div className="absolute w-[75%] h-[75%] rounded-full border-[3px] border-[#b8e938] opacity-75 shadow-[0_0_50px_rgba(184,233,56,0.5)] animate-pulse-subtle" />
              <div className="absolute w-[72%] h-[72%] rounded-full border border-white/20 opacity-40" />

              {/* Dark Circular Display Pedestal */}
              <div className="absolute bottom-6 w-[82%] h-[24%] rounded-[50%] bg-[#081711] border-2 border-[#b38b57]/40 shadow-[0_25px_35px_rgba(0,0,0,0.9)]" />

              {/* Real High-Resolution Earbuds Photograph */}
              <div className="relative z-10 w-[84%] h-[84%] flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=85"
                  alt="Vortex Pods True Wireless Earbuds in Open Case"
                  loading="lazy"
                  className="w-full h-full object-contain filter drop-shadow-[0_25px_30px_rgba(0,0,0,0.85)] hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Floating Tech Pill Indicator */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#07140e]/90 backdrop-blur-md border border-[#b8e938]/30 shadow-lg text-xs font-semibold text-white">
                <Sparkles className="w-3.5 h-3.5 text-[#b8e938]" />
                <span>Spatial Audio 2.0</span>
              </div>
            </div>
          </div>

          {/* Right-Side Content */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left order-1 lg:order-2">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-[#162e23] border border-[#b8e938]/30 text-[11px] font-extrabold tracking-[0.2em] text-[#b8e938] uppercase">
                NEW ARRIVAL
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
              Small Size.{' '}
              <span className="font-script font-bold text-[#4ade80] text-4xl sm:text-5xl lg:text-6xl inline-block -rotate-1 ml-1 text-shadow-lime">
                Big Performance.
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#9cb3a5] font-normal leading-relaxed mb-6 max-w-lg">
              "Experience sound like never before." Crafted with ceramic transducers, custom beamforming microphones, and a tactile matte charging cradle with wireless Qi induction.
            </p>

            {/* Quick Feature Badges */}
            <div className="grid grid-cols-2 gap-3 mb-8 max-w-md">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                <Volume2 className="w-4 h-4 text-[#b8e938]" />
                <span className="text-xs text-[#9cb3a5]">11mm Ceramic Dynamic</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                <BatteryCharging className="w-4 h-4 text-[#b8e938]" />
                <span className="text-xs text-[#9cb3a5]">36h Total Endurance</span>
              </div>
            </div>

            {/* CTA and Price Row */}
            <div className="flex flex-wrap items-center gap-5">
              <button
                onClick={handleShopNow}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#b8e938] hover:bg-[#ccff00] text-[#07140e] font-extrabold text-sm tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_0_25px_rgba(184,233,56,0.35)] hover:shadow-[0_0_40px_rgba(184,233,56,0.55)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#b8e938]/40 active:scale-95"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={() => addToCart(earbudsProduct, 1)}
                className="px-6 py-3.5 rounded-full bg-[#12251c] hover:bg-[#162e23] border border-white/10 hover:border-[#b8e938]/40 text-white font-semibold text-sm transition-all duration-200 active:scale-95"
              >
                Direct Add to Cart · ${earbudsProduct.price}
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
