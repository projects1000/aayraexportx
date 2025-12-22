import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://aayraexportx.com'),
  title: 'AAYRAEXPORTX - Wholesale Eucalyptus Wood Poles Exporter',
  description: 'Leading wholesale supplier and exporter of premium Eucalyptus (Nilgiri) wood poles from India. Export-grade quality for construction, scaffolding, and industrial use.',
  keywords: 'eucalyptus wood poles, nilgiri wood poles, timber export India, wood poles wholesale, scaffolding poles, construction timber, export grade poles',
  openGraph: {
    title: 'AAYRAEXPORTX - Wholesale Eucalyptus Wood Poles Exporter',
    description: 'Leading wholesale supplier and exporter of premium Eucalyptus (Nilgiri) wood poles from India.',
    url: 'https://aayraexportx.com/',
    type: 'website',
    images: [
      {
        url: 'https://aayraexportx.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AAYRAEXPORTX - Eucalyptus Wood Poles Exporter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAYRAEXPORTX - Wholesale Eucalyptus Wood Poles',
    description: 'Leading wholesale supplier and exporter of premium Eucalyptus (Nilgiri) wood poles from India.',
    images: ['https://aayraexportx.com/og-image.png'],
  },
};

import CursorLightEffect from '@/components/CursorLightEffect';
import Loader from '@/components/ui/Loader';
import WhatsAppButton from '@/components/WhatsAppButton';

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
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
