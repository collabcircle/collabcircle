'use client';

import React, { useState, useRef, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

import {
  FiMail, FiPhone, FiInstagram, FiFacebook,
  FiMessageCircle, FiX, FiMenu
} from "react-icons/fi";
import { FaSnowflake } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import "animate.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-0 flex flex-col bg-gradient-to-b from-sky-50 to-white">
      {/* Top Info Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-sky-900 to-blue-800 text-white py-2 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Link href="mailto:info@arcticair.com" className="flex items-center text-sm hover:text-sky-200">
              <FiMail className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">info@arcticair.com</span>
            </Link>
            <Link href="tel:+18001234567" className="flex items-center text-sm hover:text-sky-200">
              <FiPhone className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">+1 800 123 4567</span>
            </Link>
          </motion.div>
          <motion.div
            className="flex items-center space-x-3"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          ><Link href="https://instagram.com/your_username" target="_blank" className="hover:text-sky-200"><FiInstagram className="h-4 w-4" /></Link>
          <Link href="https://facebook.com/your.profile.id" target="_blank" className="hover:text-sky-200"><FiFacebook className="h-4 w-4" /></Link>
          <Link href="https://wa.me/919876543210" target="_blank" className="hover:text-sky-200"><FaWhatsapp className="h-4 w-4" /></Link>
          
          </motion.div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header
        ref={headerRef}
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${isScrolled ? "bg-white shadow-md" : "bg-white/90"} backdrop-blur-md py-5 md:py-6 px-4 sm:px-6 lg:px-8 sticky top-0 z-50 transition-all duration-300`}
      >
        <div className="container mx-auto flex justify-between items-center relative">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Link href="/" className="text-2xl font-bold text-slate-900 flex items-center">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <FaSnowflake className="h-7 w-7 mr-2 text-sky-600" />
              </motion.div>
              <span className="text-sky-600">Arctic</span>Air
            </Link>
          </motion.div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          <motion.nav
            className="hidden md:flex items-center space-x-8"
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            
            { /* this is for desktop */['Home', 'About' ,'contact'].map((item) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              return (
                <Link
                  key={item}
                  href={path}
                  className="text-slate-900 hover:text-sky-600 font-medium"
                >
                  {item}
                </Link>
              );
            })}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="text-slate-700 hover:text-sky-600 font-medium">
                Services
              </button>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-full mt-2 w-64 bg-white shadow-xl rounded-xl border border-slate-100 overflow-hidden z-50"
                >
                  {[
                    { name: "Installation", href: "/services/installation" },
                    { name: "Repair & Maintanance", href: "/services/repair" },
                    { name: "more Services", href: "/services/services" },
                  ].map(({ name, href }) => (
                    <Link
                      key={name}
                      href={href}
                      className="block px-5 py-3 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-600"
                    >
                      {name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            <Link href="/contact" className="text-slate-700 hover:text-sky-600 font-medium">
              Contact
            </Link>
          </motion.nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="md:hidden pt-4 pb-2"
          >
            <div className="flex flex-col space-y-3">
            {['Home', 'About' ,'contact'].map((item) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              return (
                <Link
                  key={item}
                  href={path}
                  className="text-slate-900 hover:text-sky-600 font-medium"
                >
                  {item}
                </Link>
              );
            })}


              <details className="text-slate-900">
                <summary className="cursor-pointer font-medium hover:text-sky-600">Services</summary>
                <div className="pl-4 pt-2">
                  {[
                    { name: "Installation", href: "/services/installation" },
                    { name: "Repair & Maintanance", href: "/services/repair" },
                    { name: "more Services", href: "/services/services" },
                  ].map(({ name, href }) => (
                    <Link
                      key={name}
                      href={href}
                      className="block py-2 text-sm hover:text-sky-600"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </details>
            </div>
          </motion.nav>
        )}
      </motion.header>
    </main>
  );
}