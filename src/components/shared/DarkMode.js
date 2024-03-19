import { useState, useEffect } from "react";

export default function useDarkSide() {
  const isBrowser = typeof window !== "undefined";

  const [theme, setTheme] = useState(isBrowser ? localStorage.theme : "light");
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    if (isBrowser) {
      const root = window.document.documentElement;
      root.classList.remove(colorTheme);
      root.classList.add(theme);
      localStorage.setItem("Theme", theme);
    }
  }, [theme, colorTheme, isBrowser]);

  return [colorTheme, setTheme];
}
