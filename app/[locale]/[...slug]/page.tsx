import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CartPage } from "@/components/cart-page";
import { ProductDetail } from "@/components/product-detail";

const content: Record<
  string,
  { eyebrow: string; title: string; intro: string; items: string[] }
> = {
  work: {
    eyebrow: "Selected work",
    title: "Projects with a point of view.",
    intro:
      "A selection of identities, websites, and digital products built with clarity and care.",
    items: [
      "Arc Studio — Identity · Digital experience",
      "North House — E-commerce · Development",
    ],
  },
  store: {
    eyebrow: "Digital goods",
    title: "Tools for good work.",
    intro:
      "Thoughtful templates and systems for designers and developers who care about the details.",
    items: [
      "Orbit UI Kit — Figma · 120+ components · $48",
      "Folio Starter — Next.js · Framer Motion · $79",
      "Commerce Blocks — React · Tailwind CSS · $36",
    ],
  },
  services: {
    eyebrow: "What I do",
    title: "Designing the useful and the beautiful.",
    intro:
      "Strategy, design, and development for people doing meaningful work.",
    items: [
      "Websites & digital experiences",
      "E-commerce & products",
      "UI/UX systems",
      "Creative direction",
    ],
  },
  about: {
    eyebrow: "About",
    title: "Independent by design.",
    intro:
      "I am an independent designer and developer focused on making digital work feel more considered, useful, and human.",
    items: [
      "Based between ideas and execution.",
      "Small team energy, senior-level thinking.",
      "Clear communication from first sketch to launch.",
    ],
  },
  contact: {
    eyebrow: "Start a conversation",
    title: "Have a good one?",
    intro: "Tell me what you are working on and where you want to take it.",
    items: [
      "hello@yourname.design",
      "Available for select collaborations",
      "Usually replies within two business days",
    ],
  },
};

export default async function ContentPage({
  params,
}: {
  params: Promise<{ locale: string; slug?: string[] }>;
}) {
  const { locale, slug } = await params;
  if (locale !== "en" && locale !== "ar") notFound();
  const key = slug?.[0];
  const isCart = slug?.length === 1 && slug[0] === "cart";
  const isDetail =
    slug?.length === 2 && (slug[0] === "work" || slug[0] === "store");
  if (isCart)
    return (
      <div dir="rtl" className="min-h-screen bg-[#f7f7f3] text-[#191919]">
        <SiteHeader locale={locale} />
        <CartPage />
        <SiteFooter />
      </div>
    );
  const page = key ? content[key] : undefined;
  if (isDetail) {
    const detail = slug[1];
    const known =
      slug[0] === "work"
        ? ["arc-studio", "north-house"]
        : ["orbit-ui-kit", "folio-starter", "commerce-blocks"];
    if (!known.includes(detail)) notFound();
    const detailTitle =
      detail === "arc-studio"
        ? "Arc Studio"
        : detail === "north-house"
          ? "North House"
          : detail === "orbit-ui-kit"
            ? "Orbit UI Kit"
            : detail === "folio-starter"
              ? "Folio Starter"
              : "Commerce Blocks";
    if (slug[0] === "store")
      return (
        <div dir="rtl" className="min-h-screen bg-[#f7f7f3] text-[#191919]">
          <SiteHeader locale={locale} />
          <ProductDetail slug={detail} />
          <SiteFooter />
        </div>
      );
    return (
      <div
        dir={locale === "ar" ? "rtl" : "ltr"}
        className="min-h-screen bg-[#f7f7f3] text-[#191919]"
      >
        <SiteHeader locale={locale} />
        <main className="mx-auto max-w-[1440px] px-5 pb-24 pt-24 sm:px-8 sm:pt-32 lg:px-12 lg:pb-40 lg:pt-40">
          <p className="mb-8 text-[10px] uppercase tracking-[0.2em] text-[#777770]">
            {slug[0] === "work" ? "Selected work" : "Digital product"}
          </p>
          <h1 className="max-w-5xl text-[clamp(3rem,8vw,8rem)] font-light leading-[0.9] tracking-[-0.075em]">
            {detailTitle}
          </h1>
          <p className="mt-10 max-w-xl text-lg leading-8 text-[#5d5d57]">
            A considered project made with clarity, craft, and a point of view.
          </p>
        </main>
        <SiteFooter />
      </div>
    );
  }
  if (!page || slug?.length !== 1) notFound();
  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-[#f7f7f3] text-[#191919]"
    >
      <SiteHeader locale={locale} />
      <main className="mx-auto max-w-[1440px] px-5 pb-24 pt-24 sm:px-8 sm:pt-32 lg:px-12 lg:pb-40 lg:pt-40">
        <p className="mb-8 text-[10px] uppercase tracking-[0.2em] text-[#777770]">
          {page.eyebrow}
        </p>
        <h1 className="max-w-5xl text-[clamp(3rem,8vw,8rem)] font-light leading-[0.9] tracking-[-0.075em]">
          {page.title}
        </h1>
        <p className="mt-10 max-w-xl text-lg leading-8 text-[#5d5d57]">
          {page.intro}
        </p>
        <div className="mt-20 grid max-w-4xl border-t border-[#deded8] sm:grid-cols-2">
          {page.items.map((item, index) => (
            <div
              key={item}
              className="border-b border-[#deded8] py-7 text-lg tracking-[-0.025em] sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
            >
              <span className="mb-6 block text-[10px] text-[#777770]">
                0{index + 1}
              </span>
              {item}
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
