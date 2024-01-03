import {Pathnames} from 'next-intl/navigation';

export const locales = ['ar', 'da', 'en'] as const;

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    da: '/pfadnamen',
    ar: '/ohohohoh'
  }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
