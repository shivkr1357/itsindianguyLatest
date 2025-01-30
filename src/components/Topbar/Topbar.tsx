"use client";
import React, { useState } from "react";
import { useThemeState } from "@/context/ThemeContext";
import Link from "next/link";
import { WiDaySunny, WiMoonAltWaxingCrescent4 } from "react-icons/wi";
import { HiMenu, HiX } from "react-icons/hi";

const Topbar = () => {
   const { customTheme, toggleTheme } = useThemeState();
   const [drawerOpen, setDrawerOpen] = useState(false);

   const menuItems = (
      <div className="flex flex-col sm:flex-row items-center gap-6">
         <Link href="/" className="hover:text-primary-500 transition-colors">
            <span className={customTheme === "dark" ? "text-white" : "text-primary-500"}>
               ItsIndianGuy
            </span>
         </Link>
         <Link href="/interview-qa" className="hover:text-primary-500 transition-colors">
            <span className={customTheme === "dark" ? "text-white" : "text-primary-500"}>
               InterviewQA
            </span>
         </Link>
         <Link href="https://blog.itsindianguy.in" target="blank" className="hover:text-primary-500 transition-colors">
            <span className={customTheme === "dark" ? "text-white" : "text-primary-500"}>
               Blog
            </span>
         </Link>
         <Link href="https://portfolio.itsindianguy.in" target="blank" className="hover:text-primary-500 transition-colors">
            <span className={customTheme === "dark" ? "text-white" : "text-primary-500"}>
               Portfolio
            </span>
         </Link>
         <Link href="/memes" className="hover:text-primary-500 transition-colors">
            <span className={customTheme === "dark" ? "text-white" : "text-primary-500"}>
               Memes
            </span>
         </Link>
         <Link href="/about" className="hover:text-primary-500 transition-colors">
            <span className={customTheme === "dark" ? "text-white" : "text-primary-500"}>
               AboutUs
            </span>
         </Link>
         <Link href="/contact-us" className="hover:text-primary-500 transition-colors">
            <span className={customTheme === "dark" ? "text-white" : "text-primary-500"}>
               ContactUs
            </span>
         </Link>
      </div>
   );

   return (
      <nav
         className={`fixed top-0 w-full z-50
            ${customTheme === "dark" ? "bg-neutral-900/90 backdrop-blur-md" : "bg-white/90 backdrop-blur-md"} shadow-md`}
      >
         <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
               {/* Theme Toggle Button */}
               <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg transition-colors
                     ${customTheme === "dark" 
                        ? "hover:bg-neutral-800 text-white" 
                        : "hover:bg-gray-100 text-primary-500"
                     }`}
               >
                  {customTheme === "light" ? (
                     <WiMoonAltWaxingCrescent4 size={24} />
                  ) : (
                     <WiDaySunny size={24} />
                  )}
               </button>

               {/* Mobile Menu Button */}
               <button
                  className="sm:hidden p-2 rounded-lg"
                  onClick={() => setDrawerOpen(!drawerOpen)}
               >
                  {drawerOpen ? (
                     <HiX size={24} className={customTheme === "dark" ? "text-white" : "text-primary-500"} />
                  ) : (
                     <HiMenu size={24} className={customTheme === "dark" ? "text-white" : "text-primary-500"} />
                  )}
               </button>

               {/* Desktop Navigation */}
               <div className="hidden sm:flex items-center">
                  {menuItems}
               </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {drawerOpen && (
               <div className="sm:hidden py-4">
                  <div className="flex flex-col items-center space-y-4">
                     {menuItems}
                  </div>
               </div>
            )}
         </div>
      </nav>
   );
};

export default Topbar;
