import { useEffect, useState } from "react"

export default function ToggleTheme ()  {
    const [isDark, setIsDark] = useState(() => {   
          return localStorage.theme === 'dark' ||
           (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    })

    useEffect(() => {
          const root = window.document.documentElement;
        if (isDark) {
            root.classList.add('dark');
            localStorage.theme = 'dark';
        } 
        else {
            root.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }, [isDark])

    return (
        <button
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle theme"
      className="relative w-10 h-5 bg-black rounded-full flex items-center justify-between px-0.5 transition-colors duration-300"
    >
      {/* Sun Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-3 h-3 text-white z-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22" />
        <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
        <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
        <line x1="2" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
        <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
      </svg>

      {/* Moon Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-3 h-3 text-white z-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
      </svg>

      {/* Thumb */}
      <div
        className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full transition-transform duration-300 ${
          isDark ? "translate-x-5 bg-blue-600" : "translate-x-0 bg-white"
        }`}
      ></div>
    </button>
    )
}