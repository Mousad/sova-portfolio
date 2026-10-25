
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

      const timeout = window.setTimeout(() => {
        setWordIndex((current) => (current + 1) % rotatingWords.length);
        setVisible(true);
      }, 450);

      return () => window.clearTimeout(timeout);
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  const localizedPath = (value: string) =>
    `/${locale}${value === "/" ? "" : value}`;

  return (
    <section
      dir="rtl"
      className="overflow-hidden px-4 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-28 lg:px-12 lg:pb-24 lg:pt-32"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center text-center">
        <p className="mb-8 flex items-center justify-center gap-3 text-[11px] tracking-wide text-[#696c61] sm:mb-10 sm:text-xs">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#8D9B83] opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-[#8D9B83]" />
          </span>
          تصميم مستقل، برؤية مختلفة
        </p>

        <h1 className="max-w-5xl text-[clamp(2.8rem,7.5vw,7rem)] font-light leading-[1.2] tracking-[-0.055em] text-[#171813]">
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

        <p className="mt-7 max-w-xl text-sm leading-8 text-[#696c61] sm:mt-8 sm:text-base sm:leading-9">
          أصمّم وأطوّر تجارب رقمية تجمع بين جمال التصميم
          وقوة الأداء، لتمنح مشروعك حضورًا يلفت الانتباه
          ويترك انطباعًا يدوم.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10">
          <a
            href={localizedPath("/work")}
            className="group inline-flex min-h-14 items-center justify-center gap-5 bg-[#171813] px-7 py-4 text-xs text-white transition-all duration-300 hover:bg-[#8D9B83] active:scale-[0.98] sm:px-8"
          >
            <span>اكتشف أعمالي</span>
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ↗
            </span>
          </a>

          <a
            href={localizedPath("/contact")}
            className="inline-flex min-h-14 items-center justify-center border border-[#dedfd6] px-7 py-4 text-xs text-[#171813] transition-colors duration-300 hover:border-[#8D9B83] hover:text-[#65745b] sm:px-8"
          >
            لنبدأ مشروعك
          </a>
        </div>

        <div className="mt-16 flex w-full justify-center sm:mt-20 lg:mt-24">
          <a
            href={localizedPath("/work")}
            aria-label="اكتشف أعمال SOVA"
            className="group block w-full overflow-hidden bg-[#f5f5f2] lg:w-3/4"
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
