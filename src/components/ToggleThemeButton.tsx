"use client";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function ToggleThemeButton() {
  const { theme, toggleTheme } = useTheme();

  const iconSrc = theme === "dark" ? "/images/light.png" : "/images/dark.png";

  return (
    <button onClick={toggleTheme} className="p-2 hover:opacity-80 transition">
      <Image src={iconSrc} alt="Toggle theme" width={32} height={32} />
    </button>
  );
}
