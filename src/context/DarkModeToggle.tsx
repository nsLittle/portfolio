"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`w-10 h-10 p-1 rounded-full border shadow hover:shadow-md transition-all duration-200
        ${isDark ? "bg-white border-gray-300" : "bg-[#444] border-gray-400"}`}>
      <img
        src={isDark ? "/images/light.png" : "/images/dark.png"}
        alt={isDark ? "Light mode icon" : "Dark mode icon"}
        className="w-full h-full object-contain"
      />
    </button>
  );
}
