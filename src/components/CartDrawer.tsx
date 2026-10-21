import React, { useEffect } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartCount,
    cartSubtotal,
    freeShippingThreshold,
    shippingAmount,
    cartTotal,
    setIsCheckoutOpen
  } = useCartWishlist();

  // Escape key listener to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) {
        setIsCartOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  const progressToFreeShipping = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0a1811] border-l border-white/10 text-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#12251c] flex items-center justify-center text-[#b8e938]">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Your Shopping Bag</h3>
                <span className="text-xs text-[#728579]">{cartCount} items selected</span>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              aria-label="Close Shopping Bag"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#9cb3a5] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          <div className="px-5 sm:px-6 py-3.5 bg-[#0e241a] border-b border-white/5">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-[#9cb3a5]">
                {cartSubtotal >= freeShippingThreshold ? (
                  <strong className="text-[#4ade80]">Free Worldwide Shipping Unlocked!</strong>
                ) : (
                  <span>
                    Add <strong className="text-white">${remainingForFreeShipping.toFixed(2)}</strong> more for Free Shipping
                  </span>
                )}
              </span>
              <span className="text-[11px] font-mono text-[#b8e938] font-bold">
                {progressToFreeShipping.toFixed(0)}%
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#4ade80] to-[#b8e938] transition-all duration-300 rounded-full shadow-[0_0_8px_#b8e938]"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#12251c] border border-white/10 flex items-center justify-center text-[#728579] mb-4">
                  <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">Your bag is empty</h4>
                <p className="text-xs text-[#9cb3a5] max-w-xs mb-6">
                  Experience next-generation audio fidelity and luxury technology. Browse our curated flagship gadgets.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-3 rounded-full bg-[#b8e938] text-[#07140e] font-extrabold text-xs tracking-wider uppercase shadow-md hover:bg-[#ccff00] transition-colors"
                >
                  Explore Hardware
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="p-3.5 rounded-2xl bg-white/[0.025] border border-white/[0.06] flex gap-3.5 items-center justify-between"
                >
                  {/* Thumbnail */}
                  <div className="w-16 h-16 rounded-xl bg-[#07140e] border border-white/5 flex items-center justify-center p-2 shrink-0 overflow-hidden">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-contain filter drop-shadow-md"
                    />
                  </div>

                  {/* Title & Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-white truncate">
                      {item.product.name}
                    </h4>
                    <div className="text-[11px] text-[#728579] mb-2 flex items-center gap-2">
                      <span>{item.selectedColor || item.product.color}</span>
                      <span>•</span>
                      <span className="font-semibold text-white">${item.product.price}</span>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-white/10 rounded-full bg-[#07140e] px-2 py-0.5">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-5 h-5 flex items-center justify-center text-[#9cb3a5] hover:text-white"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center text-xs font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-5 h-5 flex items-center justify-center text-[#9cb3a5] hover:text-white"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-[#728579] hover:text-rose-400 p-1 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Item Subtotal */}
                  <div className="text-right shrink-0">
                    <span className="text-sm font-extrabold text-white">
                      ${item.product.price * item.quantity}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Totals & Checkout Button */}
          {cart.length > 0 && (
            <div className="p-5 sm:p-6 border-t border-white/[0.08] bg-[#07140e]/90 backdrop-blur-md">
              <div className="space-y-2 mb-4 text-xs">
                <div className="flex justify-between text-[#9cb3a5]">
                  <span>Subtotal</span>
                  <span className="font-semibold text-white">${cartSubtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#9cb3a5]">
                  <span>Estimated Shipping</span>
                  <span className="font-semibold text-white">
                    {shippingAmount === 0 ? (
                      <span className="text-[#4ade80]">Free</span>
                    ) : (
                      `$${shippingAmount.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="pt-2 border-t border-white/[0.06] flex justify-between text-sm font-bold text-white">
                  <span>Total Due</span>
                  <span className="text-base text-[#b8e938] font-extrabold">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleProceedToCheckout}
                className="w-full py-4 rounded-full bg-[#b8e938] hover:bg-[#ccff00] text-[#07140e] font-extrabold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(184,233,56,0.4)] active:scale-98"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-[#728579]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4ade80]" />
                <span>256-bit Encrypted Demo Checkout</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
