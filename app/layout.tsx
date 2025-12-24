import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase';

export const metadata: Metadata = {
  title: {
    template: '%s | Yalla Masry Academy',
    default: 'Yalla Masry Academy - The Royal Way for Women & Children to Learn Egyptian Arabic',
  },
  description: 'The premier online academy for women and children to master Egyptian Colloquial Arabic with expert female tutors, interactive challenges, and a vibrant, safe community.',
  keywords: ['Learn Egyptian Arabic for women', 'Egyptian Colloquial Arabic for children', 'ECA for women', 'Study Arabic online', 'Female Arabic tutors', 'Egyptian Dialect for kids', 'يلا مصري', 'تعلم العامية المصرية للنساء والأطفال'],
  
  openGraph: {
    title: 'Yalla Masry Academy: The Royal Way for Women & Children to Learn Egyptian Arabic',
    description: 'The fun, safe, and effective way for women and children to master the Egyptian dialect with expert female tutors.',
    type: 'website',
    url: 'https://www.yallamasry.com', 
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Yalla Masry Academy Royal Banner for Women and Children',
      },
    ],
    siteName: 'Yalla Masry Academy',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Yalla Masry Academy: Master the Egyptian Dialect for Women & Children',
    description: 'The fun, gamified platform for women and kids to master Egyptian Colloquial Arabic.',
    images: ['/twitter-image.png'],
  },
  
  metadataBase: new URL('https://www.yallamasry.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // الإبقاء على اللغة الإنجليزية والاتجاه اليساري كما طلبتِ لجمهورك الأجنبي
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@700;900&family=El+Messiri:wght@400;700;900&family=Inter:wght@100..900&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#0d284e" />
      </head>
      <body>
        {/* الحفاظ على الربط بـ Firebase كمكون أساسي للهوية التقنية */}
        <FirebaseClientProvider>
          {children}
        </FirebaseClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
