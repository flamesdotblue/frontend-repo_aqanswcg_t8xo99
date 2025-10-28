import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="line-clamp-1 text-sm font-medium text-neutral-900">{product.name}</h3>
          <span className="shrink-0 rounded-full bg-neutral-100 px-2 py-1 text-xs font-semibold text-neutral-900">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <p className="mt-1 line-clamp-2 text-sm text-neutral-600">{product.description}</p>
        <button className="mt-3 w-full rounded-lg bg-neutral-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800">
          Add to cart
        </button>
      </div>
    </motion.div>
  );
};

const FeaturedProducts = ({ products }) => {
  if (!products?.length) return null;
  return (
    <section className="">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Featured products</h2>
        <a href="#catalog" className="text-sm text-neutral-700 hover:text-neutral-900">
          View all
        </a>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
