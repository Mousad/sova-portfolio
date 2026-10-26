
import {
  ArrowUpRight,
  MoveLeft,
  Zap,
  Palette,
  Download,
} from "lucide-react";
import Showcase from "@/components/Showcase";
import { Reveal } from "@/components/Reveal";
import InstagramShowcase from "@/components/InstagramShowcase";
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
        {/* Hero - unchanged */}
        <HeroSection locale={locale} />

        {/* SOVA Experience */}
        <section
          dir="rtl"
          className="bg-[#fefefe] px-4 py-10 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
        >
          <div className="mx-auto max-w-[1440px]">
            <Reveal className="mb-3 sm:mb-9">
              <p className="mb-3 text-center text-[10px] tracking-[0.2em] text-[#777b6d]">
                تفاصيل تصنع الفرق
              </p>

              <h2 className="text-center text-2xl font-light tracking-tight text-[#171813] sm:text-3xl lg:text-4xl">
                تجربة SOVA
              </h2>
            </Reveal>

            <div className="grid grid-cols-3 gap-3 sm:gap-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <Reveal
                    key={feature.title}
                    delay={index * 0.12}
                    className="h-full"
                  >
                    <article className="group flex h-full min-h-[155px] flex-col items-center justify-center border border-[#f0f1e9] bg-[#f5f6ef] p-3 text-center transition-colors duration-300 hover:border-[#aab29b] sm:min-h-[195px] sm:p-6 lg:p-7">
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
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Digital Products */}
        <Reveal className="w-full">
          <DigitalProductsSection />
        </Reveal>

        {/* Instagram */}
        <Reveal className="w-full" delay={0.1}>
          <InstagramShowcase />
        </Reveal>
        <Reveal className="w-full" delay={0.1}>
           <Showcase />
        </Reveal>

          

        {/* Animation Showcase */}
        <section
          dir="ltr"
          className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14"
        >
          <Reveal className="mb-6 text-center" y={20}>
            <div dir="rtl">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                كيف تعمل الرسوم المتحركة؟
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                توضيح مرئي لكيفية تحريك العناصر وتغيير خصائصها لإنشاء تأثيرات
                حركية سلسة وتفاعلات أكثر حيوية داخل واجهات المستخدم.
              </p>
            </div>
          </Reveal>

          <Reveal className="mx-auto w-full max-w-5xl" delay={0.12} y={28}>
            <figure>
              <div className="overflow-hidden rounded-xl bg-[#f8f8f4]">
                <img
                  src="https://blog-assets.lottiefiles.com/content/images/2026/10/frame-scene.gif"
                  alt="Animating an object by updating its properties"
                  loading="lazy"
                  className="block h-auto w-full object-cover"
                  width={1200}
                  height={675}
                />
              </div>
            </figure>
          </Reveal>
        </section>

        {/* Selected Work */}
        <section className="border-y border-[#deded8] bg-[#fefefe]">
          <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
            <Reveal>
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
            </Reveal>

            <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
              {projects.map((project, index) => (
                <Reveal
                  key={project.slug}
                  delay={index * 0.15}
                  className="h-full"
                >
                  <ProjectCard {...project} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr]">
            <Reveal>
              <div>
                <p className="mb-3 text-[10px] tracking-[0.2em] text-[#777770]">
                  02 / ما أقدمه
                </p>

                <h2 className="max-w-md text-4xl font-light leading-[0.95] tracking-[-0.055em] sm:text-6xl">
                  أصمم المفيد والجميل.
                </h2>
              </div>
            </Reveal>

            <div className="grid border-t border-[#deded8] sm:grid-cols-2">
              {services.map((service, index) => (
                <Reveal
                  key={service.number}
                  delay={index * 0.1}
                  className="h-full"
                >
                  <div className="h-full border-b border-[#deded8] py-7 sm:pr-8">
                    <span className="text-[10px] text-[#777770]">
                      {service.number}
                    </span>

                    <h3 className="mt-8 text-xl">{service.title}</h3>

                    <p className="mt-3 max-w-xs text-sm leading-6 text-[#777770]">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Work Process */}
        <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div>
                <p className="mb-3 text-[10px] tracking-[0.2em] text-[#777770]">
                  04 / طريقة العمل
                </p>

                <h2 className="max-w-sm text-4xl font-light leading-[0.95] tracking-[-0.055em] sm:text-6xl">
                  عملية هادئة، نتائج واضحة.
                </h2>
              </div>
            </Reveal>

            <div className="border-t border-[#deded8]">
              {workSteps.map((step, index) => (
                <Reveal key={step} delay={index * 0.08}>
                  <div className="flex items-center justify-between border-b border-[#deded8] py-5">
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
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-[#737c60] text-white">
          <Reveal y={30}>
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
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
