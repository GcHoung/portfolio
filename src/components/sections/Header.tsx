"use client";

import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";
interface NavItem {
  id: string;
  name: string;
  href: string;
}

// 菜单
const navItems: NavItem[] = [
  {
    id: "home",
    name: "Home",
    href: "#home",
  },
  {
    id: "projects",
    name: "Projects",
    href: "#projects",
  },
  {
    id: "skills",
    name: "Skills",
    href: "#skills",
  },
  {
    id: "testimonials",
    name: "Testimonials",
    href: "#testimonials",
  },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const { theme, setTheme, mounted } = useTheme();
  const toggleTheme = () => {
    if (theme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const newTheme = isDark ? "light" : "dark";
      setTheme(newTheme);
    } else {
      const newTheme = theme === "dark" ? "light" : "dark";
      setTheme(newTheme);
    }
  };
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);
  if (!mounted) return null;

  return (
    <header className="flex justify-center items-center fixed top-3 w-auto sm:w-full z-10 px-6">
      <div className="flex items-center justify-between gap-8 h-10 rounded-2xl dark:bg-dark-primary/18 bg-background-blur/38 text-primary dark:text-white pl-8 pr-2 sm:pl-4 sm:pr-1 text-sm max-w-xl hover:bg-background-blur/68 dark:hover:bg-dark-primary/28 w-full transition-all slide-in-from-top animate-in duration-700 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex gap-4">
            <Image
              src={
                theme === "system"
                  ? window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "/logo-dark.svg"
                    : "/logo.svg"
                  : theme === "light"
                    ? "/logo.svg"
                    : "/logo-dark.svg"
              }
              width={20}
              height={20}
              alt="Logo"
              className="w-5 h-5"
            />
          </Link>
        </div>
        {/* Navigation links */}
        <div className="flex items-center justify-center space-x-1">
          <nav className="hidden sm:flex justify-end items-center text-primary dark:text-white/50">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className={`border hover:border-primary dark:hover:border-dark-primary/40 duration-300 rounded-full transition-border ${activeSection === item.id ? "border-primary dark:border-dark-primary/40" : "border-white/0"}`}
                >
                  <Link
                    href={item.href}
                    className={`flex rounded-full font-bold text-sm px-2 m-1 hover:bg-primary hover:text-white dark:hover:bg-dark-primary/50 dark:hover:text-white animate-in duration-300 transition-colors ${
                      activeSection === item.id
                        ? "dark:bg-dark-primary/50 bg-primary text-white"
                        : "dark:text-gray-300 text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center justify-center">
            <button
              onClick={toggleTheme}
              className="px-1 flex items-center justify-center rounded-full w-8 h-8 cursor-pointer hover:bg-primary dark:bg-dark-primary/40 dark:hover:text-white bg-background hover:text-white animate-in duration-300 transition-colors"
            >
              {theme === "system" ? (
                window.matchMedia("(prefers-color-scheme: dark)").matches ? (
                  <Moon className="w-4.5 h-4.5" />
                ) : (
                  <Sun className="w-4.5 h-4.5" />
                )
              ) : theme === "light" ? (
                <Sun className="w-4.5 h-4.5" />
              ) : (
                <Moon className="w-4.5 h-4.5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
