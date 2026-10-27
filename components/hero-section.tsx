
"use client";

import { useEffect, useState } from "react";

const rotatingWords = [
  "مواقع استثنائية",
  "هويات مميزة",
  "تجارب ذكية",
  "منتجات رقمية",
];

export function HeroSection({ locale }: { locale: string }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisible(false);

      window.setTimeout(() => {
        setWordIndex((current) => (current + 1) % rotatingWords.length);
        setVisible(true);
      }, 450);
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  const localizedPath = (value: string) =>
    `/${locale}${value === "/" ? "" : value}`;

  return (
    <section
      dir="rtl"
      className="relative isolate overflow-hidden bg-background px-4 pb-16 pt-16 text-foreground transition-colors duration-300 sm:px-8 sm:pb-20 sm:pt-28 lg:px-12 lg:pb-24 lg:pt-32"
    >
      {/* إضاءة محيطية ناعمة أسفل الشعار */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-220px] h-[380px] w-[min(900px,120vw)] -translate-x-1/2 rounded-full bg-[#8D9B83]/[0.12] blur-[100px] transition-opacity duration-500 dark:bg-[#8D9B83]/[0.19]" />

        <div className="absolute left-1/2 top-[-90px] h-[220px] w-[min(560px,90vw)] -translate-x-1/2 rounded-full bg-[#8D9B83]/[0.07] blur-[80px] dark:bg-[#8D9B83]/[0.12]" />
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-col items-center text-center">
        <p className="mb-8 flex items-center justify-center gap-3 text-[11px] tracking-wide text-muted-foreground sm:mb-10 sm:text-xs">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#8D9B83] opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-[#8D9B83]" />
          </span>
          تصميم مستقل، برؤية مختلفة
        </p>

        <h1 className="max-w-5xl text-[clamp(2.8rem,7.5vw,7rem)] font-light leading-[1.2] tracking-[-0.055em] text-foreground">
          أفكارك تستحق
          <br />
          <span className="text-[#8D9B83]">أن تصبح </span>
          <span
            aria-live="polite"
            className={`inline-block transition-all duration-[450ms] ease-in-out ${
              visible
                ? "translate-y-0 opacity-100 blur-0"
                : "translate-y-3 opacity-0 blur-[3px]"
            }`}
          >
            {rotatingWords[wordIndex]}
          </span>
        </h1>

        <p className="mt-7 max-w-xl text-sm leading-8 text-muted-foreground sm:mt-8 sm:text-base sm:leading-9">
          أصمّم وأطوّر تجارب رقمية تجمع بين جمال التصميم
          وقوة الأداء، لتمنح مشروعك حضورًا يلفت الانتباه
          ويترك انطباعًا يدوم.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10">
          <a
            href={localizedPath("/work")}
            className="group inline-flex min-h-14 items-center justify-center gap-5 bg-foreground px-7 py-4 text-xs text-background transition-all duration-300 hover:bg-[#8D9B83] hover:text-white active:scale-[0.98] sm:px-8"
          >
            <span>اكتشف أعمالي</span>
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ↗
            </span>
          </a>

          <a
            href={localizedPath("/contact")}
            className="inline-flex min-h-14 items-center justify-center border border-border px-7 py-4 text-xs text-foreground transition-colors duration-300 hover:border-[#8D9B83] hover:text-[#8D9B83] sm:px-8"
          >
            لنبدأ مشروعك
          </a>
        </div>

        <div className="mt-16 flex w-full justify-center sm:mt-20 lg:mt-24">
          <a
            href={localizedPath("/work")}
            aria-label="اكتشف أعمال SOVA"
            className="group block w-full overflow-hidden bg-secondary lg:w-3/4"
          >
            <img
              src="https://velvetica.store/cdn/shop/files/Drospo_Product_Page_Showcase_1.png?v=1791460317&width=1920"
              alt="عرض بصري لأحد المشاريع الرقمية"
              fetchPriority="high"
              decoding="async"
              className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
