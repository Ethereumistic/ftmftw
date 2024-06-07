"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon } from "@heroicons/react/24/outline";

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false);
  //   const { resolvedTheme, setTheme } = useTheme();
  const { theme, setTheme } = useTheme();
  // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) {
      return null;
    }

    const handleToggle = (e) => {
      setTheme(e.target.checked ? "dark" : "light");
    };

  return (
    <div className="inline-flex items-center">
      <label
        htmlFor="themeToggle"
        className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] peer-checked:bg-green-500"
      >
        <input
          type="checkbox"
          id="themeToggle"
          className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
          checked={theme === "dark"}
          onChange={handleToggle}
        />
        <span className="absolute inset-y-0 left-0 z-10 m-1 inline-flex items-center justify-center h-6 w-6 rounded-full bg-white text-gray-400 transition-all peer-checked:left-6 peer-checked:text-green-600">
        <div className={theme === "dark" ? "hidden" : "block"}>☀</div>
        <div className={theme === "dark" ? "block" : "hidden"}>🌑</div>
        </span>
      </label>
    </div>
  );
};

export default ThemeSwitch;
