
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
      {/* Spacer: keeps page content below the fixed navbar */}
      <div
        aria-hidden="true"
        className="h-[48px] sm:h-[72px]"
      />

      {/* Fixed top navbar */}
      <header className="site-header-glow fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 text-foreground backdrop-blur-xl transition-colors duration-300">
        <div className="relative mx-auto flex h-[48px] items-center justify-between px-4 sm:h-[72px] sm:px-8 lg:max-w-[1440px] lg:px-12">
          {/* Centered logo */}
          <Link
            href={`/${locale}`}
            className="site-logo-light absolute left-1/2 flex -translate-x-1/2 items-center justify-center lg:static lg:translate-x-0"
            aria-label="SOVA - الصفحة الرئيسية"
          >
            {/* Light theme logo */}
            <img
              src="/images/logo-light.jpg"
              alt="SOVA"
              className="relative z-[1] h-10 w-auto max-w-[150px] object-contain dark:hidden sm:h-14 sm:max-w-[200px]"
            />

            {/* Dark theme logo */}
            <img
              src="/images/logo-lig.jpg"
              alt="SOVA"
              className="relative z-[1] hidden h-10 w-auto max-w-[150px] object-contain dark:block sm:h-14 sm:max-w-[200px]"
            />
          </Link>

          {/* Desktop navigation */}
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

          {/* Desktop actions */}
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
              <span className="text-muted-foreground">
                ({count})
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile bottom navigation */}
      <MobileNav locale={locale} />

      {/* Mobile-only dark theme spotlight */}
      <style jsx global>{`
        .site-header-glow {
          isolation: isolate;
          overflow: visible;
        }

        .site-logo-light {
          isolation: isolate;
          overflow: visible;
        }

        /* No glow in light mode */
        .site-logo-light::before,
        .site-logo-light::after {
          content: none;
        }

        /* Large triangular beam: dark mode, mobile/tablet only */
        @media (max-width: 1023px) {
          .dark .site-logo-light::after {
            content: "";
            position: absolute;
            display: block;
            z-index: 0;

            left: 50%;
            top: 12px;

            width: 145vw;
            max-width: 760px;
            height: 440px;

            pointer-events: none;
            transform: translateX(-50%) scaleY(0.6);
            transform-origin: top center;

            clip-path: polygon(
              46% 0%,
              54% 0%,
              100% 100%,
              0% 100%
            );

            background: linear-gradient(
              to bottom,
              rgba(190, 215, 171, 0.48) 0%,
              rgba(166, 190, 147, 0.32) 20%,
              rgba(141, 155, 131, 0.18) 45%,
              rgba(141, 155, 131, 0.08) 70%,
              rgba(141, 155, 131, 0.02) 88%,
              transparent 100%
            );

            filter: blur(23px);
            opacity: 0;

            animation: sova-mobile-beam 1.4s ease-out 0.15s forwards;
          }

          /* Brighter, narrower core of the spotlight */
          .dark .site-logo-light::before {
            content: "";
            position: absolute;
            display: block;
            z-index: 0;

            left: 50%;
            top: 10px;

            width: 240px;
            height: 360px;

            pointer-events: none;
            transform: translateX(-50%) scaleY(0.6);
            transform-origin: top center;

            clip-path: polygon(
              44% 0%,
              56% 0%,
              100% 100%,
              0% 100%
            );

            background: linear-gradient(
              to bottom,
              rgba(205, 228, 188, 0.38) 0%,
              rgba(166, 190, 147, 0.22) 32%,
              rgba(141, 155, 131, 0.09) 68%,
              transparent 100%
            );

            filter: blur(25px);
            opacity: 0;

            animation: sova-mobile-beam 1.4s ease-out 0.15s forwards;
          }
        }

        @keyframes sova-mobile-beam {
          from {
            opacity: 0;
            transform: translateX(-50%) scaleY(0.6);
          }

          to {
            opacity: 1;
            transform: translateX(-50%) scaleY(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dark .site-logo-light::before,
          .dark .site-logo-light::after {
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
