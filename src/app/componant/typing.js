'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaSnowflake, FaFan, FaThermometerHalf } from 'react-icons/fa';
import { TypingText } from './TypingText';
import * as THREE from 'three';
import { IciclesCanvas } from './IciclesCanvas';
import { gsap } from 'gsap/gsap-core';
export default function ACAnimatedShowcase() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.animated-line',
        { x: '-100%', opacity: 0 },
        {
          x: '0%',
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: '+=500',
            scrub: 1,
          },
          duration: 1,
          ease: 'power3.out',
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-sky-50 to-blue-100 overflow-hidden" ref={sectionRef}>
      <IciclesCanvas />

      <div className="z-10 relative flex flex-col justify-center items-start px-6 md:px-20 pt-32 space-y-10">
        <TypingText
          phrases={[
            'Cooling Solutions for Every Season',
            'Refrigeration that Never Sleeps',
            'Breathe Easy. Live Cool.',
            'AC Repair, Done Right!',
            'Powerful • Efficient • ArcticAir 🌬️',
          ]}
        />

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl font-medium text-slate-700 max-w-2xl"
        >
          From modern air conditioners to reliable refrigeration systems, ArcticAir brings comfort to your home and business.
        </motion.p>

        <div className="flex space-x-6 mt-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <FaSnowflake className="text-sky-500 w-14 h-14 animate-spin-slow" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <FaFan className="text-blue-400 w-14 h-14 animate-pulse" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <FaThermometerHalf className="text-red-400 w-14 h-14 animate-bounce" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
