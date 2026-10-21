import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext';

export const Toast: React.FC = () => {
  const { toastMessage } = useCartWishlist();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none animate-bounce">
      <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#0d2218]/95 backdrop-blur-md border border-[#b8e938]/40 shadow-[0_10px_35px_rgba(0,0,0,0.8)] text-white">
        <div className="w-6 h-6 rounded-full bg-[#b8e938] text-[#07140e] flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-4 h-4 stroke-[3]" />
        </div>
        <span className="text-xs font-bold tracking-wide">{toastMessage}</span>
      </div>
    </div>
  );
};
