
import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";
import { DigitalProduct, formatEGP } from "@/lib/digital-products";

export function DigitalProductCard({
  product,
}: {
  product: DigitalProduct;
}) {
  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(
          ((product.oldPrice - product.price) / product.oldPrice) * 100,
        )
      : null;

  return (
    <article className="group min-w-0">
      <Link
        href={`/ar/store/${product.slug}`}
        aria-label={`عرض ${product.title}`}
        className="block"
      >
        <div className="relative aspect-[4/3.4] overflow-hidden bg-[#f1f0e9]">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 340px) 80vw, (max-width: 1024px) 45vw, 30vw"
            className="object- transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/[0.10] via-transparent to-white/[0.08]" />

        

          {product.featured && (
            <span className="absolute left-3 top-3 border border-white/70 bg-[#f8f7f1]/90 px-3 py-1.5 text-[10px] text-[#34372d] backdrop-blur-sm">
              {product.featured}
            </span>
          )}

          <div className="absolute bottom-3 left-3 flex size-10 translate-y-2 items-center justify-center rounded-full bg-[#f8f7f1] text-[#27291f] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpLeft size={19} strokeWidth={1.4} />
          </div>
        </div>

        <div className="pt-4">
          <p className="text-[9px] tracking-[0.18em] text-[#858577]">
            {product.category}
          </p>

          <div className="mt-2 flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-base font-medium tracking-tight text-[#202119] transition-colors group-hover:text-[#737c60] sm:text-lg">
                {product.title}
              </h3>
              <p className="mt-1.5 text-xs leading-5 text-[#77786e]">
                {product.subtitle}
              </p>
            </div>

            <span className="shrink-0 pt-0.5 text-sm font-medium text-[#25261f]">
              {formatEGP(product.price)}
            </span>
          </div>

          {product.oldPrice && (
            <p className="mt-2 text-xs text-[#99998f] line-through">
              {formatEGP(product.oldPrice)}
            </p>
          )}

          
        </div>
      </Link>
    </article>
  );
}
