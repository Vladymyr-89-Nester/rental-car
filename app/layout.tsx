import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';

const manrope = Manrope({
  variable: '--font-geist-manrope',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-geist-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RentalCar — Premium Car Rental Service',
  description:
    'Discover our premium car rental service. Choose from a wide selection of vehicles and book your ideal car for your journey.',
  icons: {
    icon: '/сabriolet-1.ico',
  },
  openGraph: {
    title: 'RentalCar — Premium Car Rental Service',
    description:
      'Discover our premium car rental service. Choose from a wide selection of vehicles and book your ideal car for your journey.',
    url: 'https://rental-car-sooty.vercel.app/',
    siteName: 'RentalCar',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RentalCar - Premium Car Rental',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${manrope.variable} ${inter.variable}`}>
        <TanStackProvider>
          <Header />
          <main>{children}</main>
        </TanStackProvider>
      </body>
    </html>
  );
}
