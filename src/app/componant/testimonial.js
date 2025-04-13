'use client';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'John Doe',
    videoUrl: '/videos/video1.mp4',
    thumbnail: 'https://t3.ftcdn.net/jpg/10/67/95/60/360_F_1067956098_yJtqFsnnwtrLUm229iK4igJppKBF85qk.jpg',
    description: 'Superb service! Cooling like never before. Highly recommended!',
  },
  {
    name: 'Jane Smith',
    videoUrl: '/videos/video2.mp4',
    thumbnail: 'https://via.placeholder.com/300x200',
    description: 'Fast AC installation, excellent customer support, and great value!',
  },
];

const Testimonial = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePlay = (index) => setPlayingIndex(index);

  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-[-45px] top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-br from-blue-400 to-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
    >
      <FaChevronLeft />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-[-45px] top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-br from-blue-400 to-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
    >
      <FaChevronRight />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white via-blue-100 to-blue-200 py-20">
      <motion.h2
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-5xl font-extrabold text-blue-800 drop-shadow-xl mb-12 tracking-wide"
      >
        ❄️ Hear From Our Coolest Customers ❄️
      </motion.h2>

      <div className="w-[40%] h-[50vh] relative">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden relative transition-transform"
            >
              <div className="relative pb-[56.25%]">
                <img
                  src={testimonial.thumbnail}
                  alt={testimonial.name}
                  className="absolute w-full h-full object-cover top-0 left-0"
                />
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-60 p-4 rounded-full text-white cursor-pointer z-10 hover:scale-110 transition"
                  onClick={() => handlePlay(index)}
                >
                  <FaPlay size={28} />
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-700">{testimonial.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{testimonial.description}</p>
              </div>

              {playingIndex === index && (
                <div className="absolute inset-0 z-20">
                  <video controls autoPlay className="w-full h-full object-cover">
                    <source src={testimonial.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
