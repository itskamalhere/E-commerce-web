import React from 'react';
import { CartWishlistProvider } from './context/CartWishlistContext';
import { BotanicalShadows } from './components/BotanicalShadows';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CategoryGrid } from './components/CategoryGrid';
import { NewArrivalBanner } from './components/NewArrivalBanner';
import { ProductGrid } from './components/ProductGrid';
import { Product3DExploration } from './components/Product3DExploration';
import { BrandStory } from './components/BrandStory';
import { ProductBenefitsStrip } from './components/ProductBenefitsStrip';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { VideoModal } from './components/VideoModal';
import { CheckoutModal } from './components/CheckoutModal';
import { Toast } from './components/Toast';

export function App() {
  return (
    <CartWishlistProvider>
      <div className="relative min-h-screen bg-[#07140e] text-white overflow-x-hidden selection:bg-[#b8e938] selection:text-[#07140e]">
        {/* Layered Botanical Studio Shadows & Ambient Lighting */}
        <BotanicalShadows />

        {/* Floating Luxury Navigation Header */}
        <Header />

        {/* Main Content Layout */}
        <main className="relative z-10 flex flex-col">
          {/* Hero Section with Interactive 3D WebGL Showcase */}
          <HeroSection />

          {/* Shop By Category Grid */}
          <CategoryGrid />

          {/* New Arrival Banner: Earbuds Showcase */}
          <NewArrivalBanner />

          {/* Featured Hardware Catalog */}
          <ProductGrid />

          {/* 3D Product Exploration Section: "Technology You Can Feel" */}
          <Product3DExploration />

          {/* Brand Editorial Philosophy */}
          <BrandStory />

          {/* Assurance and Product Benefits Strip */}
          <ProductBenefitsStrip />

          {/* Community & Newsletter Subscription */}
          <NewsletterSection />
        </main>

        {/* Global Luxury Footer */}
        <Footer />

        {/* Drawers and Modals */}
        <CartDrawer />
        <WishlistDrawer />
        <ProductQuickViewModal />
        <VideoModal />
        <CheckoutModal />
        <Toast />
      </div>
    </CartWishlistProvider>
  );
}

export default App;
