'use client';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import contatbanner from '../../images/aboutimages/banner.jpg'

const ContactBanner = () => {
  return (
    <section
  className="w-full relative flex items-center justify-center overflow-hidden"
  style={{
    height: '80vh',
    backgroundImage: `url("${contatbanner.src}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>


      {/* Overlay */}
      <div className="absolute inset-0 bg-blue bg-opacity-40 z-10"></div>

      {/* Content */}
      <div className="z-20 text-center px-4 sm:px-10 max-w-4xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
        >
          <TypeAnimation
            sequence={[
              'Get In Touch With Us',
              1500,
              'We Are Here To Help!',
              1500,
              'Connect With Our Experts',
              1500,
              'Reach Out Anytime',
              1500,
            ]}
            speed={50}
            deletionSpeed={40}
            repeat={Infinity}
            style={{
              backgroundImage:
                'linear-gradient(90deg, #6cc0f5, #a0c4ff, #ff6ec4, #7873f5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
            }}
          />
        </motion.h1>

        {/* <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-blue-800 text-sm sm:text-lg md:text-xl font-medium max-w-2xl mx-auto"
        >
          Whether it’s an inquiry, feedback, or assistance you need — we’re always ready to listen. Drop us a message and we’ll get back to you quickly!
        </motion.p> */}
      </div>

      {/* Responsive Height */}
      <style>
        {`
          @media (max-width: 768px) {
            section {
              height: 50vh !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default ContactBanner;
