"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

type Category = "All" | "Mask" | "Others";

const products: {
  name: string;
  category: Category;
  note?: string;
  image: string;
}[] = [
  {
    name: "Self Warming Eye Mask",
    category: "Mask",
    note: "Available in Unscented, Lavender & Chamomile",
    image: "/products/steam-eye-mask.png",
  },
  {
    name: "GIW Muscle Balm",
    category: "Others",
    note: "Made in-house — a client favourite",
    image: "/products/giw-muscle-balm.png",
  },
  {
    name: "Rocktape Kinesiology Tape",
    category: "Others",
    image: "/products/rocktape.png",
  },
  {
    name: "The Patch Remedy Vitamin Patches",
    category: "Others",
    image: "/products/patch-remedy.png",
  },
  {
    name: "Recovery Tools Cupping Set",
    category: "Others",
    image: "/products/recovery-tools-cupping-set.png",
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
          <p className="text-xs font-medium text-plum uppercase tracking-widest mb-3">In the clinic</p>
          <h2 className="font-script text-[2.5rem] font-semibold text-plum">
            Items You&apos;ll Find at the Clinic
          </h2>
          <p className="text-text-muted max-w-xl mx-auto mt-3 leading-relaxed text-sm">
            A few extras Gloria keeps on hand in the treatment room. Ask her about these in person
            during your appointment.
          </p>
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
              <div className="relative aspect-square bg-sage-light">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="font-bold text-text-dark text-sm">{product.name}</p>
                {product.note && (
                  <p className="text-xs text-text-muted mt-0.5">{product.note}</p>
                )}
              </div>
            </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
