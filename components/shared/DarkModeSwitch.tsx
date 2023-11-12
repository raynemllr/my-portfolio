"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

function DarkModeSwitch() {
  const { theme, setTheme } = useTheme();

  const toggleSwitch = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <Button
      className="hover:animate-spin-slow fixed bottom-5 right-5 h-12 w-12 rounded-full md:bottom-10 md:right-10 md:h-16 md:w-16"
      onClick={toggleSwitch}
    >
      {theme === "light" ? <MoonStar /> : <Sun />}
    </Button>
  );
}

export default DarkModeSwitch;
