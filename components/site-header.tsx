
"use client";

import Link from "next/link";
import { useCart } from "@/components/cart-context";
import { ArrowUpRight, Search, ShoppingBag } from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";

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
      <header className="sticky top-0 z-50 border-b border-[#deded8] bg-[#f7f7f3]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[58px] items-center justify-between px-5 sm:h-[72px] sm:px-8 lg:max-w-[1440px] lg:px-12">
          {/* Logo */}
         
          <Link
  href={`/${locale}`}
  className="group absolute left-1/2 flex -translate-x-1/2 shrink-0 items-center gap-3 lg:static lg:translate-x-0"
  aria-label="NAWA STUDIO - الرئيسية"
>
  <img
    src="/images/logo.jpg"
    alt="NAWA STUDIO"
    className="h-14 w-auto max-w-[200px] object-contain"
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
                className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#555550] transition-colors duration-200 hover:text-[#111]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-1 lg:flex">
            <Link
              href={localized("/store")}
              className="flex items-center gap-2 px-3 py-2 text-[11px] tracking-[0.12em] text-[#555550] transition-colors hover:text-[#111]"
              aria-label="البحث في المتجر"
            >
              <Search size={15} strokeWidth={1.5} />
              بحث
            </Link>

            <Link
              href={localized("/cart")}
              className="flex items-center gap-2 border-l border-[#deded8] px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-[#191919]"
              aria-label={`السلة، ${count} منتجات`}
            >
              <ShoppingBag size={17} strokeWidth={1.5} />
              <span>السلة</span>
              <span className="text-[#8a8a83]">({count})</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile bottom navigation is outside the header */}
      <MobileNav locale={locale} />
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
      className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#191919]"
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
