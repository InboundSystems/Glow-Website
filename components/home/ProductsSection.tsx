"use client";

import { useState } from "react";
import Image from "next/image";

type Category = "All" | "Mask" | "Creams" | "Others";

const products = [
  { name: "Green Serum",         category: "Creams", price: 45.0,  inStock: true  },
  { name: "Mask 1",              category: "Mask",   price: 25.0,  inStock: false },
  { name: "Steam Eye Mask",      category: "Mask",   price: 15.0,  inStock: true  },
  { name: "Steam Eye Mask Pack", category: "Mask",   price: 28.0,  inStock: true  },
  { name: "Kinesiology Tape",    category: "Others", price: 20.0,  inStock: true  },
] as const;

const tabs: Category[] = ["All", "Mask", "Creams", "Others"];

export default function ProductsSection() {
  const [active, setActive] = useState<Category>("All");

  const visible = active === "All"
    ? products
    : products.filter((p) => p.category === active);

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="font-script text-[2.5rem] font-semibold text-plum text-center mb-6">
          Products available in clinic
        </h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-2 rounded-[50px] text-sm font-medium border-2 transition-colors ${
                active === tab
                  ? "bg-plum border-plum text-white"
                  : "bg-white border-plum text-plum hover:bg-plum hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((product) => (
            <div
              key={product.name}
              className="rounded-2xl border border-border-brand bg-white overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-square bg-gray-100">
                {/* TODO: replace with real product images */}
                <Image
                  src={`https://placehold.co/300x300/e8d5f5/8800CC?text=${encodeURIComponent(product.name)}`}
                  alt={product.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
                {!product.inStock && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <span className="bg-white text-plum font-bold text-sm px-4 py-1.5 rounded-full">
                      Out Of Stock
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="font-bold text-text-dark text-sm">{product.name}</p>
                <p className="text-text-muted text-sm mt-1">
                  Price: ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
