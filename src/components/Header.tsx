import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, User, Home, Menu, X, ChevronRight } from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext';

export const Header: React.FC = () => {
  const { cartCount, wishlist, setIsCartOpen, setIsWishlistOpen } = useCartWishlist();
  const [activeNav, setActiveNav] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero', hasHomeIcon: true },
    { label: 'Shop', href: '#products' },
    { label: 'New Arrivals', href: '#new-arrival' },
    { label: 'Collections', href: '#categories' },
    { label: 'About', href: '#brand-story' },
    { label: 'Contact', href: '#footer' },
  ];

  const handleNavClick = (label: string, href: string) => {
    setActiveNav(label);
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out px-4 sm:px-6 lg:px-12 py-3.5 sm:py-5 ${
          isScrolled
            ? 'bg-[#07140e]/85 backdrop-blur-md border-b border-white/[0.06] shadow-xl shadow-black/40'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('Home', '#hero');
            }}
            className="group flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b8e938] rounded-md"
            aria-label="ODDAWURLD Home"
          >
            <span className="font-extrabold tracking-[0.25em] text-lg sm:text-xl lg:text-2xl text-white group-hover:text-[#b8e938] transition-colors duration-200">
              ODDAWURLD
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#b8e938] inline-block shadow-[0_0_8px_#b8e938] group-hover:scale-125 transition-transform" />
          </a>

          {/* Center Floating White Rounded-Pill Navigation Container (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 bg-white/[0.96] backdrop-blur-xl px-2 py-1.5 rounded-full shadow-[0_10px_35px_-5px_rgba(0,0,0,0.5)] border border-white/20"
          >
            {navItems.map((item) => {
              const isActive = activeNav === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.label, item.href)}
                  className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#07140e] ${
                    isActive
                      ? 'bg-[#07140e] text-white shadow-sm'
                      : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100/80'
                  }`}
                >
                  {item.hasHomeIcon && isActive && (
                    <Home className="w-3.5 h-3.5 text-[#b8e938]" strokeWidth={2.5} />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Utility Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              aria-label={`Wishlist (${wishlist.length} saved items)`}
              className="relative w-10 h-10 rounded-full bg-[#12251c] hover:bg-[#162e23] border border-white/10 hover:border-[#b8e938]/40 flex items-center justify-center text-white transition-all duration-200 hover:scale-105 active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b8e938]"
            >
              <Heart className="w-4 h-4 text-[#9cb3a5] group-hover:text-[#b8e938] transition-colors" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#4ade80] text-[#07140e] text-[10px] font-bold flex items-center justify-center shadow-sm">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Bag Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label={`Shopping bag (${cartCount} items)`}
              className="relative w-10 h-10 rounded-full bg-[#12251c] hover:bg-[#162e23] border border-white/10 hover:border-[#b8e938]/50 flex items-center justify-center text-white transition-all duration-200 hover:scale-105 active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b8e938]"
            >
              <ShoppingBag className="w-4 h-4 text-white group-hover:text-[#b8e938] transition-colors" />
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-[#b8e938] text-[#07140e] text-[10px] font-extrabold flex items-center justify-center shadow-[0_0_10px_rgba(184,233,56,0.6)]">
                {cartCount}
              </span>
            </button>

            {/* User Profile Button */}
            <button
              onClick={() => alert('ODDA Club VIP Profile: Frontend Demo Mode. Authenticated as Guest.')}
              aria-label="User Account"
              className="w-10 h-10 rounded-full bg-[#12251c] hover:bg-[#162e23] border border-white/10 hover:border-[#b8e938]/40 hidden sm:flex items-center justify-center text-white transition-all duration-200 hover:scale-105 active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b8e938]"
            >
              <User className="w-4 h-4 text-[#9cb3a5] group-hover:text-white transition-colors" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden w-10 h-10 rounded-full bg-[#12251c] border border-white/10 flex items-center justify-center text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b8e938]"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-[#b8e938]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-[#07140e]/95 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-8 animate-fadeIn">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#728579] px-3 mb-2">
              Menu Navigation
            </span>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.label, item.href)}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  activeNav === item.label
                    ? 'bg-[#12251c] text-[#b8e938] border border-[#b8e938]/25'
                    : 'text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.hasHomeIcon && <Home className="w-4 h-4" />}
                  <span>{item.label}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#728579]" />
              </button>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-[#9cb3a5]">
              <span>Demo Flagship Experience</span>
              <span className="text-[#b8e938] font-bold">ODDAWURLD 2026</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
