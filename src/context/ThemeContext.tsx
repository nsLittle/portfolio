"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
  ReactNode,
} from "react";

type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
    setHasHydrated(true);
  }, []);

  useLayoutEffect(() => {
    if (!hasHydrated) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme, hasHydrated]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  if (!hasHydrated) return null;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
