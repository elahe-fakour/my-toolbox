import { createContext, useEffect, useState } from "react";

export type Theme = "ocean" | "dark";

export const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
} | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "ocean";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () =>
          setTheme((t) => (t === "ocean" ? "dark" : "ocean")),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
