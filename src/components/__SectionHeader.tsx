import Link from 'next/link';
import {useTranslations} from 'next-intl';

export default function __SectionHeader() {
  const t = useTranslations('Global');
  return (
    <header className="top-0 z-20 mie-auto mis-auto pie-4 pis-4 print:relative sm:sticky lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
      <ul
        className="bg-white/90 leading-relaxed backdrop-blur motion-reduce:bg-white motion-reduce:backdrop-blur-none dark:bg-slate-900/90 dark:text-white dark:motion-reduce:bg-slate-900"
        role="presentation"
      >
        <li>
          <Link className="c__visually-hidden" href="#content">
            Skip to main content;
          </Link>
        </li>
        <li>
          <Link className="c__visually-hidden" href="#prev">
            Skip to previous page
          </Link>
        </li>
        <li>
          <Link className="c__visually-hidden" href="#next">
            Skip to next page
          </Link>
        </li>
      </ul>
      <div className="flex items-center justify-between border-slate-200 bg-white/90 backdrop-blur pbe-4 pbs-4 border-be motion-reduce:bg-white motion-reduce:backdrop-blur-none print:border-black dark:border-slate-200/5 dark:bg-slate-900/90 dark:motion-reduce:bg-slate-900">
        <a
          aria-label="This is the official logo for the Quran website at furqan.net"
          className="flex select-none items-center outline-blue-600 mie-3 focus-visible:outline"
          href="/"
        >
          <div className="font-ext rabold  text-2xl pie-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                d="M4.745 3A23.933 23.933 0 003 12c0 3.183.62 6.22 1.745 9M19.5 3c.967 2.78 1.5 5.817 1.5 9s-.533 6.22-1.5 9M8.25 8.885l1.444-.89a.75.75 0 011.105.402l2.402 7.206a.75.75 0 001.104.401l1.445-.889m-8.25.75l.213.09a1.687 1.687 0 002.062-.617l4.45-6.676a1.688 1.688 0 012.062-.618l.213.09"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="hidden bg-gradient-to-r from-slate-800 via-zinc-800 to-stone-800 bg-clip-text text-2xl font-semibold tracking-tight text-transparent print:block print:text-black sm:block dark:from-slate-100 dark:via-zinc-100 dark:to-stone-100 print:dark:text-black">
            furqan.net
          </div>
        </a>
        <div className="c__selector-default print:hidden">
          <label className="c__visually-hidden" htmlFor="nav-reading">
            Choose Reading (Qiraat)
          </label>
          <select
            className="cursor-pointer select-none appearance-none bg-green-400/10 bg-[right_0.75rem_center] text-xs font-semibold leading-5 text-green-700 outline-blue-600 mbs-1 mie-4 pbe-1 pbs-1 pie-3 pis-3 rounded-ie-full rounded-is-full hover:bg-green-400/20 focus-visible:outline print:hidden rtl:bg-[left_0.75rem_center] dark:bg-sky-400/10 dark:text-sky-400 dark:hover:bg-sky-400/20"
            id="nav-reading"
          >
            <option value="ibn_kathir_to_al-bazzi">Bazzi</option>
            <option value="ibn_kathir_to_qunbul">Qunbul</option>
            <option value="asim_to_hafs">Hafs</option>
            <option value="asim_to_shubah">Shubah</option>
            <option selected value="nafi_to_warsh">
              Warsh
            </option>
            <option value="nafi_to_qalun">Qalun</option>
            <option value="abu_amr_to_al-susi">Susi</option>
            <option value="abu_amr_to_al-duri">Duri</option>
          </select>
        </div>
        <nav className="flex grow justify-end print:hidden">
          <div className="mis-2 pbe-2 pbs-1 print:hidden md:hidden">
            <button
              aria-label="Small search button"
              className="flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600"
              type="button"
            >
              <svg
                aria-hidden="true"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                width="24"
              >
                <path d="m19 19-3.5-3.5" />
                <circle cx="11" cy="11" r="6" />
              </svg>
            </button>
          </div>
          <div className="hidden max-w-xs grow select-none print:hidden md:block">
            <button
              aria-label="Large search button"
              className="flex w-full text-start text-sm leading-6 text-slate-400 shadow-sm outline-blue-600 ring-1 ring-slate-900/10 pbe-2 pbs-2 pie-3 pis-2 rounded-ie-md rounded-is-md hover:ring-slate-300 focus-visible:outline dark:bg-slate-800 dark:hover:bg-slate-700 dark:hover:ring-slate-600"
              type="button"
            >
              <div>
                <svg
                  aria-hidden="true"
                  className="flex-none mie-3"
                  fill="none"
                  height="24"
                  width="24"
                >
                  <path
                    d="m19 19-3.5-3.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <circle
                    cx="11"
                    cy="11"
                    r="6"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="grow text-slate-600/80 dark:text-slate-200/60">
                Find anything...
              </div>
              <div>⌘</div>
              <div>K</div>
            </button>
          </div>

          <div className="mis-2 pbe-2 pbs-1 print:hidden">
            <button
              aria-label="Navigation menu button"
              className="flex h-8 w-8 items-center justify-center text-slate-500 outline-blue-600 hover:text-slate-600 focus-visible:outline"
              type="button"
            >
              <svg height="24" width="24">
                <path
                  d="M5 6h14M5 12h14M5 18h14"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
