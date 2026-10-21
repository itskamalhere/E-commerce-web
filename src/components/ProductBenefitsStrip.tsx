import React from 'react';
import { ShieldCheck, Lock, Headphones, RefreshCw } from 'lucide-react';

export const ProductBenefitsStrip: React.FC = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#b8e938]" />,
      title: 'Quality-First Products',
      description: 'Tested against aerospace shock & thermal limits',
    },
    {
      icon: <Lock className="w-5 h-5 text-[#b8e938]" />,
      title: 'Secure Checkout',
      description: 'End-to-end encrypted frontend demo payments',
    },
    {
      icon: <Headphones className="w-5 h-5 text-[#b8e938]" />,
      title: 'Reliable Support',
      description: '24/7 hardware concierge & calibration guide',
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-[#b8e938]" />,
      title: '30-Day Evaluation',
      description: 'Zero-risk trial with complimentary return labels',
    },
  ];

  return (
    <section className="py-12 border-y border-white/[0.06] bg-[#091a13]/60 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3.5 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]"
          >
            <div className="w-10 h-10 rounded-lg bg-[#12251c] flex items-center justify-center shrink-0 border border-white/5 shadow-sm">
              {item.icon}
            </div>
            <div>
              <div className="text-sm font-bold text-white mb-0.5">{item.title}</div>
              <div className="text-xs text-[#728579] leading-snug">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
