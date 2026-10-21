import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Star, Check } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { useCartWishlist } from '../context/CartWishlistContext';

export const ProductGrid: React.FC = () => {
  const { addToCart, toggleWishlist, isInWishlist, openQuickView } = useCartWishlist();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const categories = ['All', 'Audio', 'Smartwatches', 'Phones', 'Accessories', 'Gaming'];

  const filteredProducts =
    selectedCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId((prev) => (prev === product.id ? null : prev));
    }, 1800);
  };

  const handleToggleWishlist = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <section id="products" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#b8e938] uppercase">
            FLAGSHIP HARDWARE
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          Designed for Your Everyday
        </h2>
        <p className="text-base sm:text-lg text-[#9cb3a5] font-normal leading-relaxed">
          "Thoughtful technology. Exceptional design. Everyday performance."
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b8e938] ${
                selectedCategory === cat
                  ? 'bg-[#b8e938] text-[#07140e] shadow-[0_0_15px_rgba(184,233,56,0.3)] font-bold'
                  : 'bg-[#12251c] text-[#9cb3a5] hover:text-white hover:bg-[#162e23] border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProducts.map((product) => {
          const isWish = isInWishlist(product.id);
          const isJustAdded = addedProductId === product.id;

          return (
            <div
              key={product.id}
              onClick={() => openQuickView(product)}
              className="group relative rounded-2xl bg-white/[0.03] hover:bg-white/[0.055] border border-white/[0.08] hover:border-[#b8e938]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)]"
            >
              {/* Card Header: Badges & Wishlist Button */}
              <div className="relative p-5 pb-0 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  {product.badge && (
                    <span
                      className={`text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full border shadow-sm ${
                        product.badge === 'BESTSELLER'
                          ? 'bg-[#b8e938]/15 text-[#b8e938] border-[#b8e938]/30'
                          : product.badge === 'NEW'
                          ? 'bg-[#4ade80]/15 text-[#4ade80] border-[#4ade80]/30'
                          : 'bg-[#b38b57]/15 text-[#b38b57] border-[#b38b57]/30'
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="text-[10px] font-bold text-[#728579] bg-white/5 px-2 py-0.5 rounded-full">
                      Save ${product.originalPrice - product.price}
                    </span>
                  )}
                </div>

                <button
                  onClick={(e) => handleToggleWishlist(e, product)}
                  aria-label={isWish ? 'Remove from wishlist' : 'Add to wishlist'}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 border ${
                    isWish
                      ? 'bg-[#b8e938] text-[#07140e] border-[#b8e938] shadow-[0_0_12px_rgba(184,233,56,0.5)]'
                      : 'bg-[#07140e]/80 text-[#9cb3a5] hover:text-white border-white/10 hover:border-white/30'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWish ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Product Photograph Container */}
              <div className="relative w-full aspect-[4/3] px-6 py-4 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#07140e]/40 pointer-events-none" />
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.6)] group-hover:scale-108 transition-transform duration-500 ease-out"
                />

                {/* Quick View Hover Pill */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/30 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#07140e] text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-3.5 h-3.5" />
                    Quick View
                  </span>
                </div>
              </div>

              {/* Product Details Section */}
              <div className="p-5 pt-2 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-semibold text-[#728579] tracking-wider uppercase">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-[#b8e938]">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="font-bold">{product.rating}</span>
                      <span className="text-[#728579]">({product.reviewsCount})</span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#b8e938] transition-colors leading-snug mb-1">
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#9cb3a5] line-clamp-1 mb-4">
                    {product.tagline}
                  </p>
                </div>

                {/* Price and Add to Cart Row */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-extrabold text-white">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-[#728579] line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-[#4ade80] font-medium">Free Shipping Eligible</span>
                  </div>

                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    aria-label={`Add ${product.name} to cart`}
                    className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-200 active:scale-95 ${
                      isJustAdded
                        ? 'bg-[#4ade80] text-[#07140e]'
                        : 'bg-[#12251c] hover:bg-[#b8e938] text-white hover:text-[#07140e] border border-white/10 hover:border-[#b8e938] shadow-sm'
                    }`}
                  >
                    {isJustAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};
