'use client'
import React, { useEffect } from "react";
import Image from "next/image";

const About2 = () => {
  useEffect(() => {
    const animatedItems = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-animation");
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedItems.forEach(item => observer.observe(item));
  }, []);

  return (
    <>
      {/* Embedded CSS directly in the component */}
      <style>
        {`
          .animate-on-scroll {
            opacity: 0;
            transform: translateY(40px);
            transition: all 1s ease;
          }
          .animate-on-scroll.from-left {
            transform: translateX(-40px);
          }
          .animate-on-scroll.from-right {
            transform: translateX(40px);
          }
          .show-animation {
            opacity: 1 !important;
            transform: translate(0, 0) !important;
          }
        `}
      </style>

      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 bg-gradient-to-br from-white via-blue-100 to-blue-200">
        <div className="lg:w-10/12 w-full animate-on-scroll">
          <p className="font-normal text-sm leading-3 text-blue-700 hover:text-blue-800 cursor-pointer">About</p>
          <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-blue-900 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">
            We provide premium Air Conditioning Solutions for every need
          </h2>
          <p className="font-normal text-base leading-6 text-gray-800 mt-6">
            We are specialized in <span className="text-blue-700 font-semibold">AC Installation</span>,{" "}
            <span className="text-red-500 font-semibold">Maintenance</span>,{" "}
            <span className="text-green-600 font-semibold">Repair Services</span>,{" "}
            and <span className="text-purple-500 font-semibold">Commercial Solutions</span>. Our mission is to provide top-tier comfort and cooling with expert solutions and customer satisfaction at the heart of everything we do.
          </p>
        </div>

        <div className="lg:mt-14 sm:mt-10 mt-12 animate-on-scroll">
          <Image className="lg:block hidden w-full" src="https://i.ibb.co/GvwJnvn/Group-736.png" alt="Team working" />
          <Image className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/5sZTmHq/Rectangle-116.png" alt="Team working" />
          <Image className="sm:hidden block w-full" src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png" alt="Team working" />
        </div>

        <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
          <div className="w-full xl:w-5/12 lg:w-6/12 animate-on-scroll from-left">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-blue-900">Who We Are</h2>
            <p className="font-normal text-base leading-6 text-gray-800 mt-4">
              With over <span className="text-yellow-600 font-semibold">10+ years</span> of experience, we are experts in{" "}
              <span className="text-red-500 font-semibold">Air Conditioner Installation</span>,{" "}
              <span className="text-green-600 font-semibold">System Maintenance</span>,{" "}
              <span className="text-blue-700 font-semibold">Troubleshooting & Repairs</span>, and{" "}
              <span className="text-purple-500 font-semibold">AC Sales</span>. We prioritize efficient, reliable, and quick solutions to ensure your indoor comfort all year round.
            </p>
            <p className="font-normal text-base leading-6 text-gray-800 mt-6">
              From compact residential units to large-scale commercial systems, our team delivers customized climate solutions with unmatched dedication and skill.
            </p>
          </div>

          <div className="lg:flex items-center w-full lg:w-1/2 animate-on-scroll from-right">
            <Image className="lg:block hidden w-full" src="https://i.ibb.co/2kxWpNm/Group-740.png" alt="AC team" />
            <Image className="lg:hidden sm:block hidden w-full h-3/4" src="https://i.ibb.co/ZLgK3NQ/Group-788.png" alt="AC team" />
            <Image className="sm:hidden block w-full" src="https://i.ibb.co/9g2R7Xr/Group-803.png" alt="AC team" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About2;
