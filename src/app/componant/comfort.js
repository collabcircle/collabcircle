"use client";

import { motion } from "framer-motion";
import {useRouter} from "next/navigation";

export default function Confort() {
    const router = useRouter();
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-sky-900 via-blue-900 to-sky-800 text-white relative overflow-hidden">

      {/* ❄️ Radial Snow Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#e0f2ff_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 z-0 animate-pulse"></div>

      {/* ❄️ Floating Snowflakes */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-sky-100 text-xs"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ y: ["0%", "100%"] }}
          transition={{ duration: 8 + Math.random() * 5, repeat: Infinity }}
        >
          ❄️
        </motion.div>
      ))}

      {/* 🎯 Main Content */}
      <div className="container mx-auto text-center relative z-10">
        {/* ✨ Animated Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Upgrade Your Comfort?
        </motion.h2>

        {/* 🧊 Subtext */}
        <motion.p
          className="max-w-2xl mx-auto mb-8 text-sky-100"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Our experts are ready to help you find the perfect cooling solution for your home or business.
        </motion.p>

        {/* 🚀 Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <button className="bg-white text-sky-900 hover:bg-sky-100 px-8 py-3 rounded-md font-medium transition-colors shadow-lg" style={{cursor:'pointer'}} onClick={()=>{
             router.push('/about')
          }}>
            Get In Touch
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-md font-medium transition-colors">
            View All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
