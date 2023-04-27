"use client";
import { useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"pastel" | "forest">("forest");

  const handleToggle = () => {
    setTheme(theme === "pastel" ? "forest" : "pastel");
    document.body.setAttribute("data-theme", theme);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {theme === "forest" ? "pastel" : "forest"}
      </button>
    </div>
  );
}
