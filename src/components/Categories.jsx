import React from 'react';
import { Shirt, Watch, Camera, Laptop, Smartphone, Headphones } from 'lucide-react';

const iconMap = {
  All: Shirt,
  Apparel: Shirt,
  Watches: Watch,
  Cameras: Camera,
  Laptops: Laptop,
  Phones: Smartphone,
  Audio: Headphones,
};

const Categories = ({ categories, selected, onSelect }) => {
  return (
    <div className="w-full">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Browse by category</h2>
        {selected && (
          <button
            onClick={() => onSelect('All')}
            className="text-sm text-neutral-600 underline hover:text-neutral-900"
          >
            Reset
          </button>
        )}
      </div>
      <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 py-1">
        {categories.map((cat) => {
          const Icon = iconMap[cat] || Shirt;
          const isActive = selected === cat || (cat === 'All' && (selected === 'All' || !selected));
          return (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={`group inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm transition ${
                isActive
                  ? 'border-neutral-900 bg-neutral-900 text-white'
                  : 'border-neutral-200 bg-white text-neutral-800 hover:border-neutral-300'
              }`}
            >
              <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-neutral-600 group-hover:text-neutral-800'}`} />
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
