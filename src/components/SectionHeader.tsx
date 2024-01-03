'use client';

import {Listbox, Transition} from '@headlessui/react';
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import React, {Fragment, useState} from 'react';

const people = [
  {name: 'Hafs from Asim I'},
  {name: 'Hafs from Asim II'},
  {name: 'Al-Bazzi I'},
  {name: 'Warsh from Nafi I'}
];

export default function SectionHeader2() {
  const [selected, setSelected] = useState(people[0]);
  return (
    <header className="sticky block-start-0 z-40 is-full bg-white/60 backdrop-blur dark:bg-slate-900/75">
      <div className="border-slate-900/10 plb-5 pli-7 border-be dark:border-slate-300/10">
        <div className="relative flex select-none items-center space-i-6">
          <Link className="xl:mie-8 xl:mis-8" href="/" tabIndex={-1}>
            <Image
              alt="Website logo"
              height={60}
              priority
              src="/logo.svg"
              width={60}
            />
          </Link>
          <Link href="/">
            <h1 className="whitespace-nowrap text-3xl font-semibold  tracking-tight">
              The Holy Quran
            </h1>
            <div className="min-is-0 whitespace-nowrap leading-none text-slate-500 pis-1 dark:text-slate-400">
              furqan.net/{/*{t('locale')}*/}
            </div>
          </Link>
          <div className="mbe-3">
            <Listbox onChange={setSelected} value={selected}>
              <div className="relative mt-1">
                <Listbox.Button
                  className="dark:highlight-white/5 flex cursor-pointer items-center justify-between rounded-full bg-slate-400/10 text-left font-semibold leading-5 text-slate-500 is-full mbe-1 plb-2 pli-4 space-i-4 hover:bg-slate-400/20 rtl:text-right dark:text-slate-400">
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
                  <Listbox.Options
                    className="min-is-60 absolute overflow-auto rounded-md bg-white pb-1 text-sm text-slate-700 shadow-lg ring-1 ring-slate-900/5 max-bs-60 is-full mbs-1 focus:outline-none dark:bg-slate-800 dark:text-slate-300">
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
                              <span
                                className="absolute inset-y-0 left-0 flex items-center pl-3 text-sky-500 dark:text-sky-400 pis-3 rtl:right-0">
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
      </div>
    </header>
  );
}
