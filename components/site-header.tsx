
"use client";

import Link from "next/link";
import { useCart } from "@/components/cart-context";
import { ArrowUpRight, Search, ShoppingBag } from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/work", label: "الأعمال" },
  { href: "/store", label: "المتجر" },
  { href: "/services", label: "الخدمات" },
  { href: "/about", label: "عن الاستوديو" },
  { href: "/contact", label: "تواصل" },
];

export function SiteHeader({
  locale = "ar",
}: {
  locale?: "en" | "ar";
}) {
  const { count } = useCart();
  const localized = (href: string) => `/${locale}${href}`;

  return (
    <>
      {/* مساحة تعويضية للهيدر الثابت */}
      <div aria-hidden="true" className="h-[48px] sm:h-[72px]" />

      {/* الهيدر الثابت */}
      <header className="site-header-glow fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 text-foreground backdrop-blur-xl transition-colors duration-300">
        {/* طبقة الضوء: خلف عناصر الهيدر */}
        <div
          aria-hidden="true"
          className="site-spotlight pointer-events-none absolute inset-x-0 top-0"
        />

        <div className="relative z-10 mx-auto flex h-[48px] items-center justify-between px-4 sm:h-[72px] sm:px-8 lg:max-w-[1440px] lg:px-12">
          {/* اللوقو */}
          <Link
            href={`/${locale}`}
            className="site-logo-light absolute left-1/2 flex -translate-x-1/2 items-center justify-center lg:static lg:translate-x-0"
            aria-label="SOVA - الصفحة الرئيسية"
          >
            <img
              src="/images/logo-light.jpg"
              alt="SOVA"
              className="relative z-[2] h-10 w-auto max-w-[150px] object-contain dark:hidden sm:h-14 sm:max-w-[200px]"
            />

            <img
              src="/images/logo1-rem.png"
              alt="SOVA"
              className="relative z-[2] hidden h-10 w-auto max-w-[150px] object-contain dark:block sm:h-14 sm:max-w-[200px]"
            />
          </Link>

          {/* روابط الكمبيوتر */}
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Main navigation"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={localized(link.href)}
                className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-200 hover:text-[#8D9B83]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* أدوات الكمبيوتر */}
          <div className="hidden items-center gap-1 lg:flex">
            <ThemeToggle />

            <Link
              href={localized("/store")}
              className="flex items-center gap-2 px-3 py-2 text-[11px] tracking-[0.12em] text-muted-foreground transition-colors hover:text-[#8D9B83]"
              aria-label="البحث في المتجر"
            >
              <Search size={15} strokeWidth={1.5} />
              بحث
            </Link>

            <Link
              href={localized("/cart")}
              className="flex items-center gap-2 border-l border-border px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-foreground transition-colors"
              aria-label={`السلة، ${count} منتجات`}
            >
              <ShoppingBag size={17} strokeWidth={1.5} />
              <span>السلة</span>
              <span className="text-muted-foreground">({count})</span>
            </Link>
          </div>
        </div>
      </header>

      {/* شريط التنقل السفلي للموبايل */}
      <MobileNav locale={locale} />

      <style jsx global>{`
        .site-header-glow {
          isolation: isolate;
          overflow: visible;
        }

        .site-spotlight {
          display: none;
        }

        /* الإضاءة للموبايل فقط وفي الوضع الداكن */
        @media (max-width: 767px) {
          .dark .site-spotlight {
            display: block;
            z-index: 0;
            height: 1px;
            overflow: visible;
          }

          .dark .site-spotlight::before,
          .dark .site-spotlight::after {
            content: "";
            position: absolute;
            display: block;
            left: 50%;
            pointer-events: none;
            transform: translateX(-50%) scaleY(0.55);
            transform-origin: top center;
            opacity: 0;
            animation: sova-mobile-beam 1.4s ease-out 0.15s forwards;
          }

          /* الشعاع الخارجي العريض */
          .dark .site-spotlight::after {
            top: 24px;
            width: 185vw;
            max-width: 790px;
            height: 490px;
            clip-path: polygon(
              46% 0%,
              54% 0%,
              100% 100%,
              0% 100%
            );
            background: linear-gradient(
              to bottom,
              rgba(226, 234, 220, 0.48) 0%,
              rgba(243, 251, 237, 0.32) 20%,
              rgba(236, 248, 227, 0.18) 45%,
              rgba(141, 155, 131, 0.08) 70%,
              rgba(141, 155, 131, 0.02) 88%,
              transparent 100%
            );
            filter: blur(23px);
          }

          /* الشعاع الداخلي الأكثر سطوعاً */
          .dark .site-spotlight::before {
            top: 22px;
            width: 330px;
            height: 390px;
            clip-path: polygon(
              44% 0%,
              56% 0%,
              100% 100%,
              0% 100%
            );
            background: linear-gradient(
              to bottom,
              rgba(234, 237, 231, 0.38) 0%,
              rgba(166, 190, 147, 0.22) 32%,
              rgba(141, 155, 131, 0.09) 68%,
              transparent 100%
            );
            filter: blur(25px);
          }
        }

        @keyframes sova-mobile-beam {
          from {
            opacity: 0;
            transform: translateX(-50%) scaleY(0.55);
          }

          to {
            opacity: 1;
            transform: translateX(-50%) scaleY(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dark .site-spotlight::before,
          .dark .site-spotlight::after {
            animation: none;
            opacity: 1;
            transform: translateX(-50%) scaleY(1);
          }
        }
      `}</style>
    </>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground transition-colors hover:text-[#8D9B83]"
    >
      {children}
      <ArrowUpRight
        size={14}
        strokeWidth={1.5}
        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}
