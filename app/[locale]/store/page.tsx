
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { DigitalProductCard } from "@/components/digital-product-card";
import { digitalProducts } from "@/lib/digital-products";

export default async function StorePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "ar") return null;

  return (
    <div dir="rtl" className="min-h-screen bg-[#f8f7f2] text-[#202119]">
      <SiteHeader locale={locale} />

      <main>
        <section className="mx-auto max-w-[1440px] px-5 pb-10 pt-10 sm:px-8 sm:pb-16 sm:pt-16 lg:px-12 lg:pt-20">
          <Link
            href="/ar"
            className="mb-10 inline-flex items-center gap-2 text-xs text-[#77786e] hover:text-[#737c60]"
          >
            <ArrowRight size={15} />
            العودة للرئيسية
          </Link>

          <p className="text-[10px] tracking-[0.22em] text-[#777b6d]">
            SOVA DIGITAL STORE
          </p>

          <div className="mt-4 flex flex-col justify-between gap-5 border-b border-[#e4e3db] pb-8 sm:flex-row sm:items-end">
            <h1 className="max-w-3xl text-4xl font-light leading-tight tracking-[-0.055em] sm:text-6xl">
              أدوات رقمية
              <br />
              <span className="text-[#858777]">للعمل الإبداعي.</span>
            </h1>

            <p className="max-w-sm text-sm leading-7 text-[#77786e]">
              قوالب وأنظمة تصميم وأدوات عملية تساعدك على بناء مشاريعك
              بخطوات أوضح.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between text-xs text-[#77786e]">
            <span>مجموعة SOVA</span>
            <span>{digitalProducts.length} منتجاً</span>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
            {digitalProducts.map((product) => (
              <DigitalProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
