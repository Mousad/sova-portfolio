
import Link from 'next/link'
import { Plus } from 'lucide-react'

const footerGroups = [
  {
    title: 'استكشف',
    links: [
      { label: 'الأعمال', href: '/ar/work' },
      { label: 'المتجر', href: '/ar/store' },
      { label: 'الخدمات', href: '/ar/services' },
      { label: 'عن الاستوديو', href: '/ar/about' },
    ],
  },
  {
    title: 'تواصل',
    links: [
      { label: 'اتصل بنا', href: '/ar/contact' },
      {
        label: 'البريد الإلكتروني',
        href: 'mailto:hello@yourname.design',
      },
    ],
  },
  {
    title: 'الموارد',
    links: [
      { label: 'قوالب التصميم', href: '/ar/store' },
      { label: 'مشاريع الويب', href: '/ar/work' },
    ],
  },
  {
    title: 'السياسات',
    links: [
      { label: 'سياسة الخصوصية', href: '/ar/privacy' },
      { label: 'الشروط والأحكام', href: '/ar/terms' },
    ],
  },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: 'instagram',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: 'facebook',
  },
  {
    label: 'X',
    href: 'https://x.com/',
    icon: 'x',
  },
]

function SocialIcon({ name }: { name: string }) {
  if (name === 'instagram') {
    return (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
      </svg>
    )
  }

  if (name === 'facebook') {
    return (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M13.4 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.2V13H10v8h3.4Z" />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width="17"
      height="17"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 13.9 4.9 22H1.8l7.3-8.4L1.3 2h6.5l4.5 7.5L18.9 2Zm-1.1 17.8h1.7L6.8 4H5L17.8 19.8Z" />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer
      dir="rtl"
      className="border-t border-border bg-secondary/40 text-foreground transition-colors duration-300"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Newsletter */}
        <div className="grid gap-5 border-b border-border py-7 sm:py-9 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <h2 className="text-2xl font-light leading-tight text-foreground sm:text-3xl">
              أفكار تستحق أن تصلك.
            </h2>

            <p className="mt-2 max-w-md text-xs leading-6 text-muted-foreground sm:text-sm">
              اشترك ببريدك الإلكتروني ليصلك كل جديد عن التصميم والبرمجة
              والمنتجات الرقمية.
            </p>
          </div>

          <form
            action="/api/newsletter"
            method="POST"
            className="w-full lg:max-w-md lg:justify-self-end"
          >
            <label
              htmlFor="footer-email"
              className="mb-2 block text-xs font-medium text-foreground"
            >
              بريدك الإلكتروني
            </label>

            <div className="flex items-center gap-3 border-b border-border transition-colors focus-within:border-[#8D9B83]">
              <input
                id="footer-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="name@example.com"
                required
                className="min-w-0 flex-1 bg-transparent py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />

              <button
                type="submit"
                className="shrink-0 rounded-[6px] bg-foreground px-4 py-2 text-xs font-medium text-background transition-colors hover:bg-[#8D9B83] hover:text-white"
              >
                اشتراك
              </button>
            </div>

            <p className="mt-2 text-[10px] leading-5 text-muted-foreground">
              لن نرسل لك إلا التحديثات والمحتوى المفيد.
            </p>
          </form>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-1 gap-x-6 py-5 sm:grid-cols-4 sm:gap-8 sm:py-7">
          {footerGroups.map((group) => (
            <details
              key={group.title}
              className="group border-b border-border last:border-b sm:border-0"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-2 py-3 text-xs font-semibold text-foreground [&::-webkit-details-marker]:hidden sm:mb-3 sm:cursor-default sm:py-0">
                <span>{group.title}</span>

                <Plus
                  size={14}
                  className="shrink-0 text-muted-foreground transition-transform group-open:rotate-45 sm:hidden"
                />
              </summary>

              <div className="flex flex-col items-start gap-3 pb-4 text-xs text-muted-foreground sm:pb-0">
                {group.links.map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    className="transition-colors duration-200 hover:text-[#8D9B83]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </details>
          ))}
        </div>

        {/* Brand and legal */}
        <div className="border-t border-border py-5 sm:py-6">
          <div className="flex justify-center">
            <Link
              href="/ar"
              aria-label="SOVA - الصفحة الرئيسية"
              dir="ltr"
              className="text-4xl font-light tracking-[-0.07em] text-foreground transition-opacity hover:opacity-60 sm:text-5xl"
            >
              SOVA
              <span className="ml-1 text-xs tracking-normal text-[#8D9B83] sm:text-sm">
                ®
              </span>
            </Link>
          </div>

          {/* Social media */}
          <div className="mt-4 flex items-center justify-center gap-5">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-200 hover:border-[#8D9B83] hover:bg-[#8D9B83] hover:text-white"
              >
                <SocialIcon name={icon} />
              </a>
            ))}
          </div>

          {/* Legal links */}
          <div className="mt-4 flex items-center justify-center gap-3 text-[11px] text-muted-foreground">
            <Link
              href="/ar/privacy"
              className="transition-colors hover:text-[#8D9B83]"
            >
              الخصوصية
            </Link>

            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-[#8D9B83]/70"
            />

            <Link
              href="/ar/terms"
              className="transition-colors hover:text-[#8D9B83]"
            >
              الشروط والأحكام
            </Link>
          </div>

          {/* Copyright */}
          <p className="mt-3 text-center text-[10px] text-muted-foreground">
            © {new Date().getFullYear()} استوديو SOVA — جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  )
}
