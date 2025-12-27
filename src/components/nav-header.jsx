"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Home, User, Code2, Award, FolderGit2, BookOpen } from "lucide-react";

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
    <div className="relative flex w-full items-center justify-center pl-2 pr-2 bg-transparent dark:bg-transparent overflow-hidden">
      <div className="overflow-x-auto no-scrollbar flex justify-center">
        <ul
          className="relative flex w-fit min-w-max rounded-full border border-black dark:border-white backdrop-blur-md bg-white/10 dark:bg-black/10"
          onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
        >
          <Tab setPosition={setPosition} theme={theme} id="home" handleScroll={handleScroll}>
            <Home className="w-5 h-5 md:hidden" />
            <span className="hidden md:block">Home</span>
          </Tab>
          <Tab setPosition={setPosition} theme={theme} id="about" handleScroll={handleScroll}>
            <User className="w-5 h-5 md:hidden" />
            <span className="hidden md:block">About</span>
          </Tab>
          <Tab setPosition={setPosition} theme={theme} id="skills" handleScroll={handleScroll}>
            <Code2 className="w-5 h-5 md:hidden" />
            <span className="hidden md:block">Skills</span>
          </Tab>
          <Tab setPosition={setPosition} theme={theme} id="certifications" handleScroll={handleScroll}>
            <Award className="w-5 h-5 md:hidden" />
            <span className="hidden md:block">Certs</span>
          </Tab>
          <Tab setPosition={setPosition} theme={theme} id="projects" handleScroll={handleScroll}>
            <FolderGit2 className="w-5 h-5 md:hidden" />
            <span className="hidden md:block">Projects</span>
          </Tab>
          <Tab setPosition={setPosition} theme={theme} id="articles" handleScroll={handleScroll}>
            <BookOpen className="w-5 h-5 md:hidden" />
            <span className="hidden md:block">Articles</span>
          </Tab>
          <Cursor position={position} />
        </ul>
      </div>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="absolute right-4 p-2 shrink-0 rounded-full transition duration-300 text-black dark:text-white cursor-pointer z-50"
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
      className="relative z-10 block cursor-pointer px-2.5 py-2 text-xs font-medium uppercase text-zinc-500 dark:text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
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
      className="absolute z-0 inset-y-0 rounded-full bg-black dark:bg-white"
    />
  );
};

export default NavHeader;

