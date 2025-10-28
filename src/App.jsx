import React, { useMemo, useRef, useState } from 'react';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import ProductGrid from './components/ProductGrid';

const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Minimalist Cotton Tee',
    price: 29.99,
    category: 'Apparel',
    description: 'Soft, breathable, and built for everyday comfort with a clean silhouette.',
    imageUrl:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1640&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '2',
    name: 'Chrono Steel Watch',
    price: 219.0,
    category: 'Watches',
    description: 'Precision timekeeping in a brushed steel case with sapphire crystal.',
    imageUrl:
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1640&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '3',
    name: 'Focus Pro Camera',
    price: 949.0,
    category: 'Cameras',
    description: 'Capture stunning photos with a fast lens and advanced sensor technology.',
    imageUrl:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1640&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '4',
    name: 'Lightbook Air 13"',
    price: 1299.0,
    category: 'Laptops',
    description: 'Ultra-portable performance with all-day battery life and a bright display.',
    imageUrl:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1640&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '5',
    name: 'Noise Canceling Headphones',
    price: 299.0,
    category: 'Audio',
    description: 'Immersive sound with adaptive noise cancellation and long battery life.',
    imageUrl:
      'https://images.unsplash.com/photo-1518443895914-6f7f57e42e83?q=80&w=1640&auto=format&fit=crop',
    featured: false,
  },
  {
    id: '6',
    name: 'Smartphone X',
    price: 899.0,
    category: 'Phones',
    description: 'Edge-to-edge display with powerful performance and pro-grade camera.',
    imageUrl:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1640&auto=format&fit=crop',
    featured: false,
  },
  {
    id: '7',
    name: 'Compact Mirrorless Cam',
    price: 699.0,
    category: 'Cameras',
    description: 'Lightweight body with interchangeable lenses and 4K video.',
    imageUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1640&auto=format&fit=crop',
    featured: false,
  },
  {
    id: '8',
    name: 'Performance Hoodie',
    price: 59.0,
    category: 'Apparel',
    description: 'Moisture-wicking fleece with a relaxed fit for training or travel.',
    imageUrl:
      'https://images.unsplash.com/photo-1520975922284-9d1530b3f595?q=80&w=1640&auto=format&fit=crop',
    featured: false,
  },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const catalogRef = useRef(null);

  const categories = useMemo(() => ['All', 'Apparel', 'Watches', 'Cameras', 'Laptops', 'Phones', 'Audio'], []);

  const featured = useMemo(() => MOCK_PRODUCTS.filter((p) => p.featured).slice(0, 4), []);

  const filteredProducts = useMemo(() => {
    let list = [...MOCK_PRODUCTS];
    if (selectedCategory && selectedCategory !== 'All') {
      list = list.filter((p) => p.category === selectedCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }
    return list;
  }, [selectedCategory, search]);

  const handleShopNow = () => {
    const el = document.querySelector('#catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-neutral-900" />
            <span className="text-sm font-semibold">E-Luxe</span>
          </div>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a className="text-neutral-600 hover:text-neutral-900" href="#">Home</a>
            <a className="text-neutral-600 hover:text-neutral-900" href="#catalog">Shop</a>
            <a className="text-neutral-600 hover:text-neutral-900" href="#">About</a>
          </nav>
          <button className="rounded-full border border-neutral-300 px-3 py-1.5 text-sm font-medium hover:bg-neutral-100">
            Cart (0)
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-12 px-6 py-8">
        <Hero onShopNow={handleShopNow} />

        <Categories
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <FeaturedProducts products={featured} />

        <ProductGrid
          ref={catalogRef}
          products={filteredProducts}
          search={search}
          onSearch={setSearch}
        />
      </main>

      <footer className="mt-16 border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} E-Luxe. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-neutral-600">
            <a href="#" className="hover:text-neutral-900">Privacy</a>
            <a href="#" className="hover:text-neutral-900">Terms</a>
            <a href="#" className="hover:text-neutral-900">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
