
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpLeft, Check, Download, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductGallery } from "@/components/product-gallery";
import { DigitalProductCard } from "@/components/digital-product-card";
import { digitalProducts, formatEGP } from "@/lib/digital-products";

export function generateStaticParams() {
  return digitalProducts.map((product) => ({
    locale: "ar",
    slug: product.slug,
  }));
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (locale !== "ar") return null;

  const product = digitalProducts.find((item) => item.slug === slug);

  if (!product) notFound();

  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(
          ((product.oldPrice - product.price) / product.oldPrice) * 100,
        )
      : null;

  const relatedProducts = digitalProducts
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  return (
    <div dir="rtl" className="min-h-screen bg-[#f8f7f2] text-[#202119]">
      <SiteHeader locale={locale} />

      <main>
        <div className="mx-auto max-w-[1440px] px-5 pt-7 sm:px-8 lg:px-12">
          <nav className="flex flex-wrap items-center gap-2 text-xs text-[#858577]">
            <Link href="/ar" className="transition-colors hover:text-[#737c60]">
              الرئيسية
            </Link>
            <span>/</span>
            <Link href="/ar/store" className="transition-colors hover:text-[#737c60]">
              المتجر
            </Link>
            <span>/</span>
            <span className="text-[#37382f]">{product.title}</span>
          </nav>
        </div>

        <section className="mx-auto max-w-[1440px] px-5 pb-16 pt-7 sm:px-8 sm:pb-24 lg:px-12 lg:pt-10">
          <div
            dir="ltr"
            className="grid gap-9 lg:grid-cols-[1.08fr_0.82fr] lg:gap-16"
          >
            {/* معرض الصور - اليسار */}
            <div className="min-w-0">
              <ProductGallery
                images={product.gallery}
                title={product.title}
              />

              <div className="mt-4 flex items-center justify-between border-b border-[#e4e3db] pb-3 text-[10px] tracking-wide text-[#858577]">
                <span>DESIGNED FOR CREATIVE WORK</span>
                <span>SOVA / DIGITAL</span>
              </div>
            </div>

            {/* معلومات المنتج - اليمين */}
            <div dir="rtl" className="flex min-w-0 flex-col lg:pt-2">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] tracking-[0.2em] text-[#737c60]">
                  {product.category}
                </span>

                {discount && (
                  <span className="bg-[#737c60] px-3 py-1.5 text-[10px] text-white">
                    خصم {discount}%
                  </span>
                )}
              </div>

              <h1 className="mt-5 text-3xl font-light leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                {product.title}
              </h1>

              <p className="mt-4 text-sm leading-7 text-[#77786e]">
                {product.subtitle}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="text-2xl font-medium tracking-tight">
                  {formatEGP(product.price)}
                </span>

                {product.oldPrice && (
                  <span className="text-sm text-[#99998f] line-through">
                    {formatEGP(product.oldPrice)}
                  </span>
                )}
              </div>

              <p className="mt-6 border-t border-[#e4e3db] pt-5 text-sm leading-8 text-[#64665b]">
                {product.description}
              </p>

              <div className="mt-6 space-y-4 border-b border-[#e4e3db] pb-6">
                <div className="flex items-center gap-3 text-sm">
                  <Download size={17} strokeWidth={1.4} className="text-[#737c60]" />
                  <span>منتج رقمي — التسليم حسب آلية الشراء المعتمدة</span>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <ShieldCheck size={17} strokeWidth={1.4} className="text-[#737c60]" />
                  <span>تفاصيل الملفات ومتطلبات الاستخدام موضحة أدناه</span>
                </div>
              </div>

              <div className="mt-7">
                <h2 className="text-sm font-medium">ماذا يتضمن المنتج؟</h2>

                <ul className="mt-4 space-y-3">
                  {product.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-[#64665b]"
                    >
                      <Check
                        size={16}
                        strokeWidth={1.5}
                        className="mt-1 shrink-0 text-[#737c60]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 border border-[#e4e3db] bg-white/50 p-4">
                <p className="text-[10px] tracking-[0.15em] text-[#858577]">
                  COMPATIBILITY
                </p>
                <p className="mt-2 text-sm">{product.compatibility}</p>
              </div>

              {/* زر توضيحي لحين ربط الدفع */}
              <a
                href={`mailto:hello@yourname.design?subject=${encodeURIComponent(
                  `استفسار عن المنتج: ${product.title}`,
                )}`}
                className="mt-7 flex min-h-14 items-center justify-between gap-4 bg-[#737c60] px-5 text-sm text-white transition-colors hover:bg-[#626b51]"
              >
                <span>استفسر عن المنتج</span>
                <ArrowUpLeft size={19} strokeWidth={1.4} />
              </a>

              <p className="mt-3 text-center text-[11px] leading-5 text-[#858577]">
                الدفع والتحميل المباشر سيتم تفعليهما بعد ربط بوابة الدفع ونظام تسليم الملفات.
              </p>
            </div>
          </div>
        </section>

        {/* تفاصيل إضافية */}
        <section className="border-y border-[#e4e3db] bg-[#f1f0e9]">
          <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-20">
            <div>
              <p className="text-[10px] tracking-[0.2em] text-[#777b6d]">
                ABOUT THIS PRODUCT
              </p>
              <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
                صُمم ليجعل العمل أوضح.
              </h2>
            </div>

            <div className="text-sm leading-8 text-[#64665b]">
              {product.description}
              <p className="mt-4">
                راجع قائمة الملفات والتوافق قبل الشراء. ستُحدّث معلومات
                المنتج وفقاً للملفات النهائية التي سيتم توفيرها.
              </p>
            </div>
          </div>
        </section>

        {/* منتجات مشابهة */}
        <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] tracking-[0.2em] text-[#777b6d]">
                KEEP EXPLORING
              </p>
              <h2 className="mt-3 text-3xl font-light tracking-tight sm:text-4xl">
                منتجات قد تعجبك.
              </h2>
            </div>

            <Link
              href="/ar/store"
              className="hidden items-center gap-2 text-sm text-[#64665b] hover:text-[#737c60] sm:inline-flex"
            >
              كل المنتجات
              <ArrowLeft size={16} />
            </Link>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-3 sm:gap-x-6 lg:gap-x-8">
            {relatedProducts.map((item) => (
              <DigitalProductCard key={item.slug} product={item} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
