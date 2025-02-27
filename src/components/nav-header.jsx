"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

function NavHeader() {
  // Position state for cursor animation
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // Theme state
  const [theme, setTheme] = useState(() => {
    return typeof window !== "undefined" ? localStorage.getItem("theme") || "dark" : "dark";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Smooth scroll handler
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative flex w-full pl-3 justify-between bg-transparent dark:bg-transparent">
      <ul
        className="relative mx-auto flex w-fit rounded-full border-1  backdrop-blur-md border-black dark:border-white dark:bg-transparent"
        onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      >
        <Tab setPosition={setPosition} theme={theme} id="home" handleScroll={handleScroll}>
          Home
        </Tab>
        <Tab setPosition={setPosition} theme={theme} id="about" handleScroll={handleScroll}>
          About
        </Tab>
        <Tab setPosition={setPosition} theme={theme} id="skills" handleScroll={handleScroll}>
          Skills
        </Tab>
        <Tab setPosition={setPosition} theme={theme} id="projects" handleScroll={handleScroll}>
          Projects
        </Tab>
        <Cursor position={position} />
      </ul>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="pr-4 rounded-full transition duration-300 text-black dark:text-white"
      >
        {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
      </button>
    </div>
  );
}

// Updated Tab component
const Tab = ({ children, setPosition, theme, id, handleScroll }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      onClick={() => handleScroll(id)}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-zinc-500 dark:text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

// Cursor remains same
const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-black dark:bg-white md:h-12"
    />
  );
};

export default NavHeader;