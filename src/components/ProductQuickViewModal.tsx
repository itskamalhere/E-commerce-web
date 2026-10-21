import React, { useState, useEffect } from 'react';
import { X, Heart, ShoppingBag, Star, Check, ShieldCheck, Truck, Plus, Minus } from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext';

export const ProductQuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    closeQuickView,
    addToCart,
    toggleWishlist,
    isInWishlist
  } = useCartWishlist();

  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (quickViewProduct) {
      setSelectedImage(quickViewProduct.image);
      setSelectedColor(quickViewProduct.color);
      setQuantity(1);
      setIsAdded(false);
    }
  }, [quickViewProduct]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && quickViewProduct) {
        closeQuickView();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [quickViewProduct, closeQuickView]);

  if (!quickViewProduct) return null;

  const isWish = isInWishlist(quickViewProduct.id);

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity, selectedColor);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto select-none animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={closeQuickView}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#091a13] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 my-8 flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={closeQuickView}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#07140e]/80 hover:bg-white/10 border border-white/10 flex items-center justify-center text-[#9cb3a5] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Visual Gallery */}
        <div className="md:w-1/2 p-6 sm:p-8 bg-[#06120d] flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10">
          
          {/* Main Visual Staging */}
          <div className="relative w-full aspect-square rounded-2xl bg-[#0a1811] border border-white/5 p-6 flex items-center justify-center overflow-hidden">
            <div className="absolute w-[80%] h-[80%] rounded-full bg-[#183d2c]/40 blur-2xl pointer-events-none" />
            <img
              src={selectedImage}
              alt={quickViewProduct.name}
              className="w-full h-full object-contain filter drop-shadow-2xl z-10 transition-all duration-300"
            />
          </div>

          {/* Thumbnail Strip */}
          {quickViewProduct.galleryImages && quickViewProduct.galleryImages.length > 1 && (
            <div className="flex items-center gap-3 mt-4 overflow-x-auto py-2">
              {quickViewProduct.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-16 rounded-xl p-1 bg-[#0a1811] border shrink-0 transition-all ${
                    selectedImage === img
                      ? 'border-[#b8e938] shadow-[0_0_10px_#b8e938]'
                      : 'border-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          )}

          <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#728579]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#b8e938]" />
              <span>ODDA Official 1-Year Guarantee</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-[#4ade80]" />
              <span>Ships in 24h</span>
            </div>
          </div>
        </div>

        {/* Right Column: Information, Specs & Actions */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh]">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#b8e938]">
                {quickViewProduct.category}
              </span>

              <div className="flex items-center gap-1 text-xs text-[#b8e938]">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="font-bold">{quickViewProduct.rating}</span>
                <span className="text-[#728579]">({quickViewProduct.reviewsCount} verified reviews)</span>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
              {quickViewProduct.name}
            </h3>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">
                ${quickViewProduct.price}
              </span>
              {quickViewProduct.originalPrice && (
                <span className="text-sm text-[#728579] line-through">
                  ${quickViewProduct.originalPrice}
                </span>
              )}
              {quickViewProduct.badge && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#b8e938]/20 text-[#b8e938] border border-[#b8e938]/30">
                  {quickViewProduct.badge}
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-[#9cb3a5] leading-relaxed mb-6">
              {quickViewProduct.description}
            </p>

            {/* Color Swatch Selector */}
            {quickViewProduct.availableColors && quickViewProduct.availableColors.length > 0 && (
              <div className="mb-6">
                <div className="text-xs font-semibold text-white mb-2 flex items-center justify-between">
                  <span>Selected Color Finish:</span>
                  <span className="text-[#b8e938]">{selectedColor}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  {quickViewProduct.availableColors.map((col) => (
                    <button
                      key={col.name}
                      onClick={() => setSelectedColor(col.name)}
                      title={col.name}
                      className={`w-7 h-7 rounded-full border-2 transition-transform ${
                        selectedColor === col.name
                          ? 'border-[#b8e938] scale-110 shadow-[0_0_10px_#b8e938]'
                          : 'border-white/20 hover:scale-105'
                      }`}
                      style={{ backgroundColor: col.hex }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Specifications Matrix */}
            <div className="mb-6 rounded-2xl bg-white/[0.025] border border-white/5 p-4">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#728579] mb-3">
                Hardware Specifications
              </div>
              <div className="space-y-2 text-xs">
                {Object.entries(quickViewProduct.specs).map(([label, val]) => (
                  <div key={label} className="flex justify-between items-center py-1 border-b border-white/[0.04] last:border-0">
                    <span className="text-[#9cb3a5]">{label}</span>
                    <span className="font-semibold text-white text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-white/[0.08] flex items-center gap-3">
            {/* Quantity */}
            <div className="flex items-center border border-white/10 rounded-full bg-[#07140e] px-3 py-2">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-5 h-5 flex items-center justify-center text-[#9cb3a5] hover:text-white"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-8 text-center text-xs font-bold text-white">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-5 h-5 flex items-center justify-center text-[#9cb3a5] hover:text-white"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Add to Cart CTA */}
            <button
              onClick={handleAddToCart}
              className={`flex-1 py-3.5 rounded-full font-extrabold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 ${
                isAdded
                  ? 'bg-[#4ade80] text-[#07140e]'
                  : 'bg-[#b8e938] hover:bg-[#ccff00] text-[#07140e] shadow-[0_0_20px_rgba(184,233,56,0.35)] active:scale-95'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Added to Bag</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag · ${(quickViewProduct.price * quantity).toFixed(2)}</span>
                </>
              )}
            </button>

            {/* Wishlist Toggle Button */}
            <button
              onClick={() => toggleWishlist(quickViewProduct)}
              aria-label={isWish ? 'Remove from wishlist' : 'Save to wishlist'}
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all ${
                isWish
                  ? 'bg-[#b8e938] text-[#07140e] border-[#b8e938]'
                  : 'bg-[#07140e] text-[#9cb3a5] hover:text-white border-white/10'
              }`}
            >
              <Heart className={`w-4 h-4 ${isWish ? 'fill-current' : ''}`} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
