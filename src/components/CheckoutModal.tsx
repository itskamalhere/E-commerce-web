import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Lock, CreditCard, Sparkles, Truck } from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartSubtotal,
    shippingAmount,
    cartTotal,
    clearCart
  } = useCartWishlist();

  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    fullName: 'Kamal Sharma',
    email: 'kamal.design@oddawurld.demo',
    address: '420 Orchard Horizon Boulevard',
    city: 'San Francisco',
    postalCode: '94107',
    country: 'United States',
    paymentMethod: 'card'
  });
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [orderNumber, setOrderNumber] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCheckoutOpen) {
        setIsCheckoutOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCheckoutOpen, setIsCheckoutOpen]);

  if (!isCheckoutOpen) return null;

  const discountAmount = (cartSubtotal * discountPercent) / 100;
  const finalTotal = Math.max(0, cartTotal - discountAmount);

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'ODDA10') {
      setDiscountPercent(10);
    } else if (promoCode.trim().toUpperCase() === 'VIP20') {
      setDiscountPercent(20);
    } else {
      alert('Try promo code: ODDA10 for 10% off demo order.');
    }
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generated = `ODDA-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(generated);
    setStep('success');
  };

  const handleFinish = () => {
    clearCart();
    setIsCheckoutOpen(false);
    setStep('form');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto select-none animate-fadeIn">
      <div
        onClick={() => setIsCheckoutOpen(false)}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      <div className="relative w-full max-w-2xl bg-[#091a13] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 my-8">
        
        {/* Header */}
        <div className="p-6 border-b border-white/[0.08] flex items-center justify-between bg-[#07140e]">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#b8e938]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#9cb3a5]">
              ODDA Secure Checkout · Demo Mode
            </span>
          </div>

          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#9cb3a5] hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmitOrder} className="p-6 sm:p-8 space-y-6">
            
            {/* Notice */}
            <div className="p-3.5 rounded-xl bg-[#12251c] border border-[#b8e938]/30 text-xs text-[#9cb3a5] flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#b8e938] shrink-0" />
              <span>
                This is a realistic frontend prototype. No real payment credentials will be charged.
              </span>
            </div>

            {/* Shipping Info Form */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#b8e938]" />
                <span>1. Shipping Destination</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-[#728579] block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#07140e] border border-white/10 text-white text-xs focus:border-[#b8e938] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[#728579] block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#07140e] border border-white/10 text-white text-xs focus:border-[#b8e938] focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-[11px] text-[#728579] block mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#07140e] border border-white/10 text-white text-xs focus:border-[#b8e938] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[#728579] block mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#07140e] border border-white/10 text-white text-xs focus:border-[#b8e938] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[#728579] block mb-1">Postal Code</label>
                  <input
                    type="text"
                    required
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#07140e] border border-white/10 text-white text-xs focus:border-[#b8e938] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#b8e938]" />
                <span>2. Payment Option</span>
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'card', name: 'Credit Card', desc: 'Demo Visa/Master' },
                  { id: 'apple', name: 'Apple Pay', desc: 'Biometric 1-Click' },
                  { id: 'crypto', name: 'ODDA Vault', desc: 'Encrypted Token' }
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: m.id })}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      formData.paymentMethod === m.id
                        ? 'bg-[#12251c] border-[#b8e938] text-white shadow-sm'
                        : 'bg-white/5 border-white/5 text-[#9cb3a5] hover:bg-white/10'
                    }`}
                  >
                    <div className="text-xs font-bold">{m.name}</div>
                    <div className="text-[10px] text-[#728579]">{m.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Order Summary & Promo Code */}
            <div className="rounded-2xl bg-[#07140e] border border-white/5 p-4 space-y-3">
              <div className="flex items-center justify-between text-xs text-[#9cb3a5]">
                <span>Items Subtotal ({cart.length} distinct items)</span>
                <span className="font-semibold text-white">${cartSubtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-[#9cb3a5]">
                <span>Expedited Shipping</span>
                <span className="font-semibold text-white">
                  {shippingAmount === 0 ? <strong className="text-[#4ade80]">Free ($50+ promo)</strong> : `$${shippingAmount}`}
                </span>
              </div>
              {discountPercent > 0 && (
                <div className="flex items-center justify-between text-xs text-[#b8e938]">
                  <span>Voucher Discount ({discountPercent}%)</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-sm font-bold text-white">
                <span>Final Order Total:</span>
                <span className="text-lg text-[#b8e938] font-extrabold">${finalTotal.toFixed(2)}</span>
              </div>

              {/* Promo input */}
              <div className="pt-2 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Promo Code (use ODDA10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs placeholder-[#728579]"
                />
                <button
                  type="button"
                  onClick={applyPromo}
                  className="px-3 py-1.5 rounded-lg bg-[#12251c] hover:bg-[#b8e938] hover:text-[#07140e] text-xs font-bold text-white transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>

            {/* Submit Action */}
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#b8e938] hover:bg-[#ccff00] text-[#07140e] font-extrabold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(184,233,56,0.4)] active:scale-98"
            >
              <span>Complete Demo Purchase · ${finalTotal.toFixed(2)}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </form>
        ) : (
          /* Order Confirmation Success Screen */
          <div className="p-8 sm:p-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#12251c] border border-[#b8e938]/40 flex items-center justify-center text-[#b8e938] mb-6 shadow-[0_0_30px_rgba(184,233,56,0.4)] animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12251c] text-[#4ade80] text-[11px] font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Purchase Staged Successfully</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              Thank You, {formData.fullName}!
            </h3>

            <p className="text-xs sm:text-sm text-[#9cb3a5] max-w-md mb-6 leading-relaxed">
              Your flagship ODDA order has been received. A demo dispatch notification and tracking telemetry key have been registered for <strong className="text-white">{formData.email}</strong>.
            </p>

            <div className="w-full max-w-md p-4 rounded-2xl bg-[#07140e] border border-white/5 text-left text-xs space-y-2 mb-8">
              <div className="flex justify-between">
                <span className="text-[#728579]">Order Number:</span>
                <span className="font-mono font-bold text-white">{orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#728579]">Delivery Window:</span>
                <span className="font-semibold text-[#4ade80]">2-3 Business Days (Expedited)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#728579]">Amount Paid:</span>
                <span className="font-bold text-[#b8e938]">${finalTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#728579]">Shipping To:</span>
                <span className="text-white truncate">{formData.address}, {formData.city}</span>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="px-8 py-3.5 rounded-full bg-[#b8e938] hover:bg-[#ccff00] text-[#07140e] font-extrabold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(184,233,56,0.3)]"
            >
              Back to Showroom
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
