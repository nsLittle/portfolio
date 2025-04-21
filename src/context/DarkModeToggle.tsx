"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function ToggleThemeButton() {
  const { theme, toggleTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const iconSrc = theme === "dark" ? "/images/light.png" : "/images/dark.png";

  return (
    <button
      onClick={toggleTheme}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      className={`w-10 h-6 flex items-center justify-center rounded-full shadow-sm hover:shadow-md transition
    ${
      theme === "dark"
        ? "bg-[#f0f0e6] border-[#ddd]"
        : "bg-[#444] border-[#555]"
    }`}>
      <Image src={iconSrc} alt="Toggle theme" width={16} height={16} />
    </button>
  );
}
