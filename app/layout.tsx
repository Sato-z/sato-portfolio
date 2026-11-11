import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Chakra_Petch, Geist, Geist_Mono } from 'next/font/google'
import { site } from '@/data/content'
import './globals.css'

/* Display font for headings — angular, retro-futurist letterforms. */
const display = Chakra_Petch({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display-face',
})

/* Clean sans for body copy, plus its matching mono for accents. */
const body = Geist({ subsets: ['latin'], variable: '--font-body' })
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono-face' })

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.metaDescription,
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
