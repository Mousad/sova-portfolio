
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { CartProvider } from '@/components/cart-context'

export const metadata: Metadata = {
  title: 'استوديو SOVA   الرقمي   ',
  description:
    'استوديو مستقل للتصميم والتطوير الرقمي، يصنع مواقع ومنتجات رقمية مدروسة.',
  icons: {
    icon: '/images/llogo-lig.jpg',
    shortcut: '/images/logo-lig.jpg',
    apple: '/images/logo-lig.jpg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f7f2' },
    { media: '(prefers-color-scheme: dark)', color: '#171816' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        <CartProvider>{children}</CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
