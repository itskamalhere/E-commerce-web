import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export const CategoryGrid: React.FC = () => {
  const handleCategoryClick = (_slug: string) => {
    const productsSection = document.querySelector('#products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
        <div>
          <div className="text-[11px] font-bold tracking-[0.25em] text-[#b8e938] uppercase mb-2">
            Curated Ecosystem
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Shop By Category
          </h2>
        </div>

        <button
          onClick={() => handleCategoryClick('all')}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-[#4ade80] hover:text-[#b8e938] transition-colors"
        >
          <span>View All Categories</span>
          <div className="w-7 h-7 rounded-full bg-[#12251c] group-hover:bg-[#b8e938] group-hover:text-[#07140e] flex items-center justify-center transition-all duration-300">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </button>
      </div>

      {/* 5-Column Responsive Category Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            onClick={() => handleCategoryClick(cat.slug)}
            className="group relative cursor-pointer rounded-2xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-[#b8e938]/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_-5px_rgba(184,233,56,0.2)]"
          >
            {/* Top metadata */}
            <div className="flex items-center justify-between mb-3 z-10">
              <span className="text-[10px] font-bold tracking-wider uppercase text-[#9cb3a5] bg-[#07140e]/70 px-2 py-0.5 rounded-full border border-white/5">
                {cat.count} items
              </span>
              <div className="w-6 h-6 rounded-full bg-white/5 group-hover:bg-[#b8e938] text-white group-hover:text-[#07140e] flex items-center justify-center transition-all duration-300">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Real Product Photograph Container */}
            <div className="relative w-full aspect-square my-2 rounded-xl overflow-hidden bg-[#0d2218]/50 flex items-center justify-center">
              <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#07140e]/60 z-10 pointer-events-none" />
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Bottom Content */}
            <div className="mt-3 z-10 text-left">
              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#b8e938] transition-colors">
                {cat.name}
              </h3>
              <p className="text-xs text-[#728579] line-clamp-1 mb-3">
                {cat.subtitle}
              </p>
              
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#b8e938] group-hover:text-white transition-colors">
                <span>Shop Now</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Subtle bottom border neon bar on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#b8e938] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
};
