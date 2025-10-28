import React from 'react';
import { Search } from 'lucide-react';

const ProductGrid = ({ products, search, onSearch }) => {
  return (
    <section id="catalog" className="">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold">All products</h2>
        <div className="relative w-full max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
          <input
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-lg border border-neutral-200 bg-white px-9 py-2 text-sm outline-none ring-neutral-300 placeholder:text-neutral-500 focus:ring"
          />
        </div>
      </div>

      {products.length === 0 ? (
        <div className="rounded-lg border border-dashed border-neutral-300 p-10 text-center text-neutral-600">
          No products found.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <div key={p.id} className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <img src={p.imageUrl} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="line-clamp-1 text-sm font-medium text-neutral-900">{p.name}</h3>
                  <span className="shrink-0 rounded-full bg-neutral-100 px-2 py-1 text-xs font-semibold text-neutral-900">${p.price.toFixed(2)}</span>
                </div>
                <p className="mt-1 line-clamp-2 text-sm text-neutral-600">{p.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-neutral-500">{p.category}</span>
                  <button className="rounded-lg bg-neutral-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
