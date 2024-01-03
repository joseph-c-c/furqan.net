'use client';

import {useTheme} from 'next-themes';

function ThemeToggle() {
  const {theme, setTheme} = useTheme();

  return (
    <button
      className="mt-16 rounded-md bg-black px-4 py-2 font-semibold text-white dark:bg-white dark:text-black"
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
    >
      Change Theme
    </button>
  );
}

export default ThemeToggle;
