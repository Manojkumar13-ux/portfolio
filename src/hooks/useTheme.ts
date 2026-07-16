"use client";

import { useEffect, useState } from "react";

export function useTheme() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    const isDark = html.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const isDark = mounted && document.documentElement.classList.contains("dark");

  return { isDark, toggle, mounted };
}
