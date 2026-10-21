import React, { useEffect } from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext';

export const WishlistDrawer: React.FC = () => {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, removeFromWishlist, addToCart } = useCartWishlist();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isWishlistOpen) {
        setIsWishlistOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isWishlistOpen, setIsWishlistOpen]);

  if (!isWishlistOpen) return null;

  const handleMoveToCart = (item: typeof wishlist[0]) => {
    addToCart(item.product, 1);
    removeFromWishlist(item.product.id);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none animate-fadeIn">
      <div
        onClick={() => setIsWishlistOpen(false)}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0a1811] border-l border-white/10 text-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#12251c] flex items-center justify-center text-[#4ade80]">
                <Heart className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Saved Hardware</h3>
                <span className="text-xs text-[#728579]">{wishlist.length} items in wishlist</span>
              </div>
            </div>

            <button
              onClick={() => setIsWishlistOpen(false)}
              aria-label="Close Wishlist"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#9cb3a5] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {wishlist.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#12251c] border border-white/10 flex items-center justify-center text-[#728579] mb-4">
                  <Heart className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">Your wishlist is empty</h4>
                <p className="text-xs text-[#9cb3a5] max-w-xs mb-6">
                  Save pieces you are contemplating for future flagship acquisition.
                </p>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="px-6 py-3 rounded-full bg-[#12251c] hover:bg-[#b8e938] hover:text-[#07140e] text-white font-bold text-xs tracking-wider uppercase transition-colors"
                >
                  Browse Catalog
                </button>
              </div>
            ) : (
              wishlist.map((item) => (
                <div
                  key={item.product.id}
                  className="p-3.5 rounded-2xl bg-white/[0.025] border border-white/[0.06] flex gap-3.5 items-center justify-between"
                >
                  <div className="w-16 h-16 rounded-xl bg-[#07140e] border border-white/5 flex items-center justify-center p-2 shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-white truncate">
                      {item.product.name}
                    </h4>
                    <div className="text-xs font-bold text-[#b8e938] mt-0.5 mb-2">
                      ${item.product.price}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleMoveToCart(item)}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#b8e938] text-[#07140e] text-[11px] font-bold hover:bg-[#ccff00] transition-colors"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Move to Bag</span>
                      </button>

                      <button
                        onClick={() => removeFromWishlist(item.product.id)}
                        className="text-[#728579] hover:text-rose-400 p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlist.length > 0 && (
            <div className="p-5 border-t border-white/[0.08] bg-[#07140e]/90">
              <button
                onClick={() => {
                  wishlist.forEach((w) => addToCart(w.product, 1));
                  setIsWishlistOpen(false);
                }}
                className="w-full py-3.5 rounded-full bg-[#12251c] hover:bg-[#b8e938] hover:text-[#07140e] text-white font-bold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
              >
                <span>Move All to Cart</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
