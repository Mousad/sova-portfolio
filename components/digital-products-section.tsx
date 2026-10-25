
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { digitalProducts } from "@/lib/digital-products";
import { DigitalProductCard } from "@/components/digital-product-card";

export function DigitalProductsSection() {
  return (
    <section
      dir="rtl"
      className="overflow-hidden border-y border-[#deded8] bg-[#fefefe]"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        {/* Section heading */}
        <div className="flex items-end justify-between gap-4">
        
<div className="flex flex-col items-center justify-center text-center">
  <p className="mb-4 text-[10px] tracking-[0.25em] text-[#737c60]">
    SOVA DIGITAL STORE
  </p>

  <h2 className="max-w-2xl text-3xl font-light leading-tight tracking-[-0.055em] sm:text-5xl lg:text-6xl">
    اكتشف منتجاتنا الرقمية.
  </h2>

  <p className="mt-4 max-w-lg text-sm leading-7 text-[#777770] sm:text-base">
    قوالب وأدوات رقمية مختارة بعناية لتصميم أفضل، وتطوير أسرع، ونتائج أكثر احترافية.
  </p>

 
</div>


          <Link
            href="/ar/store"
            className="hidden shrink-0 items-center gap-2 text-sm text-[#34372d] transition-colors hover:text-[#737c60] sm:inline-flex"
          >
            كل المنتجات
            <ArrowLeft size={16} strokeWidth={1.5} />
          </Link>
        </div>

        {/* Products carousel on mobile */}
        <div className="-mx-5 mt-9 px-5 sm:mx-0 sm:px-0">
          <div
            className="
              flex snap-x snap-mandatory gap-4
              overflow-x-auto overscroll-x-contain pb-5
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              sm:grid sm:grid-cols-2 sm:gap-6
              sm:overflow-visible sm:pb-0
              lg:grid-cols-3 lg:gap-8
            "
          >
            {digitalProducts.slice(0, 12).map((product) => (
              <div
                key={product.slug}
                className="w-[82%] min-w-0 shrink-0 snap-start sm:w-auto sm:shrink"
              >
                <DigitalProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile footer */}
       
      </div>
    </section>
  );
}
