"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "./cart-context";
export function ProductDetail({ slug }: { slug: string }) {
  const data = {
    "orbit-ui-kit": ["مجموعة أوربت للواجهات", 48, "/images/product-orbit.png"],
    "folio-starter": ["فوليو ستارتر", 79, "/images/project-arc.png"],
    "commerce-blocks": ["كتل التجارة", 36, "/images/project-north.png"],
  }[slug] ?? ["منتج رقمي", 0, "/images/product-orbit.png"];
  const [added, setAdded] = useState(false);
  const { add } = useCart();
  return (
    <main className="mx-auto max-w-[1440px] px-5 pb-24 pt-20 sm:px-8 lg:px-12 lg:pt-36">
      <Link href="/ar/store" className="text-xs text-[#777770]">
        ← العودة إلى المتجر
      </Link>
      <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-square bg-[#f5f6ef]">
          <Image
            src={data[2] as string}
            alt={data[0] as string}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-[10px] tracking-[0.2em] text-[#777770]">
            منتج رقمي
          </p>
          <h1 className="mt-5 text-5xl font-light tracking-[-0.06em] sm:text-7xl">
            {data[0]}
          </h1>
          <p className="mt-8 max-w-md leading-8 text-[#5d5d57]">
            نظام مدروس يساعدك على بناء واجهات واضحة وسريعة، مع كل ما تحتاجه
            للبدء بثقة.
          </p>
          <p className="mt-8 text-2xl">{data[1]} دولار</p>
          <button
            type="button"
            onClick={() => {
              add({
                slug,
                title: data[0] as string,
                price: data[1] as number,
                image: data[2] as string,
              });
              setAdded(true);
            }}
            className="mt-8 bg-[#2d63e8] px-8 py-4 text-sm text-white"
          >
            {added ? "أضيفت إلى السلة" : "أضف إلى السلة"}
          </button>
        </div>
      </div>
    </main>
  );
}
