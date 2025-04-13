'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import  Image from 'next/image';
const AboutBanner = () => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-r from-white via-blue-100 to-blue-200 relative overflow-hidden p-4">
      {/* Top Typing Effect Heading */}
      <div className="text-center mt-10">
        <motion.h1
          className="text-[60px] md:text-[100px] font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typewriter
            options={{
              strings: ['Welcome to Our Company', 'We Know Air Like No One Else', 'Your Cooling Partner'],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </motion.h1>
      </div>

      {/* Background Image with Description */}
      <div className="mt-10 relative h-[50vh] md:h-[80vh] w-full">
        <Image
          src="/images/about-bg.jpg"
          alt="About Background"
          className="w-full h-full object-cover rounded-xl shadow-xl"
        />
        <div className="absolute inset-0 bg-black/40 flex justify-center items-center px-4 md:px-20 text-white text-center">
          <motion.p
            className="text-xl md:text-3xl font-medium"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            We provide high-end air conditioning solutions tailored to your comfort, backed by years of experience.
          </motion.p>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-20 px-4 md:px-20">
        {/* Left - Text */}
        <motion.div
          className="flex-1 py-4"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">Who We Are</h2>
          <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed">
            With <span className="text-blue-500 text-2xl font-bold">over a decade of experience</span> in AC 
            <span className="text-red-500"> installation</span>, <span className="text-green-600">repair</span>, and 
            <span className="text-purple-500"> maintenance</span>, we specialize in residential, commercial, and industrial air 
            conditioning services. Our team is skilled in handling top brands, and we ensure fast, reliable, and affordable 
            cooling solutions.
          </p>
          <p className="text-lg md:text-xl font-medium text-gray-700 mt-4 leading-relaxed">
            From advanced <span className="text-blue-400 text-xl font-semibold">diagnostics</span> to energy-efficient 
            <span className="text-yellow-600"> installations</span>, we deliver services with a passion for 
            <span className="text-red-400 font-bold"> excellence</span> and a commitment to keeping your environment cool 
            and comfortable.
          </p>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          className="flex-1"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/about-side.png"
            alt="Team Working"
            className="w-full h-auto rounded-xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBanner;
