import { useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    const initialValue = saved;
    return initialValue || "ligth";
  });

  const toggleTheme = () => {
    theme === "ligth" ? setTheme("dark") : setTheme("ligth");
  };
  localStorage.setItem("theme", theme);
  return [theme, toggleTheme];
};

export default useDarkMode;
