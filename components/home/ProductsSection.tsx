"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

type Category = "All" | "Mask" | "Others";

const products: {
  name: string;
  category: Category;
  price: number;
  inStock: boolean;
  note?: string;
}[] = [
  {
    name: "Self Warming Eye Mask",
    category: "Mask",
    price: 5.0,
    inStock: true,
    note: "Available in Unscented, Lavender & Chamomile",
  },
  {
    name: "GIW Muscle Balm",
    category: "Others",
    price: 25.0,
    inStock: true,
    note: "Made in-house — clients love it for pain relief",
  },
  {
    name: "Rocktape Kinesiology Tape",
    category: "Others",
    price: 20.0,
    inStock: true,
  },
  {
    name: "The Patch Remedy Vitamin Patches",
    category: "Others",
    price: 30.0,
    inStock: true,
    note: "Limited stock — select packs available",
  },
  {
    name: "Recovery Tools Cupping Set",
    category: "Others",
    price: 50.0,
    inStock: true,
  },
];

const tabs: Category[] = ["All", "Mask", "Others"];

export default function ProductsSection() {
  const [active, setActive] = useState<Category>("All");

  const visible = active === "All"
    ? products
    : products.filter((p) => p.category === active);

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn className="text-center mb-6">
          <p className="text-xs font-medium text-plum uppercase tracking-widest mb-3">Take home</p>
          <h2 className="font-script text-[2.5rem] font-semibold text-plum">
            Products available in clinic
          </h2>
        </FadeIn>

        <FadeIn delay={0.05} className="mb-10">
          <div className="relative w-full aspect-[16/6] rounded-2xl overflow-hidden">
            <Image
              src="/clinic-products-shelf.jpg"
              alt="Products available at Glow in Wellness clinic"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1280px) 100vw, 1152px"
            />
          </div>
        </FadeIn>

        {/* Filter tabs */}
        <FadeIn delay={0.1} className="flex flex-wrap justify-center gap-3 mb-10">
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
        </FadeIn>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((product, i) => (
            <FadeIn key={product.name} delay={i * 0.1}>
            <div
              className="rounded-2xl border border-border-brand bg-white overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 h-full"
            >
              {/* Image placeholder — TODO: replace with real product photos once provided */}
              <div className="relative aspect-square bg-gray-100">
                <Image
                  src={`https://placehold.co/300x300/f5f0ff/8800CC?text=${encodeURIComponent(product.name)}`}
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
                {product.note && (
                  <p className="text-xs text-text-muted mt-0.5">{product.note}</p>
                )}
                <p className="text-text-muted text-sm mt-1">
                  Price: ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
