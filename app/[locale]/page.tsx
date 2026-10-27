
import Image from "next/image";
import Link from "next/link";
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
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/hero-section";
import { DigitalProductsSection } from "@/components/digital-products-section";

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

  return (
    <div
      dir="rtl"
      className="min-h-screen overflow-x-clip bg-background text-foreground transition-colors duration-300"
    >
      <SiteHeader locale={locale} />

      <main>
        {/* Hero */}
        <HeroSection locale={locale} />

        {/* SOVA Experience */}
        <section className="bg-background px-4 py-10 transition-colors duration-300 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[1440px]">
            <Reveal className="mb-3 sm:mb-9">
              <p className="mb-3 text-center text-[10px] tracking-[0.2em] text-muted-foreground">
                تفاصيل تصنع الفرق
              </p>

              <h2 className="text-center text-2xl font-light tracking-tight text-foreground sm:text-3xl lg:text-4xl">
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
                    <article className="group flex h-full min-h-[155px] flex-col items-center justify-center border border-border bg-card p-3 text-center transition-colors duration-300 hover:border-[#8D9B83] sm:min-h-[195px] sm:p-6 lg:p-7">
                      <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-[#8D9B83] text-white transition-transform duration-300 group-hover:scale-105">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>

                      <h3 className="text-[12px] font-medium text-card-foreground sm:text-base">
                        {feature.title}
                      </h3>

                      <p className="mt-2 max-w-xs text-[10px] leading-4 text-muted-foreground sm:text-sm">
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

        {/* Showcase */}
        <Reveal className="w-full" delay={0.1}>
          <Showcase />
        </Reveal>

        {/* Animation Showcase */}
        <section
          dir="ltr"
          className="w-full border-y border-border bg-background px-4 py-10 transition-colors duration-300 sm:px-6 sm:py-14"
        >
          <Reveal className="mb-6 text-center" y={20}>
            <div dir="rtl">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                كيف تعمل الرسوم المتحركة؟
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                توضيح مرئي لكيفية تحريك العناصر وتغيير خصائصها لإنشاء تأثيرات
                حركية سلسة وتفاعلات أكثر حيوية داخل واجهات المستخدم.
              </p>
            </div>
          </Reveal>

          <Reveal className="mx-auto w-full max-w-5xl" delay={0.12} y={28}>
            <figure>
              <div className="overflow-hidden rounded-xl border border-border bg-secondary">
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

        {/* Web Development Course */}
        <section className="bg-background px-6 py-12 transition-colors duration-300 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/courses/web-development"
              className="group grid overflow-hidden rounded-3xl border border-border bg-card p-4 text-card-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 lg:grid-cols-2 lg:items-center lg:gap-10 lg:p-10"
            >
              <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/web.jpg"
                  alt="بوستر كورس تطوير الويب من SOVA"
                  width={600}
                  height={800}
                  sizes="(max-width: 640px) 90vw, 400px"
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex flex-col items-start justify-center py-6 lg:py-10">
                <span className="mb-4 text-xs tracking-[0.2em] text-[#8D9B83]">
                  SOVA LEARNING
                </span>

                <h2 className="text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl">
                  تعلّم تطوير الويب
                  <br />
                  وابدأ ببناء أفكارك.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
                  طوّر مهاراتك وابنِ تجارب رقمية تجمع بين التصميم الاحترافي
                  والكود النظيف.
                </p>

                <span className="mt-7 inline-flex items-center gap-3 text-sm text-foreground transition-colors group-hover:text-[#8D9B83]">
                  اكتشف الكورس
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Services */}
        <section className="mx-auto max-w-[1440px] px-5 py-24 transition-colors duration-300 sm:px-8 lg:px-12 lg:py-36">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr]">
            <Reveal>
              <div>
                <p className="mb-3 text-[10px] tracking-[0.2em] text-muted-foreground">
                  02 / ما أقدمه
                </p>

                <h2 className="max-w-md text-4xl font-light leading-[0.95] tracking-[-0.055em] text-foreground sm:text-6xl">
                  أصمم المفيد والجميل.
                </h2>
              </div>
            </Reveal>

            <div className="grid border-t border-border sm:grid-cols-2">
              {services.map((service, index) => (
                <Reveal
                  key={service.number}
                  delay={index * 0.1}
                  className="h-full"
                >
                  <div className="h-full border-b border-border py-7 sm:pr-8">
                    <span className="text-[10px] text-muted-foreground">
                      {service.number}
                    </span>

                    <h3 className="mt-8 text-xl text-foreground">
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Work Process */}
        <section className="mx-auto max-w-[1440px] px-5 py-24 transition-colors duration-300 sm:px-8 lg:px-12 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div>
                <p className="mb-3 text-[10px] tracking-[0.2em] text-muted-foreground">
                  04 / طريقة العمل
                </p>

                <h2 className="max-w-sm text-4xl font-light leading-[0.95] tracking-[-0.055em] text-foreground sm:text-6xl">
                  عملية هادئة، نتائج واضحة.
                </h2>
              </div>
            </Reveal>

            <div className="border-t border-border">
              {workSteps.map((step, index) => (
                <Reveal key={step} delay={index * 0.08}>
                  <div className="flex items-center justify-between border-b border-border py-5">
                    <div className="flex items-center gap-5">
                      <span className="text-[10px] text-muted-foreground">
                        0{index + 1}
                      </span>

                      <h3 className="text-lg text-foreground">{step}</h3>
                    </div>

                    <MoveLeft
                      size={18}
                      strokeWidth={1.2}
                      className="text-muted-foreground"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
      
<section className="bg-[#8D9B83] text-white transition-colors duration-300 dark:bg-[#22251F]">
  <Reveal y={30}>
    <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-12 px-5 py-20 sm:px-8 lg:flex-row lg:items-end lg:px-12 lg:py-28">
      <div>
        <p className="mb-8 text-[10px] text-white/75">
          لديك فكرة جيدة؟
        </p>

        <h2 className="max-w-3xl text-5xl font-light leading-[0.95] tracking-[-0.06em] sm:text-7xl">
          لنبنِ شيئاً
          <br />
          <span className="text-white/65">واضحاً معاً.</span>
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
 