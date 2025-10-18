import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Captain Tracy - Gulf Coast Charter Fishing | Family Fishing Adventures',
  description: 'Experience unforgettable family fishing adventures with Captain Tracy. 50+ years of Gulf Coast fishing expertise. Coming soon - book your charter fishing experience.',
  keywords: 'charter fishing, Gulf Coast fishing, family fishing, fishing charters, Captain Tracy, deep sea fishing, fishing trips, fishing guides',
  openGraph: {
    title: 'Captain Tracy - Gulf Coast Charter Fishing',
    description: 'Family fishing adventures with 50+ years of Gulf Coast expertise',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}