'use client';

import {Tab, Listbox, Transition} from '@headlessui/react';
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/20/solid';
import localFont from 'next/font/local';
import Link from 'next/link';
import React, {Fragment, useState} from 'react';

const myFont = localFont({src: '../../public/font/asim-hafs.woff2'});

const people = [
  {name: 'Abd al-Kafī (5th century)'},
  {name: 'Yaʿqūbi (9th century)'},
  {name: 'Kitāb al-Mabanī'},
  {name: 'Ibn al-Nadīm (10th century)'},
  {name: 'Standard Egyptian Edition (19th century)'},
  {name: 'History of the Quran (19th century)'}
];

const index: any = [
  {
    chapterNumber: 1,
    chapterTitleTranslation: 'The Opening',
    chapterTitleTransliteration: 'al-Fātiḥah',
    chapterStartPage: '1',
    chapterRevelation: 'Meccan',
    chapterVerseNumber: 7,
    chapterPartNumber: 1,
    chapterGroupNumber: 1,
    chapterQuarterNumber: 4
  },
  {
    chapterNumber: 2,
    chapterTitleTranslation: 'The Heifer',
    chapterTitleTransliteration: 'al-Baqarah',
    chapterStartPage: '2',
    chapterRevelation: 'Medinan',
    chapterVerseNumber: 286,
    chapterPartNumber: 1,
    chapterGroupNumber: 1,
    chapterQuarterNumber: 4
  },
  {
    chapterNumber: 3,
    chapterTitleTranslation: 'Family of Imran',
    chapterTitleTransliteration: 'Āl-i ‘Imrān',
    chapterStartPage: '24',
    chapterRevelation: 'Medinan',
    chapterVerseNumber: 200,
    chapterPartNumber: 2,
    chapterGroupNumber: 5,
    chapterQuarterNumber: 4
  },
  {
    chapterNumber: 4,
    chapterTitleTranslation: 'Women',
    chapterTitleTransliteration: 'al-Nisā’',
    chapterStartPage: '32',
    chapterRevelation: 'Medinan',
    chapterVerseNumber: 126,
    chapterPartNumber: 3,
    chapterGroupNumber: 7,
    chapterQuarterNumber: 4
  }
];

export default function LayoutHome() {
  const [selected, setSelected] = useState(people[0]);
  return (
    <main>
      <div className="text-slate-500 dark:text-slate-400">
        {/* ************************************************************************************************************
        Tab Group (Pages, Chapters, Parts, Groups)
        ************************************************************************************************************ */}
        <Tab.Group defaultIndex={6}>
          <div className="flex items-center border-slate-900/10 bg-white/60 backdrop-blur pli-3 border-be xl:pli-0 xl:pis-40 dark:border-slate-50/[0.06] dark:bg-slate-900/75">
            <Tab.List className="flex items-center plb-1 space-i-2">
              <Tab className="plb-2 pli-4 hover:text-slate-900 dark:hover:text-white">
                Pages
              </Tab>
              <Tab className="plb-2 pli-4 hover:text-slate-900 dark:hover:text-white">
                Chapters
              </Tab>
              <Tab className="plb-2 pli-4 hover:text-slate-900 dark:hover:text-white">
                Verses
              </Tab>
              <Tab className="plb-2 pli-4 hover:text-slate-900 dark:hover:text-white">
                Parts
              </Tab>
              <Tab className="plb-2 pli-4 hover:text-slate-900 dark:hover:text-white">
                Groups
              </Tab>
              <Tab className="plb-2 pli-4 hover:text-slate-900 dark:hover:text-white">
                Quarters
              </Tab>
              <Tab className="plb-2 pli-4 hover:text-slate-900 dark:hover:text-white">
                Revelation
              </Tab>
            </Tab.List>
          </div>
          <div className="text-sm mbs-3 pli-7 xl:mie-44 xl:mis-2 xl:pli-0 xl:pis-44">

            {/*<div className={myFont.className}>
              <div className="grid grid-cols-1 gap-y-8 text-left is-[710px] rtl:text-right mlb-10 hafs text-slate-700 dark:text-slate-300/90">
                <div className="flex justify-between">
                  <div>إِنَّ</div>
                  <div>ٱلَّذِينَ</div>
                  <div>كَفَرُوا۟</div>
                  <div>سَوَآءٌ</div>
                  <div>عَلَيْهِمْ</div>
                  <div>ءَأَنذَرْتَهُمْ</div>
                  <div>أَمْ</div>
                  <div>لَمْ</div>
                  <div>تُنذِرْهُمْ</div>
                </div>
                <div className="flex justify-between">
                  <div>لَا</div>
                  <div>يُؤْمِنُونَ</div>
                  <div>٦</div>
                  <div>خَتَمَ</div>
                  <div>ٱللَّهُ</div>
                  <div>عَلَىٰ</div>
                  <div>قُلُوبِهِمْ</div>
                  <div>وَعَلَىٰ</div>
                  <div>سَمْعِهِمْ ۖ</div>
                  <div>وَعَلَىٰٓ</div>
                </div>
                <div className="flex justify-between">
                  <div>أَبْصَـٰرِهِمْ</div>
                  <div>غِشَـٰوَةٌۭ ۖ</div>
                  <div>وَلَهُمْ</div>
                  <div>عَذَابٌ</div>
                  <div>عَظِيمٌۭ</div>
                  <div>٧</div>
                  <div>وَمِنَ</div>
                  <div>ٱلنَّاسِ</div>
                </div>
              </div>
            </div>*/}

            {/* ********************************************************************************************************
            Manuscript Information (Reading, Reader, Publisher, Writing Style)
            ******************************************************************************************************** */}
            <p className="max-is-[600px] mbe-8">
              <strong>Results for:</strong> Kufan Reading ∙ Hafs from Asim ∙
              Publisher King Fahd Complex for the Printing of the Holy Quran
              (1427/2006) ∙ Naskh styles.
            </p>
            <Tab.Panels>
              {/* ******************************************************************************************************
              Tab Panel : Pages
              ****************************************************************************************************** */}
              <Tab.Panel tabIndex={-1}>
                <p className="text-sm font-semibold leading-6 text-sky-500 mbe-2 dark:text-sky-400">
                  Read the Quran
                </p>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mbe-2 dark:text-slate-200">
                  Pages
                </h2>
                <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
                  Table for navigating the 604 pages of the Quran.
                </p>
                <table className="table-fixed divide-gray-300 min-is-full mbe-12 mbs-10 divide-b dark:divide-gray-700">
                  <thead className="text-gray-900 dark:text-white">
                    <tr className="group [&>*:first-child]:plb-3.5 [&>*:last-child]:is-full">
                      <th className="text-center min-is-24" scope="col">
                        Chapter
                      </th>
                      <th
                        className="text-left min-is-52 rtl:text-right"
                        colSpan={2}
                        scope="col"
                      >
                        Title
                      </th>
                      <th className="text-left rtl:text-right" scope="col">
                        Page
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-gray-200 whitespace-nowrap text-gray-500 divide-b dark:divide-gray-800 dark:text-gray-300">
                    <tr className="group [&>*:first-child]:plb-1.5">
                      <td
                        className="text-center group-hover:text-slate-900 group-hover:dark:text-white"
                        translate="no"
                      >
                        1
                      </td>
                      <td
                        className="group-hover:text-slate-900 group-hover:dark:text-white"
                        translate="no"
                      >
                        The Opening
                      </td>
                      <td
                        className="italic group-hover:text-slate-900 group-hover:dark:text-white"
                        translate="no"
                      >
                        al-Fātiḥah
                      </td>
                      <td
                        className="group-hover:text-slate-900 group-hover:dark:text-white"
                        translate="no"
                      >
                        <ol className="flex flex-wrap gap-1 mlb-1">
                          <li value="1">
                            <Link
                              className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-50 hover:rounded-md hover:text-slate-900 hover:shadow-sm hover:ring-1 hover:ring-slate-300 dark:bg-slate-800 hover:dark:text-white"
                              href="/"
                            >
                              1
                            </Link>
                          </li>
                        </ol>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Tab.Panel>
              {/* ******************************************************************************************************
              Tab Panel : Chapters (Sura)
              ****************************************************************************************************** */}
              <Tab.Panel tabIndex={-1}>
                <p className="text-sm font-semibold leading-6 text-sky-500 mbe-2 dark:text-sky-400">
                  Explore the Quran
                </p>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mbe-2 dark:text-slate-200">
                  Chapters
                </h2>
                <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
                  Table for navigating the 114 chapters (<em>sūra</em>, pl.{' '}
                  <em>suwar</em>) of the Quran.
                </p>
                <table className="table-fixed divide-gray-300 min-is-full mbe-12 mbs-10 divide-b dark:divide-gray-700">
                  <thead className="text-gray-900 dark:text-white">
                    <tr className="[&>*:first-child]:plb-3.5 [&>*:last-child]:is-full">
                      <th className="text-center min-is-24" scope="col">
                        Chapter
                      </th>
                      <th
                        className="text-left min-is-52 rtl:text-right"
                        colSpan={2}
                        scope="col"
                      >
                        Title
                      </th>
                      <th
                        className="text-left min-is-40 rtl:text-right"
                        scope="col"
                      >
                        Revelation
                      </th>
                      <th className="text-left rtl:text-right" scope="col">
                        Page
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-gray-200 whitespace-nowrap text-gray-500 divide-b dark:divide-gray-800 dark:text-gray-300">
                    {index.map((data: any) => (
                      <tr key={index.chapterNumber} className="group">
                        <td>
                          <Link
                            className="flex justify-center text-center mlb-1"
                            href="/"
                            translate="no"
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-50 group-hover:rounded-md group-hover:text-slate-900 group-hover:shadow-sm group-hover:ring-1 group-hover:ring-slate-300 dark:bg-slate-800 group-hover:dark:text-white">
                              {data.chapterNumber}
                            </div>
                          </Link>
                        </td>
                        <td translate="no">
                          <Link
                            className="block plb-2.5 group-hover:text-slate-900 group-hover:dark:text-white"
                            href="/"
                            tabIndex={-1}
                          >
                            {data.chapterTitleTranslation}
                          </Link>
                        </td>
                        <td translate="no">
                          <Link
                            className="block italic plb-2.5 group-hover:text-slate-900 group-hover:dark:text-white"
                            href="/"
                            tabIndex={-1}
                          >
                            {data.chapterTitleTransliteration}
                          </Link>
                        </td>
                        <td translate="no">
                          <Link
                            className="block plb-2.5 group-hover:text-slate-900 group-hover:dark:text-white"
                            href="/"
                            tabIndex={-1}
                          >
                            {data.chapterRevelation}
                          </Link>
                        </td>
                        <td translate="no">
                          <Link
                            className="block plb-2.5 group-hover:text-slate-900 group-hover:dark:text-white"
                            href="/"
                            tabIndex={-1}
                          >
                            {data.chapterStartPage}
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Tab.Panel>
              {/* ******************************************************************************************************
              Tab Panel : Verses (Aya)
              ****************************************************************************************************** */}
              <Tab.Panel tabIndex={-1}>
                <p className="text-sm font-semibold leading-6 text-sky-500 mbe-2 dark:text-sky-400">
                  Study the Quran
                </p>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mbe-2 dark:text-slate-200">
                  Verses
                </h2>
                <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
                  Table for navigating the 6,236 verses (<em>āya</em>, pl.{' '}
                  <em>āyāt</em>) of the Quran.
                </p>
                <table className="table-fixed divide-gray-300 min-is-full mbe-12 mbs-10 divide-b dark:divide-gray-700">
                  <thead className="text-gray-900 dark:text-white">
                    <tr className="group [&>*:first-child]:plb-3.5 [&>*:last-child]:is-full">
                      <th className="text-center min-is-24" scope="col">
                        Chapter
                      </th>
                      <th
                        className="text-left min-is-52 rtl:text-right"
                        colSpan={2}
                        scope="col"
                      >
                        Title
                      </th>
                      <th className="text-left rtl:text-right" scope="col">
                        Verse
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-gray-200 whitespace-nowrap text-gray-500 divide-b dark:divide-gray-800 dark:text-gray-300">
                    <tr className="group [&>*:first-child]:plb-1.5">
                      <td
                        className="text-center group-hover:text-slate-900 group-hover:dark:text-white"
                        translate="no"
                      >
                        1
                      </td>
                      <td
                        className="group-hover:text-slate-900 group-hover:dark:text-white"
                        translate="no"
                      >
                        The Opening
                      </td>
                      <td
                        className="italic group-hover:text-slate-900 group-hover:dark:text-white"
                        translate="no"
                      >
                        al-Fātiḥah
                      </td>
                      <td
                        className="group-hover:text-slate-900 group-hover:dark:text-white"
                        translate="no"
                      >
                        <ol className="flex flex-wrap gap-1 mlb-1">
                          <li value="1">
                            <Link
                              className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-50 hover:rounded-md hover:text-slate-900 hover:shadow-sm hover:ring-1 hover:ring-slate-300 dark:bg-slate-800 hover:dark:text-white"
                              href="/"
                            >
                              1
                            </Link>
                          </li>
                          <li value="2">
                            <Link
                              className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-50 hover:rounded-md hover:text-slate-900 hover:shadow-sm hover:ring-1 hover:ring-slate-300 dark:bg-slate-800 hover:dark:text-white"
                              href="/"
                            >
                              2
                            </Link>
                          </li>
                          <li value="3">
                            <Link
                              className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-50 hover:rounded-md hover:text-slate-900 hover:shadow-sm hover:ring-1 hover:ring-slate-300 dark:bg-slate-800 hover:dark:text-white"
                              href="/"
                            >
                              3
                            </Link>
                          </li>
                          <li value="4">
                            <Link
                              className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-50 hover:rounded-md hover:text-slate-900 hover:shadow-sm hover:ring-1 hover:ring-slate-300 dark:bg-slate-800 hover:dark:text-white"
                              href="/"
                            >
                              4
                            </Link>
                          </li>
                          <li value="5">
                            <Link
                              className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-50 hover:rounded-md hover:text-slate-900 hover:shadow-sm hover:ring-1 hover:ring-slate-300 dark:bg-slate-800 hover:dark:text-white"
                              href="/"
                            >
                              5
                            </Link>
                          </li>
                          <li value="6">
                            <Link
                              className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-50 hover:rounded-md hover:text-slate-900 hover:shadow-sm hover:ring-1 hover:ring-slate-300 dark:bg-slate-800 hover:dark:text-white"
                              href="/"
                            >
                              6
                            </Link>
                          </li>
                          <li value="7">
                            <Link
                              className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-50 hover:rounded-md hover:text-slate-900 hover:shadow-sm hover:ring-1 hover:ring-slate-300 dark:bg-slate-800 hover:dark:text-white"
                              href="/"
                            >
                              7
                            </Link>
                          </li>
                        </ol>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Tab.Panel>
              {/* ******************************************************************************************************
              Tab Panel : Parts (Juz)
              ****************************************************************************************************** */}
              <Tab.Panel tabIndex={-1}>
                <p className="text-sm font-semibold leading-6 text-sky-500 mbe-2 dark:text-sky-400">
                  Recite the Quran
                </p>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mbe-2 dark:text-slate-200">
                  Parts
                </h2>
                <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
                  Table for navigating the 30 parts (<em>āya</em>, pl.{' '}
                  <em>āyāt</em>) of the Quran.
                </p>
                <table className="table-fixed divide-gray-300 min-is-full mbe-12 mbs-10 divide-b dark:divide-gray-700">
                  <thead className="text-gray-900 dark:text-white">
                    <tr className="[&>*:first-child]:plb-3.5 [&>*:last-child]:is-full">
                      <th className="text-center min-is-24" scope="col">
                        Chapter
                      </th>
                      <th
                        className="text-left min-is-52 rtl:text-right"
                        colSpan={2}
                        scope="col"
                      >
                        Title
                      </th>
                      <th className="text-center min-is-24" scope="col">
                        Pages
                      </th>
                      <th
                        className="text-left min-is-24 rtl:text-right"
                        scope="col"
                      >
                        Part
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-gray-200 whitespace-nowrap text-gray-500 divide-b dark:divide-gray-800 dark:text-gray-300">
                    <tr className="group">
                      <td translate="no">
                        <ul>
                          <li>
                            <Link
                              className="block text-center plb-2.5 group-hover:text-slate-900 group-hover:dark:text-white"
                              href="/"
                              tabIndex={-1}
                            >
                              1
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="block text-center plb-2.5 group-hover:text-slate-900 group-hover:dark:text-white"
                              href="/"
                              tabIndex={-1}
                            >
                              2
                            </Link>
                          </li>
                        </ul>
                      </td>
                      <td translate="no">
                        <ul>
                          <li>
                            <Link
                              className="block plb-2.5 group-hover:text-slate-900 group-hover:dark:text-white"
                              href="/"
                              tabIndex={-1}
                            >
                              The Opening
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="block plb-2.5 group-hover:text-slate-900 group-hover:dark:text-white"
                              href="/"
                              tabIndex={-1}
                            >
                              The Cow *
                            </Link>
                          </li>
                        </ul>
                      </td>
                      <td translate="no">
                        <ul>
                          <li>
                            <Link
                              className="block italic plb-2.5 group-hover:text-slate-900 group-hover:dark:text-white"
                              href="/"
                              tabIndex={-1}
                            >
                              al-Fātiḥah
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="block italic plb-2.5 group-hover:text-slate-900 group-hover:dark:text-white"
                              href="/"
                              tabIndex={-1}
                            >
                              al-Baqarah
                            </Link>
                          </li>
                        </ul>
                      </td>
                      <td translate="no">
                        <Link
                          className="block text-center plb-2.5 group-hover:text-slate-900 group-hover:dark:text-white"
                          href="/"
                          tabIndex={-1}
                        >
                          1 – 43
                        </Link>
                      </td>
                      <td>
                        <Link className="flex mlb-1" href="/" translate="no">
                          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-50 group-hover:rounded-md group-hover:text-slate-900 group-hover:shadow-sm group-hover:ring-1 group-hover:ring-slate-300 dark:bg-slate-800 group-hover:dark:text-white">
                            1
                          </div>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Tab.Panel>
              {/* ******************************************************************************************************
              Tab Panel : Groups (Hizb)
              ****************************************************************************************************** */}
              <Tab.Panel tabIndex={-1}>
                <p className="text-sm font-semibold leading-6 text-sky-500 mbe-2 dark:text-sky-400">
                  Memorize the Quran
                </p>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mbe-2 dark:text-slate-200">
                  Groups
                </h2>
                <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
                  Table for navigating the 60 groups (<em>ḥizb</em>, pl.{' '}
                  <em>aḥzāb</em>) of the Quran.
                </p>
                <table className="table-fixed divide-gray-300 min-is-full mbe-12 mbs-10 divide-b dark:divide-gray-700">
                  <thead className="text-gray-900 dark:text-white">
                    <tr className="[&>*:first-child]:plb-3.5 [&>*:last-child]:is-full">
                      <th className="text-center min-is-24" scope="col">
                        Chapter
                      </th>
                      <th
                        className="text-left min-is-52 rtl:text-right"
                        colSpan={2}
                        scope="col"
                      >
                        Title
                      </th>
                      <th className="text-center min-is-24" scope="col">
                        Pages
                      </th>
                      <th className="text-center min-is-24" scope="col">
                        Part
                      </th>
                      <th
                        className="text-left min-is-24 rtl:text-right"
                        scope="col"
                      >
                        Group
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-gray-200 whitespace-nowrap text-gray-500 divide-b dark:divide-gray-800 dark:text-gray-300">
                    <tr className="group">
                      <td translate="no">
                        <ul>
                          <li>
                            <Link
                              className="block text-center plb-2.5 group-hover:text-slate-900 group-hover:dark:text-white"
                              href="/"
                              tabIndex={-1}
                            >
                              1
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="block text-center plb-2.5 group-hover:text-slate-900 group-hover:dark:text-white"
                              href="/"
                              tabIndex={-1}
                            >
                              2
                            </Link>
                          </li>
                        </ul>
                      </td>
                      <td translate="no">
                        <ul>
                          <li>
                            <Link
                              className="block plb-2.5 group-hover:text-slate-900 group-hover:dark:text-white"
                              href="/"
                              tabIndex={-1}
                            >
                              The Opening
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="block plb-2.5 group-hover:text-slate-900 group-hover:dark:text-white"
                              href="/"
                              tabIndex={-1}
                            >
                              The Cow *
                            </Link>
                          </li>
                        </ul>
                      </td>
                      <td translate="no">
                        <ul>
                          <li>
                            <Link
                              className="block italic plb-2.5 group-hover:text-slate-900 group-hover:dark:text-white"
                              href="/"
                              tabIndex={-1}
                            >
                              al-Fātiḥah
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="block italic plb-2.5 group-hover:text-slate-900 group-hover:dark:text-white"
                              href="/"
                              tabIndex={-1}
                            >
                              al-Baqarah
                            </Link>
                          </li>
                        </ul>
                      </td>
                      <td translate="no">
                        <Link
                          className="block text-center plb-2.5 group-hover:text-slate-900 group-hover:dark:text-white"
                          href="/"
                          tabIndex={-1}
                        >
                          1 – 23
                        </Link>
                      </td>
                      <td>
                        <Link
                          className="block text-center plb-2.5 group-hover:text-slate-900 group-hover:dark:text-white"
                          href="/"
                          tabIndex={-1}
                        >
                          1
                        </Link>
                      </td>
                      <td>
                        <Link className="flex mlb-1" href="/" translate="no">
                          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-50 group-hover:rounded-md group-hover:text-slate-900 group-hover:shadow-sm group-hover:ring-1 group-hover:ring-slate-300 dark:bg-slate-800 group-hover:dark:text-white">
                            1
                          </div>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Tab.Panel>
              {/* ******************************************************************************************************
              Tab Panel : Quarters (Rub')
              ****************************************************************************************************** */}
              <Tab.Panel tabIndex={-1}>
                <p className="text-sm font-semibold leading-6 text-sky-500 mbe-2 dark:text-sky-400">
                  Learn the Quran
                </p>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mbe-2 dark:text-slate-200">
                  Quarters
                </h2>
                <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
                  Table for navigating the 240 groups (<em>rubʿ al-ḥizb</em>) of
                  the Quran.
                </p>
                <table className="table-fixed divide-gray-300 min-is-full mbe-12 mbs-10 divide-b dark:divide-gray-700">
                  <thead className="text-gray-900 dark:text-white">
                    <tr className="group [&>*:first-child]:plb-3.5 [&>*:last-child]:is-full">
                      <th className="text-center min-is-24" scope="col">
                        Chapter
                      </th>
                      <th
                        className="text-left min-is-52 rtl:text-right"
                        colSpan={2}
                        scope="col"
                      >
                        Title
                      </th>
                      <th className="text-center min-is-24" scope="col">
                        Part
                      </th>
                      <th className="text-center min-is-24" scope="col">
                        Group
                      </th>
                      <th className="text-left rtl:text-right" scope="col">
                        Quarter
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-gray-200 whitespace-nowrap text-gray-500 divide-b dark:divide-gray-800 dark:text-gray-300">
                    <tr className="group [&>*:first-child]:plb-1.5">
                      <td
                        className="text-center group-hover:text-slate-900 group-hover:dark:text-white"
                        translate="no"
                      >
                        <ul>
                          <li className="block text-center plb-2.5 group-hover:text-slate-900 group-hover:dark:text-white">
                            1
                          </li>
                          <li className="block text-center plb-2.5 group-hover:text-slate-900 group-hover:dark:text-white">
                            2
                          </li>
                        </ul>
                      </td>
                      <td
                        className="group-hover:text-slate-900 group-hover:dark:text-white"
                        translate="no"
                      >
                        <ul>
                          <li className="block plb-2.5 group-hover:text-slate-900 group-hover:dark:text-white">
                            The Opening
                          </li>
                          <li className="block plb-2.5 group-hover:text-slate-900 group-hover:dark:text-white">
                            The Cow
                          </li>
                        </ul>
                      </td>
                      <td
                        className="italic group-hover:text-slate-900 group-hover:dark:text-white"
                        translate="no"
                      >
                        <ul>
                          <li className="block italic plb-2.5 group-hover:text-slate-900 group-hover:dark:text-white">
                            al-Fātiḥah
                          </li>
                          <li className="block italic plb-2.5 group-hover:text-slate-900 group-hover:dark:text-white">
                            al-Baqarah
                          </li>
                        </ul>
                      </td>
                      <td
                        className="text-center group-hover:text-slate-900 group-hover:dark:text-white"
                        translate="no"
                      >
                        1
                      </td>
                      <td
                        className="text-center group-hover:text-slate-900 group-hover:dark:text-white"
                        translate="no"
                      >
                        1
                      </td>
                      <td
                        className="group-hover:text-slate-900 group-hover:dark:text-white"
                        translate="no"
                      >
                        <ol className="flex flex-wrap gap-1 mlb-1">
                          <li value="1">
                            <Link
                              className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-50 hover:rounded-md hover:text-slate-900 hover:shadow-sm hover:ring-1 hover:ring-slate-300 dark:bg-slate-800 hover:dark:text-white"
                              href="/"
                            >
                              1st
                            </Link>
                          </li>
                          <li value="2">
                            <Link
                              className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-50 hover:rounded-md hover:text-slate-900 hover:shadow-sm hover:ring-1 hover:ring-slate-300 dark:bg-slate-800 hover:dark:text-white"
                              href="/"
                            >
                              2nd
                            </Link>
                          </li>
                          <li value="3">
                            <Link
                              className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-50 hover:rounded-md hover:text-slate-900 hover:shadow-sm hover:ring-1 hover:ring-slate-300 dark:bg-slate-800 hover:dark:text-white"
                              href="/"
                            >
                              3rd
                            </Link>
                          </li>
                          <li value="4">
                            <Link
                              className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-50 hover:rounded-md hover:text-slate-900 hover:shadow-sm hover:ring-1 hover:ring-slate-300 dark:bg-slate-800 hover:dark:text-white"
                              href="/"
                            >
                              4th
                            </Link>
                          </li>
                        </ol>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Tab.Panel>
              {/* ******************************************************************************************************
              Tab Panel : Revelation
              ****************************************************************************************************** */}
              <Tab.Panel tabIndex={-1}>
                <p className="text-sm font-semibold leading-6 text-sky-500 mbe-2 dark:text-sky-400">
                  Discover the Quran
                </p>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mbe-2 dark:text-slate-200">
                  Revelation
                </h2>
                <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
                  Series of table for navigating recorded chronological orders
                  of the Quran.
                </p>
                <div className="flex items-center mbs-10 space-i-2">
                  <div className="text-lg text-slate-700 dark:text-slate-400">
                    Select a record:
                  </div>
                  <div>
                    <Listbox onChange={setSelected} value={selected}>
                      <div className="relative mt-1">
                        <Listbox.Button className="dark:highlight-white/5 flex cursor-pointer items-center justify-between rounded-full bg-slate-400/10 text-left font-semibold leading-5 text-slate-500 is-full mbe-1 plb-2 pli-4 space-i-4 hover:bg-slate-400/20 rtl:text-right dark:text-slate-400">
                          <div className="truncate">{selected.name}</div>
                          <div>
                            <ChevronUpDownIcon
                              aria-hidden="true"
                              className="h-5 w-5 text-slate-500 dark:text-slate-400"
                            />
                          </div>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute overflow-auto rounded-md bg-white pb-1 text-sm text-slate-700 shadow-lg ring-1 ring-slate-900/5 max-bs-60 is-full min-is-80 mbs-1 focus:outline-none dark:bg-slate-800 dark:text-slate-300">
                            {/*                                                                                                         */}
                            {people.map((person, personIdx) => (
                              <Listbox.Option
                                key={personIdx}
                                className={({active}) =>
                                  `relative cursor-pointer select-none plb-2 pis-10 pie-4 ${
                                    active
                                      ? 'bg-slate-400/20'
                                      : 'text-slate-700 dark:text-slate-300'
                                  }`
                                }
                                value={person}
                              >
                                {({selected}) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? 'font-medium' : 'font-normal'
                                      }`}
                                    >
                                      {person.name}
                                    </span>
                                    {selected ? (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sky-500 pis-3 rtl:right-0 dark:text-sky-400">
                                        <CheckIcon
                                          aria-hidden="true"
                                          className="h-5 w-5"
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                  </div>
                </div>
                <table className="table-fixed divide-gray-300 min-is-full mbe-12 mbs-10 divide-b dark:divide-gray-700">
                  <thead className="text-gray-900 dark:text-white">
                    <tr className="[&>*:first-child]:plb-3.5 [&>*:last-child]:is-full">
                      <th className="text-center min-is-36" scope="col">
                        Chronological
                      </th>
                      <th className="text-center min-is-36" scope="col">
                        Traditional
                      </th>
                      <th
                        className="text-left min-is-52 rtl:text-right"
                        colSpan={2}
                        scope="col"
                      >
                        Title
                      </th>
                      <th
                        className="text-left min-is-20 rtl:text-right"
                        scope="col"
                      >
                        Revelation
                      </th>
                      <th className="text-left rtl:text-right" scope="col">
                        Remark
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-gray-200 whitespace-nowrap text-gray-500 divide-b dark:divide-gray-800 dark:text-gray-300">
                    <tr className="group [&>*:first-child]:plb-1.5">
                      <td
                        className="text-center group-hover:text-slate-900 group-hover:dark:text-white"
                        translate="no"
                      >
                        <Link
                          className="flex justify-center text-center mlb-1"
                          href="/"
                          translate="no"
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-50 group-hover:rounded-md group-hover:text-slate-900 group-hover:shadow-sm group-hover:ring-1 group-hover:ring-slate-300 dark:bg-slate-800 group-hover:dark:text-white">
                            1
                          </div>
                        </Link>
                      </td>
                      <td
                        className="text-center group-hover:text-slate-900 group-hover:dark:text-white"
                        translate="no"
                      >
                        <Link
                          className="flex justify-center text-center mlb-1"
                          href="/"
                          tabIndex={-1}
                          translate="no"
                        >
                          <div className="items-center group-hover:text-slate-900 group-hover:dark:text-white">
                            96
                          </div>
                        </Link>
                      </td>
                      <td
                        className="group-hover:text-slate-900 group-hover:dark:text-white"
                        translate="no"
                      >
                        The Clinging Mass
                      </td>
                      <td
                        className="italic group-hover:text-slate-900 group-hover:dark:text-white"
                        translate="no"
                      >
                        al-‘Alaq
                      </td>
                      <td
                        className="group-hover:text-slate-900 group-hover:dark:text-white"
                        translate="no"
                      >
                        Meccan
                      </td>
                      <td
                        className="overflow-hidden whitespace-normal break-words group-hover:text-slate-900 group-hover:dark:text-white"
                        translate="no"
                      >
                        Only verses 1-5, but not the end, it was revelaed after
                        the Last Pilgrim
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="max-is-[600px]">
                  <h3 className="text-lg font-bold text-slate-900 mbe-2 dark:text-slate-200">
                    General notes on the chronological of the chapters
                  </h3>
                  <ul className="list-disc mlb-3 mis-6">
                    <li>
                      The establishing of any chronology of the chapters does
                      not function as the general ordering principles of the
                      chapters.
                    </li>
                    <li>
                      The chronology of the Quran is transmitted as lists of
                      chapters and as such only available to browsers as
                      separate chapters.
                    </li>
                    <li>
                      The recording in general only considers the beginning of
                      the chapters and not the verses that might have been
                      inserted/added later from different periods.
                    </li>
                    <li>
                      Despite variations in the recordings, there remains a
                      broad consensus about which chapters are Meccan and which
                      are Madinan, and about the approximate chronological
                      order.
                    </li>
                  </ul>
                  <h3 className="text-lg font-bold text-slate-900 mbe-2 dark:text-slate-200">
                    Specific notes about the selected recording
                  </h3>
                  <p>
                    Abū Ṣālih from Ibn ʿAbbās, in a work by al-Yaʿqūbi (9th
                    century)
                  </p>
                  <ul className="list-disc mlb-3 mis-6">
                    <li>Chapter 40 is recorded two times</li>
                    <li>Chapter 84 not recorded</li>
                    <li>Chapter 99 not included in the recording</li>
                    <li>Chapter 109 is not included in the recording</li>
                  </ul>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </main>
  );
}
