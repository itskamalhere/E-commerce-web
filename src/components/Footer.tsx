import React from 'react';
import { ArrowUp, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#050e0a] border-t border-white/[0.08] pt-16 pb-12 px-4 sm:px-6 lg:px-12 relative z-10 text-left">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/[0.06]">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="font-extrabold tracking-[0.25em] text-xl sm:text-2xl text-white">
                ODDAWURLD
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#b8e938] inline-block shadow-[0_0_8px_#b8e938]" />
            </div>

            <p className="text-sm text-[#9cb3a5] max-w-sm leading-relaxed mb-6">
              A bespoke digital showcase exploring next-generation consumer electronics through the lens of luxury dark-forest aesthetics and aerospace industrial craft.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: <Twitter className="w-4 h-4" />, label: 'Twitter / X', href: 'https://twitter.com' },
                { icon: <Instagram className="w-4 h-4" />, label: 'Instagram', href: 'https://instagram.com' },
                { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn', href: 'https://linkedin.com' },
                { icon: <Github className="w-4 h-4" />, label: 'GitHub Repository', href: 'https://github.com' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-[#12251c] hover:bg-[#b8e938] text-[#9cb3a5] hover:text-[#07140e] border border-white/10 hover:border-[#b8e938] flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links Column */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#b8e938] mb-4">
              Collections
            </div>
            <ul className="space-y-2.5 text-sm text-[#9cb3a5]">
              <li>
                <a href="#products" className="hover:text-white hover:underline transition-colors">
                  Apex Headphones
                </a>
              </li>
              <li>
                <a href="#new-arrival" className="hover:text-white hover:underline transition-colors">
                  Vortex Pods Earbuds
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white hover:underline transition-colors">
                  Chrono-Matrix Watch
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white hover:underline transition-colors">
                  Horizon 1 Smartphone
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white hover:underline transition-colors">
                  Vanguard Controller
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care Column */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#b8e938] mb-4">
              Support & Care
            </div>
            <ul className="space-y-2.5 text-sm text-[#9cb3a5]">
              <li>
                <button onClick={() => alert('ODDA Concierge Support: Contact support@oddawurld.demo')} className="hover:text-white transition-colors text-left">
                  Hardware Concierge
                </button>
              </li>
              <li>
                <button onClick={() => alert('Warranty: 1-Year Comprehensive Replacement Guarantee included.')} className="hover:text-white transition-colors text-left">
                  1-Year Warranty
                </button>
              </li>
              <li>
                <button onClick={() => alert('Shipping: Free expedited shipping worldwide on all orders above $50.')} className="hover:text-white transition-colors text-left">
                  Shipping Policies
                </button>
              </li>
              <li>
                <button onClick={() => alert('Returns: 30-day trial period with complimentary pre-paid return labels.')} className="hover:text-white transition-colors text-left">
                  Returns & Exchange
                </button>
              </li>
              <li>
                <button onClick={() => alert('Firmware updates available via ODDA Connect Companion App.')} className="hover:text-white transition-colors text-left">
                  Firmware Drivers
                </button>
              </li>
            </ul>
          </div>

          {/* Flagship Showroom Column */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#b8e938] mb-4">
              Showrooms
            </div>
            <ul className="space-y-2.5 text-sm text-[#9cb3a5]">
              <li>
                <span className="text-white block font-medium">Tokyo Flagship</span>
                <span className="text-xs text-[#728579]">Ginza Tech Atelier</span>
              </li>
              <li className="pt-2">
                <span className="text-white block font-medium">Stockholm Studio</span>
                <span className="text-xs text-[#728579]">Östermalm Sound Lab</span>
              </li>
              <li className="pt-2">
                <span className="text-white block font-medium">San Francisco</span>
                <span className="text-xs text-[#728579]">Market Design Pavilion</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#728579]">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {currentYear} ODDAWURLD Inc. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Privacy: No personal data is tracked or sold.'); }} className="hover:text-[#9cb3a5]">
              Privacy Policy
            </a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert('Terms: Frontend e-commerce demo showcase.'); }} className="hover:text-[#9cb3a5]">
              Terms of Service
            </a>
            <a href="#security" onClick={(e) => { e.preventDefault(); alert('Security: TLS 1.3 End-to-end encrypted frontend.'); }} className="hover:text-[#9cb3a5]">
              Security
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="flex items-center gap-2 text-xs font-bold text-white hover:text-[#b8e938] transition-colors p-2 rounded-lg bg-white/5 hover:bg-white/10"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#b8e938]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
