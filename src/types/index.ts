export interface Product {
  id: string;
  name: string;
  category: 'Audio' | 'Smartwatches' | 'Phones' | 'Accessories' | 'Gaming';
  tagline: string;
  price: number;
  originalPrice?: number;
  badge?: 'NEW' | 'BESTSELLER' | 'LIMITED' | 'FEATURED';
  rating: number;
  reviewsCount: number;
  image: string;
  galleryImages: string[];
  description: string;
  specs: { [key: string]: string };
  features: string[];
  inStock: boolean;
  color: string;
  availableColors: { name: string; hex: string }[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
  image: string;
  subtitle: string;
  tag: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export interface WishlistItem {
  product: Product;
  addedAt: string;
}
