"use client";
import Confort from "./comfort";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Snowflake,

} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      <Confort />
      <footer className="relative bg-gradient-to-tr from-sky-900 via-blue-900 to-sky-800 text-white pt-20 pb-10 px-4 sm:px-6 lg:px-10 overflow-hidden">
        {/* ❄️ Ice Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#e0f2ff_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 z-0 animate-pulse"></div>

        {/* ❄️ Animated Snowflakes */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-sky-100 text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: ["0%", "100%"] }}
            transition={{ duration: 6 + Math.random() * 4, repeat: Infinity }}
          >
            ❄️
          </motion.div>
        ))}

        <div className="relative z-10 container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <Snowflake className="h-6 w-6 mr-2 text-sky-300" />
              <h3 className="text-2xl font-bold tracking-wide">CollabCircle</h3>
            </div>
            <p className="text-sky-100 mb-5 leading-relaxed">
              Providing premium air conditioning & refrigeration services and Maintanance. Experience the cool difference.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "https://instagram.com/" },
                { Icon: Facebook, href: "https://facebook.com/" },
                { Icon: FaWhatsapp, href: "https://wa.me/8505924254" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" className="hover:text-blue-300 transition-all">
                  <Icon className="h-5 w-5" />
                </a>
              ))}

            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-xl font-bold mb-4 border-b border-sky-700 pb-2">Quick Links</h4>
            <ul className="space-y-3 text-sky-100 text-sm">
              {['Home', 'About', 'services', 'contact'].map((item) => {
                const path =
                  item === 'Home'
                    ? '/'
                    : item === 'services'
                      ? '/services/repair'
                      : `/${item.toLowerCase()}`;

                return (
                  <li key={item}>
                    <Link
                      href={path}
                      className="text-slate-900 hover:text-sky-600 font-medium text-white"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>

          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="text-xl font-bold mb-4 border-b border-sky-700 pb-2">Services</h4>
            <ul className="space-y-3 text-sky-100 text-sm">
              {["Installation", "Maintanance", "Repair"].map((text, idx) => {
                const path =
                  text === "Maintanance"
                    ? "/services/services"
                    : `/services/${text.toLowerCase()}`;

                return (
                  <li key={idx}>
                    <Link href={path} className="hover:text-white transition-all text-white">
                      › {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="text-xl font-bold mb-4 border-b border-sky-700 pb-2">Contact</h4>
            <ul className="space-y-3 text-sm text-sky-100">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-sky-300" />
                373, Duble Story , Welcome Seelampur Phase-3, Delhi-110053
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-sky-300" />
                <a href="tel:+18001234567" className="hover:text-white">+1 850 592 4254</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-sky-300" />
                <a href="mailto:info@arcticair.com" className="hover:text-white">collabcircle21@gmail.com</a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="relative z-10 mt-14 pt-6 border-t border-sky-700 flex flex-col md:flex-row justify-between items-center text-sm text-sky-200"
        >
          <p className="mb-3 md:mb-0">&copy; {new Date().getFullYear()} ArcticAir. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms", "Sitemap"].map((txt, i) => (
              <Link key={i} href={`/${txt.toLowerCase().replace(" ", "")}`} className="hover:text-white">
                {txt}
              </Link>
            ))}
          </div>
        </motion.div>
      </footer>
    </>
  );
}
