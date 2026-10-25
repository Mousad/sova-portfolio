
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/components/cart-context";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  House,
  ShoppingBag,
  ArrowUpLeft,
  BriefcaseBusiness,
  Layers3,
  Info,
  MessageCircle,
  ChevronLeft,
} from "lucide-react";

const NAV_ITEMS = [
  { href: "/work", label: "الأعمال", icon: BriefcaseBusiness },
  { href: "/store", label: "المتجر", icon: ShoppingBag },
  { href: "/services", label: "الخدمات", icon: Layers3 },
  { href: "/about", label: "عن الاستوديو", icon: Info },
  { href: "/contact", label: "تواصل معنا", icon: MessageCircle },
];

const PRODUCTS = [
  {
    
    category: "DESIGN RESOURCES",
    price: "$19",
    image: "https://velvetica.store/cdn/shop/files/5_3.webp?v=1792585385&width=352",
    href: "/store",
  },
  {
   
    category: "WEB TEMPLATES",
    price: "$29",
    image: "https://velvetica.store/cdn/shop/files/1_2.webp?v=1792410688&width=832",
    href: "/store",
  },
  {
  
    category: "CODE RESOURCES",
    price: "$15",
    image: "https://velvetica.store/cdn/shop/files/4_8920bc4d-226a-4866-b245-63507480be48.webp?v=1792302458&width=832",
    href: "/store",
  },
  {
  
    category: "CODE RESOURCES",
    price: "$15",
    image: "https://velvetica.store/cdn/shop/files/8_776edec7-8df7-454b-bfe4-417c60967b5b.webp?v=1792302540&width=832",
    href: "/store",
  },
];

export function MobileNav({
  locale = "ar",
}: {
  locale?: "ar" | "en";
}) {
  const pathname = usePathname();
  const { count } = useCart();

  const [open, setOpen] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  const localized = (href: string) => `/${locale}${href}`;
  const homeHref = `/${locale}`;

  const isHome =
    pathname === homeHref || pathname === `${homeHref}/`;

  const isActive = (href: string) => {
    const target = localized(href);
    return (
      pathname === target ||
      pathname.startsWith(`${target}/`)
    );
  };

  // إخفاء شريط التنقل عند ظهور الفوتر
  useEffect(() => {
    const footer = document.querySelector("footer");

    if (!footer) {
      setFooterVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, [pathname]);

  // إغلاق القائمة باستخدام Escape
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () =>
      document.removeEventListener("keydown", onKeyDown);
  }, []);

  // منع تمرير الصفحة خلف القائمة
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  // إغلاق القائمة عند تغيير الصفحة
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const centerHref = isHome ? localized("/store") : homeHref;
  const CenterIcon = isHome ? ShoppingBag : House;
  const centerLabel = isHome ? "المتجر" : "الرئيسية";

  return (
    <>
      {/* شريط التنقل السفلي */}
      <nav
        aria-label="Mobile navigation"
        className={[
          "fixed inset-x-4 z-[60] mx-auto max-w-md",
          "rounded-full border border-[#e5e5de] bg-white/95 p-2",
          "shadow-[0_8px_35px_rgba(20,20,20,0.10)] backdrop-blur-xl",
          "transition-opacity duration-300 lg:hidden",
          footerVisible || open
            ? "invisible pointer-events-none opacity-0"
            : "visible opacity-100",
        ].join(" ")}
        style={{
          bottom: "calc(env(safe-area-inset-bottom, 0px) + 12px)",
        }}
      >
        <div className="grid grid-cols-3 items-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="فتح القائمة"
            aria-expanded={open}
            className="flex h-12 items-center justify-center rounded-full text-[#555550]"
          >
            <Menu size={24} strokeWidth={1.7} />
          </button>

          <Link
            href={centerHref}
            aria-label={centerLabel}
            className={[
              "mx-auto flex size-12 items-center justify-center rounded-full",
              isHome
                ? "bg-[#f1f1eb] text-[#555550]"
                : "bg-[#8D9B83] text-white",
            ].join(" ")}
          >
            <CenterIcon size={23} strokeWidth={1.7} />
          </Link>

          <Link
            href={localized(isHome ? "/about" : "/store")}
            aria-label={isHome ? "عن الاستوديو" : "المتجر"}
            className="flex h-12 items-center justify-center rounded-full text-[#555550]"
          >
            {isHome ? (
              <Info size={23} strokeWidth={1.7} />
            ) : (
              <ShoppingBag size={23} strokeWidth={1.7} />
            )}
          </Link>
        </div>
      </nav>

      {/* القائمة الجانبية */}
      <div
        className={[
          "fixed inset-0 z-[80] lg:hidden",
          open
            ? "visible"
            : "invisible pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="إغلاق القائمة"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
          className={[
            "absolute inset-0 bg-black/35 backdrop-blur-[2px]",
            "transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        <aside
          role="dialog"
          aria-modal={open}
          aria-label="قائمة NAWA STUDIO"
          dir={locale === "ar" ? "rtl" : "ltr"}
          className={[
            "absolute inset-y-0 right-0 flex w-[90%] max-w-[390px] flex-col",
            "overflow-y-auto bg-[#f7f7f3] px-5",
            "pt-[calc(env(safe-area-inset-top,0px)+18px)]",
            "pb-[calc(env(safe-area-inset-bottom,0px)+16px)]",
            "shadow-2xl transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          {/* رأس القائمة */}
          <div className="flex shrink-0 items-center justify-between border-b border-[#f5f6ef] pb-4">
            <Link
  href={homeHref}
  onClick={() => setOpen(false)}
  tabIndex={open ? 0 : -1}
  className="flex items-center gap-3"
>
   <img
    src="/images/logo.jpg"
    alt="NAWA STUDIO"
    className="h-14 w-auto max-w-[150px] object-contain"
  />
</Link>

            <button
              type="button"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              aria-label="إغلاق القائمة"
              className="flex size-10 items-center justify-center rounded-full border border-[#deded8] text-[#171717] transition-colors hover:bg-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* روابط الموقع */}
          <nav className="mt-4 shrink-0">
            <Link
              href={homeHref}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              aria-current={isHome ? "page" : undefined}
              className={[
                "flex items-center justify-between border-b border-[#deded8] py-3.5",
                "text-lg font-medium transition-colors",
                isHome
                  ? "text-[#718269]"
                  : "text-[#171717] hover:text-[#718269]",
              ].join(" ")}
            >
              <span>الرئيسية</span>
              <ArrowUpLeft size={20} strokeWidth={1.5} />
            </Link>

            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={localized(item.href)}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "flex items-center justify-between border-b border-[#deded8] py-3.5",
                    "text-[17px] transition-colors",
                    active
                      ? "font-medium text-[#718269]"
                      : "text-[#171717] hover:text-[#718269]",
                  ].join(" ")}
                >
                  <span>{item.label}</span>
                  <Icon size={20} strokeWidth={1.5} />
                </Link>
              );
            })}
          </nav>

          {/* المنتجات الرقمية */}
          <section className="mt-5 shrink-0">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-[#171717]">
                منتجات رقمية مختارة
              </h3>

              <Link
                href={localized("/store")}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="flex items-center gap-1 text-xs text-[#718269]"
              >
                عرض الكل
                <ArrowUpLeft size={15} />
              </Link>
            </div>

            <div
              dir="ltr"
              className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2"
              style={{
                scrollbarWidth: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
            {PRODUCTS.map((product, index) => (
  <Link
    key={`${product.title}-${index}`}
    href={localized(product.href)}
    onClick={() => setOpen(false)}
    tabIndex={open ? 0 : -1}
    className="w-[155px] shrink-0 snap-start overflow-hidden rounded-xl border border-[#e5e5de] bg-white transition-colors hover:border-[#8D9B83]"
  >
                  <div className="aspect-[4/3] overflow-hidden bg-[#eeeee8]">
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-3">
                    <p className="truncate text-[9px] tracking-wide text-[#85857d]">
                      {product.category}
                    </p>

                    <h4 className="mt-1.5 truncate text-xs font-medium text-[#171717]">
                      {product.title}
                    </h4>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm font-medium text-[#718269]">
                        {product.price}
                      </span>

                      <ChevronLeft
                        size={16}
                        strokeWidth={1.5}
                        className="text-[#77776f]"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* السلة والتواصل */}
          <div className="mt-5 grid shrink-0 grid-cols-2 gap-3">
            <Link
              href={localized("/cart")}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="flex min-w-0 items-center justify-between gap-2 rounded-xl border border-[#deded8] bg-white px-3 py-3.5 transition-colors hover:border-[#8D9B83]"
            >
              <span className="flex min-w-0 items-center gap-2 text-sm">
                <ShoppingBag size={18} className="shrink-0" />
                <span className="truncate">سلة التسوق</span>
              </span>

              <span className="shrink-0 rounded-full bg-[#e9ece5] px-2 py-1 text-xs text-[#718269]">
                {count}
              </span>
            </Link>

            <Link
              href={localized("/contact")}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="flex min-w-0 items-center justify-between gap-2 rounded-xl bg-[#171717] px-3 py-3.5 text-white transition-colors hover:bg-[#30302c]"
            >
              <span className="truncate text-sm">
                ابدأ مشروعك
              </span>

              <ArrowUpLeft
                size={18}
                strokeWidth={1.5}
                className="shrink-0"
              />
            </Link>
          </div>

          {/* المساحة السفلية تستفيد من الفراغ */}
          <div className="mt-auto shrink-0 pt-6">
            <p className="text-[10px] tracking-[0.18em] text-[#85857d]">
              DESIGN WITH PURPOSE.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
