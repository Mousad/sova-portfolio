
import {
  ArrowUpRight,
  MoveLeft,
  Zap,
  Palette,
  Download,
} from "lucide-react";

import { SiteHeader, TextLink } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectCard } from "@/components/project-card";
import { HeroSection } from "@/components/hero-section";
import { DigitalProductsSection } from "@/components/digital-products-section";

const projects = [
  {
    slug: "arc-studio",
    title: "استوديو آرك",
    category: "هوية · تجربة رقمية",
    year: "2025",
    image: "/images/project-arc.png",
    large: true,
  },
  {
    slug: "north-house",
    title: "نورث هاوس",
    category: "تجارة إلكترونية · تطوير",
    year: "2024",
    image: "/images/project-north.png",
    large: false,
  },
];

const features = [
  {
    title: "جاهز للاستخدام",
    description: "ابدأ مشروعك معنا",
    icon: Zap,
  },
  {
    title: "تصميم احترافي",
    description: "واجهات عصرية وسهلة الاستخدام",
    icon: Palette,
  },
  {
    title: "تحميل فوري",
    description: "احصل على منتجاتك الرقمية",
    icon: Download,
  },
];

const services = [
  {
    number: "01",
    title: "المواقع والتجارب الرقمية",
    description: "استراتيجية وتصميم وتطوير لعلامات تتحرك بقصد.",
  },
  {
    number: "02",
    title: "التجارة والمنتجات",
    description: "متاجر ومنتجات رقمية مصممة لتقديم تجربة أفضل.",
  },
  {
    number: "03",
    title: "أنظمة الواجهات",
    description: "واجهات واضحة وأنظمة مرنة تجعل المعقد بسيطاً.",
  },
  {
    number: "04",
    title: "التوجيه الإبداعي",
    description: "شراكة إبداعية من الفكرة إلى التفاصيل الأخيرة.",
  },
];

const workSteps = [
  "الاكتشاف والتوجيه",
  "التصميم والأنظمة",
  "البناء والتحسين",
  "الإطلاق وما بعده",
];

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "ar") {
    return null;
  }

  const path = (value: string) => `/ar${value}`;

  return (
    <div dir="rtl" className="min-h-screen bg-[#fefefe] text-[#191919]">
      <SiteHeader locale={locale} />

      <main>
        {/* Hero */}
        <HeroSection locale={locale} />
 
        {/* SOVA Experience */}
        <section
          dir="rtl"
          className="bg-[#fefefe] px-4 py-10 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-3 sm:mb-9">
              <p className="mb-3 text-center text-[10px] tracking-[0.2em] text-[#777b6d]">
                تفاصيل تصنع الفرق
              </p>

              <h2 className="text-center text-2xl font-light tracking-tight text-[#171813] sm:text-3xl lg:text-4xl">
                تجربة SOVA
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-3">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    className="group flex min-h-[155px] flex-col items-center justify-center border border-[#f0f1e9] bg-[#f5f6ef] p-3 text-center transition-colors duration-300 hover:border-[#aab29b] sm:min-h-[195px] sm:p-6 lg:p-7"
                  >
                    <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-[#737c60] text-white transition-transform duration-300 group-hover:scale-105">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>

                    <h3 className="text-[12px] font-medium text-[#171813] sm:text-base">
                      {feature.title}
                    </h3>

                    <p className="mt-2 max-w-xs text-[10px] leading-4 text-[#696c61] sm:text-sm">
                      {feature.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

                <DigitalProductsSection />


        

        {/* Selected Work */}
        <section className="border-y border-[#deded8] bg-[#fefefe]">
          <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
            <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-[10px] tracking-[0.2em] text-[#777770]">
                  01 / أعمال مختارة
                </p>

                <h2 className="max-w-xl text-4xl font-light leading-none tracking-[-0.055em] sm:text-6xl">
                  أشياء صنعتها.
                </h2>
              </div>

              <TextLink href={path("/work")}>كل المشاريع</TextLink>
            </div>

            <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
              {projects.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr]">
            <div>
              <p className="mb-3 text-[10px] tracking-[0.2em] text-[#777770]">
                02 / ما أقدمه
              </p>

              <h2 className="max-w-md text-4xl font-light leading-[0.95] tracking-[-0.055em] sm:text-6xl">
                أصمم المفيد والجميل.
              </h2>
            </div>

            <div className="grid border-t border-[#deded8] sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.number}
                  className="border-b border-[#deded8] py-7 sm:pr-8"
                >
                  <span className="text-[10px] text-[#777770]">
                    {service.number}
                  </span>

                  <h3 className="mt-8 text-xl">{service.title}</h3>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-[#777770]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Digital Products — the new section */}

        {/* Work Process */}
        <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-[10px] tracking-[0.2em] text-[#777770]">
                04 / طريقة العمل
              </p>

              <h2 className="max-w-sm text-4xl font-light leading-[0.95] tracking-[-0.055em] sm:text-6xl">
                عملية هادئة، نتائج واضحة.
              </h2>
            </div>

            <div className="border-t border-[#deded8]">
              {workSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center justify-between border-b border-[#deded8] py-5"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-[10px] text-[#777770]">
                      0{index + 1}
                    </span>

                    <h3 className="text-lg">{step}</h3>
                  </div>

                  <MoveLeft
                    size={18}
                    strokeWidth={1.2}
                    className="text-[#8b8b84]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-[#737c60] text-white">
          <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-12 px-5 py-20 sm:px-8 lg:flex-row lg:items-end lg:px-12 lg:py-28">
            <div>
              <p className="mb-8 text-[10px] text-white/65">
                لديك فكرة جيدة؟
              </p>

              <h2 className="max-w-3xl text-5xl font-light leading-[0.95] tracking-[-0.06em] sm:text-7xl">
                لنبنِ شيئاً
                <br />
                <span className="text-white/50">واضحاً معاً.</span>
              </h2>
            </div>

            <a
              href="mailto:hello@yourname.design"
              className="inline-flex items-center gap-3 text-sm text-white/90 transition-opacity hover:opacity-70"
            >
              hello@yourname.design
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
