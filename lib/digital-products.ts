



export type DigitalProduct = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  gallery: string[];
  featured?: string;
  description: string;
  includes: string[];
  compatibility: string;
};

export const digitalProducts: DigitalProduct[] = [
  {
    slug: "orbit-ui-kit",
    title: "Orbit UI Kit",
    subtitle: "نظام متكامل لتصميم واجهات المستخدم",
    category: "UI KIT",
    price: 1450,
    oldPrice: 1950,
    image:
      "https://velvetica.store/cdn/shop/files/5_3.webp?v=1792585385&width=1200",
    gallery: [
      "https://velvetica.store/cdn/shop/files/8_3.webp?v=1792585369&width=1200",
      "https://velvetica.store/cdn/shop/files/9_1.webp?v=1792585367&width=1200",
      "https://velvetica.store/cdn/shop/files/7_2.webp?v=1792585372&width=1200",
      "https://velvetica.store/cdn/shop/files/6_2.webp?v=1792585380&width=1200",
    ],
    featured: "الأكثر تميزاً",
    description:
      "مكتبة واجهات منظمة تساعدك على بناء تجارب رقمية متناسقة وتسريع عملية التصميم.",
    includes: [
      "مكونات واجهات قابلة لإعادة الاستخدام",
      "نظام ألوان وخطوط",
      "ملفات تصميم منظمة",
      "دليل استخدام",
    ],
    compatibility: "Figma",
  },
  {
    slug: "folio-starter",
    title: "Folio Starter",
    subtitle: "ابدأ بناء معرض أعمالك باحترافية",
    category: "WEBSITE TEMPLATE",
    price: 1850,
    image: "https://velvetica.store/cdn/shop/files/4_8920bc4d-226a-4866-b245-63507480be48.webp?v=1792302458&width=1200",
    gallery: [
      "/images/project-arc.png",
      "/images/product-orbit.png",
    ],
    description:
      "قالب يساعد المصممين والمطورين على إطلاق موقع شخصي أنيق وقابل للتخصيص.",
    includes: [
      "صفحات أساسية جاهزة",
      "تصميم متجاوب",
      "ملفات المشروع",
      "تعليمات التخصيص",
    ],
    compatibility: "Next.js",
  },
  {
    slug: "commerce-blocks",
    title: "Commerce Blocks",
    subtitle: "مكونات جاهزة لمتاجر إلكترونية حديثة",
    category: "UI COMPONENTS",
    price: 990,
    oldPrice: 1290,
    image: "https://velvetica.store/cdn/shop/files/8_776edec7-8df7-454b-bfe4-417c60967b5b.webp?v=1792302540&width=1200",
    gallery: [
      "/images/project-north.png",
      "/images/product-orbit.png",
    ],
    description:
      "مجموعة مكونات منظمة تساعدك على بناء صفحات منتجات ومتاجر أكثر وضوحاً.",
    includes: [
      "بطاقات منتجات",
      "أقسام عروض",
      "مكونات واجهات المتجر",
      "أمثلة استخدام",
    ],
    compatibility: "React · Tailwind CSS",
  },
  {
    slug: "sova-social-kit",
    title: "Social Studio",
    subtitle: "قوالب محتوى تحافظ على هوية علامتك",
    category: "SOCIAL TEMPLATES",
    price: 590,
    image: "https://velvetica.store/cdn/shop/files/1_29c09398-fe1e-44d5-b90e-2384b8ff487c.webp?v=1792829640&width=1200",
    gallery: [
      "/images/product-orbit.png",
      "/images/project-arc.png",
    ],
    description:
      "قوالب قابلة للتعديل لتقديم محتوى اجتماعي متناسق مع هوية مشروعك.",
    includes: [
      "قوالب منشورات",
      "قوالب قصص",
      "أنماط ألوان",
      "ملف إرشادات",
    ],
    compatibility: "Figma",
  },
  {
    slug: "brand-foundation",
    title: "Brand Foundation",
    subtitle: "نقطة بداية لهوية بصرية متماسكة",
    category: "BRAND KIT",
    price: 1250,
    image: "https://velvetica.store/cdn/shop/files/1_2.webp?v=1792410688&width=1200",
    gallery: [
      "/images/project-arc.png",
      "/images/product-orbit.png",
    ],
    description:
      "ملفات منظمة تساعدك على ترتيب أساسيات الهوية البصرية وتوثيق استخدامها.",
    includes: [
      "لوحة ألوان",
      "تدرج الخطوط",
      "قوالب عرض الهوية",
      "دليل استخدام",
    ],
    compatibility: "Figma · PDF",
  },
  {
    slug: "landing-page-kit",
    title: "Landing Page Kit",
    subtitle: "أقسام جاهزة لصفحات هبوط واضحة",
    category: "WEB DESIGN",
    price: 1150,
    oldPrice: 1490,
    image: "/images/project-north.png",
    gallery: [
      "/images/project-north.png",
      "/images/project-arc.png",
    ],
    description:
      "مكتبة أقسام تساعدك على تصميم صفحات هبوط مرتبة لمنتجاتك وخدماتك.",
    includes: [
      "أقسام Hero",
      "عرض المميزات",
      "دعوات لاتخاذ إجراء",
      "نماذج صفحات",
    ],
    compatibility: "Figma",
  },
  {
    slug: "portfolio-pro",
    title: "Portfolio Pro",
    subtitle: "اعرض أعمالك بصورة تليق بها",
    category: "PORTFOLIO KIT",
    price: 890,
    image: "/images/project-arc.png",
    gallery: [
      "/images/project-arc.png",
      "/images/product-orbit.png",
    ],
    description:
      "قالب عرض أعمال بتخطيط هادئ يضع المشاريع في المقدمة.",
    includes: [
      "تخطيط صفحة رئيسية",
      "قوالب تفاصيل المشاريع",
      "أنماط عرض الصور",
      "دليل تخصيص",
    ],
    compatibility: "Figma",
  },
  {
    slug: "dashboard-system",
    title: "Dashboard System",
    subtitle: "واجهات لوحات تحكم منظمة",
    category: "DASHBOARD UI",
    price: 1690,
    image: "/images/product-orbit.png",
    gallery: [
      "/images/product-orbit.png",
      "/images/project-north.png",
    ],
    description:
      "أساس تصميمي للوحة تحكم تشمل البيانات والجداول والنماذج والعناصر المتكررة.",
    includes: [
      "عناصر لوحة التحكم",
      "جداول ونماذج",
      "أنماط حالات الواجهة",
      "مكونات متناسقة",
    ],
    compatibility: "Figma",
  },
  {
    slug: "ecommerce-product-pages",
    title: "Product Page Studio",
    subtitle: "صفحات منتجات تركز على التفاصيل",
    category: "ECOMMERCE UI",
    price: 790,
    image: "/images/project-north.png",
    gallery: [
      "/images/project-north.png",
      "/images/product-orbit.png",
    ],
    description:
      "تخطيطات صفحات منتجات تساعد على إبراز الصور والمعلومات والسعر بوضوح.",
    includes: [
      "تخطيط صفحة المنتج",
      "معرض صور",
      "منطقة الأسعار",
      "أقسام التفاصيل",
    ],
    compatibility: "Figma",
  },
  {
    slug: "creative-presentation",
    title: "Creative Deck",
    subtitle: "اعرض فكرتك بتقديم بصري أنيق",
    category: "PRESENTATION",
    price: 650,
    image: "/images/project-arc.png",
    gallery: [
      "/images/project-arc.png",
      "/images/product-orbit.png",
    ],
    description:
      "قالب عرض تقديمي مرن للمشاريع والأفكار والمقترحات الإبداعية.",
    includes: [
      "تخطيطات شرائح",
      "أنماط عناوين",
      "قوالب صور",
      "صفحة إرشادات",
    ],
    compatibility: "Figma",
  },
  {
    slug: "webflow-wireframes",
    title: "Wireframe Library",
    subtitle: "نظّم تجربة المستخدم قبل التطوير",
    category: "WIREFRAMES",
    price: 720,
    image: "/images/product-orbit.png",
    gallery: [
      "/images/product-orbit.png",
      "/images/project-arc.png",
    ],
    description:
      "مكتبة تخطيطات أولية تساعدك على ترتيب محتوى الصفحات وتدفقات الاستخدام.",
    includes: [
      "تخطيطات صفحات",
      "عناصر تنقل",
      "أنماط نماذج",
      "قوالب أولية",
    ],
    compatibility: "Figma",
  },
  {
    slug: "complete-design-toolbox",
    title: "The Design Toolbox",
    subtitle: "مجموعة مختارة لعمل إبداعي أكثر تنظيماً",
    category: "BUNDLE",
    price: 2490,
    oldPrice: 3290,
    image: "/images/project-north.png",
    gallery: [
      "/images/project-north.png",
      "/images/product-orbit.png",
      "/images/project-arc.png",
    ],
    featured: "أفضل قيمة",
    description:
      "حزمة تجمع أدوات تصميم مختارة لتساعدك على تنظيم سير عملك الرقمي.",
    includes: [
      "ملفات تصميم مختارة",
      "مكونات قابلة لإعادة الاستخدام",
      "قوالب عرض",
      "أدلة استخدام",
    ],
    compatibility: "Figma · ملفات مرفقة حسب المنتج",
  },
];



export const formatEGP = (amount: number) =>
  new Intl.NumberFormat("ar-EG", {
    style: "currency",
    currency: "EGP",
    maximumFractionDigits: 0,
  }).format(amount);
