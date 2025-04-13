import { useState } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">(
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "dark"
      : "light"
  );
  const { setItem } = useLocalStorage("theme");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setItem(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <header className='py-6 px-3 lg:px-10 flex justify-between shadow-md dark:bg-Dark-Blue '>
      <h1 className='font-bold lg:text-2xl'>Where in the world?</h1>
      <button onClick={() => toggleTheme()} className='flex gap-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          className='size-6 stroke-Very-Dark-Blue dark:fill-White'
        >
          <path
            fillRule='evenodd'
            d='M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z'
            clipRule='evenodd'
          />
        </svg>
        <p>{theme === "dark" ? "Light" : "Dark"} mode</p>
      </button>
    </header>
  );
};

export default Header;
