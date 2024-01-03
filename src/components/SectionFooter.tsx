import Link from 'next/link';
import {useTranslations} from 'next-intl';
import React from 'react';

export default function SectionFooter() {
  const t = useTranslations('Global');
  return (
    <footer
      className="mbs-7 sticky top-[100vh] bg-neutral-200/10 text-xs dark:bg-slate-900/40"
      id="footer"
    >
      <div className="plb-3.5 pli-7 flex items-center justify-between">
        <div className="space-i-6 flex">
          <Link href="/">About</Link>
          <Link href="/">Privacy</Link>
          <Link href="/">Terms</Link>
        </div>
        <div className="space-i-6 flex">
          <div>Light</div>
          <div>English</div>
          {/*<Link href="/">Settings</Link>*/}
        </div>
      </div>
    </footer>
  );
}
