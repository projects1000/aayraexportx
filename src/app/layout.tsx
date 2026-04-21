import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://aayraexportx.com'),
  title: 'AAYRAEXPORTX - Agro Products Exporter',
  description: 'Leading wholesale supplier and exporter of rice, cashew nuts, millet rice, fresh ginger, and turmeric from India.',
  keywords: 'basmati rice exporter, non basmati rice supplier, parboiled rice export, cashew nuts 180 240, millet rice wholesale, fresh ginger export, turmeric exporter India',
  openGraph: {
    title: 'AAYRAEXPORTX - Agro Products Exporter',
    description: 'Leading wholesale supplier and exporter of rice, cashew nuts, millet rice, fresh ginger, and turmeric from India.',
    url: 'https://aayraexportx.com/',
    type: 'website',
    images: [
      {
        url: 'https://aayraexportx.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AAYRAEXPORTX - Agro Products Exporter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAYRAEXPORTX - Agro Products Exporter',
    description: 'Leading wholesale supplier and exporter of rice, cashew nuts, millet rice, fresh ginger, and turmeric from India.',
    images: ['https://aayraexportx.com/og-image.png'],
  },
};

import CursorLightEffect from '@/components/CursorLightEffect';
import Loader from '@/components/ui/Loader';
import ScrollToTop from '@/components/WhatsAppButton';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-900 text-white`} suppressHydrationWarning>
        <Loader />
        <CursorLightEffect />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
