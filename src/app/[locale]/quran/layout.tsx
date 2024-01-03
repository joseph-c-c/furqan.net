import clsx from 'clsx';
import {Viewport} from 'next';
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import React, {ReactNode} from 'react';
import LayoutHome from '../../../components/LayoutHome';
import Navigation from '../../../components/Navigation';
import SectionHeader from '../../../components/SectionHeader';
import {ThemeProvider} from '../../../components/ThemeProvider';
import {locales} from '../../../config';
import useTextDirection from '../../../useTextDirection';
import '../../styles.css';
import SectionFooter from "../../../components/SectionFooter";
import LayoutDisplay from "../../../components/LayoutDisplay";

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export const viewport: Viewport = {
  themeColor: [
    {media: '(prefers-color-scheme: light)', color: '#FFFFFF'},
    {media: '(prefers-color-scheme: dark)', color: '#000000'}
  ],
  colorScheme: 'light dark'
};

export async function generateMetadata({
  params: {locale}
}: Omit<Props, 'children'>) {
  const t = await getTranslations({locale, namespace: 'Global'});

  return {
    metadataBase: new URL('https://furqan.net'),
    alternates: {
      canonical: '/en',
      languages: {
        ar: '/ar',
        da: '/da'
      }
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    openGraph: {
      title: t('title'),
      url: 'https://furqan.net',
      siteName: 'furqan.net',
      description: t('description'),
      type: 'website',
      locale: t('locale'),
      images: [
        {
          url: 'android-chrome-192x192.png',
          width: 192,
          height: 192
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['android-chrome-192x192.png']
    },
    icons: {
      icon: 'android-chrome-192x192.png',
      shortcut: 'android-chrome-192x192.png',
      apple: 'apple-touch-icon.png',
      other: {
        rel: 'apple-touch-icon.png',
        url: 'apple-touch-icon.png'
      }
    },
    generator: 'Next.js',
    applicationName: 'Next.js',
    referrer: 'origin-when-cross-origin',
    keywords: t('keywords'),
    authors: [{name: t('author'), url: 'https://furqan.net'}],
    title: t('title'),
    description: t('description'),
    creator: 'furqan.net',
    publisher: t('publisher')
  };
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const direction = useTextDirection(locale);

  return (
    <html dir={direction} lang={locale} suppressHydrationWarning>
      <body
        className={clsx(
          'min-h-screen flex bs-full min-bs-dvh min-is-[768px] flex-col bg-white font-sans antialiased dark:bg-black dark:print:text-black print:text-black print:bg-transparent'
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableColorScheme
          enableSystem
          storageKey="theme"
        >
          <SectionHeader />
          <SectionFooter />
          <main>{children}</main>
          <Navigation />
        </ThemeProvider>
        <div className="mbe-20"></div>
      </body>
    </html>
  );
}
