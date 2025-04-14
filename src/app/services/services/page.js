"use client";

import Header from '../../componant/header';
import Footer from "../../componant/footer";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import Image from 'next/image';
import one from '../../images/one.jpeg'; // Replace with actual image URL
// Replace icons with image URLs in the services section
const otherServices = [
  {
    title: "Jat AC Services",
    image: one, // Replace with actual image
    description: "Premium AC solutions by expert Jat technicians ensuring strong performance and reliability.",
    includes: ["AC installation & repair", "General maintenance", "Fast doorstep service"]
  },
  {
    title: "AC Cooling Issue Service",
    image: one, // Replace with actual image
    description: "We fix weak cooling issues quickly and ensure your AC delivers peak performance again.",
    includes: ["Coolant check", "Filter cleaning", "Thermostat calibration"]
  },
  {
    title: "Motors Maintenance Service",
    image: one, // Replace with actual image
    description: "Smooth motor operation with timely checks and lubrication to avoid breakdowns.",
    includes: ["Motor lubrication", "Fan motor testing", "Noise and heat check"]
  },
  {
    title: "Compressor Maintenance",
    image: one, // Replace with actual image
    description: "Keep your AC’s heart healthy with our expert compressor care and servicing.",
    includes: ["Compressor health check", "Refrigerant pressure test", "Noise inspection"]
  },
  {
    title: "Fridge Gas Refilling",
    image: one, // Replace with actual image
    description: "Refilling refrigerant gas to restore effective cooling in all types of refrigerators.",
    includes: ["Leak test", "Refill with accurate quantity", "Cooling performance check"]
  },
  {
    title: "Refrigerator Cooling Issue Fix",
    image: one, // Replace with actual image
    description: "Repair weak cooling issues in refrigerators for long-lasting freshness and performance.",
    includes: ["Thermostat check", "Evaporator coil inspection", "Fan function test"]
  },
  {
    title: "Fridge Parts Maintenance",
    image: one, // Replace with actual image
    description: "We repair and replace faulty fridge parts like fans, coils, and compressors with quality spares.",
    includes: ["Component diagnosis", "Genuine part replacement", "Post-repair testing"]
  }
];
const serviceFaqData = [
  {
    question: "What does Jat AC Services include?",
    answer:
      "Jat AC Services include complete solutions for air conditioner issues such as installation, repair, and periodic maintenance. Our expert technicians provide fast, doorstep service with trusted tools and methods. Whether your AC isn’t cooling, making noise, or requires seasonal service, our team ensures reliable support and long-lasting performance. The service is suitable for both window and split AC units across residential or commercial properties with affordable rates and top-quality parts."
  },
  {
    question: "How do you resolve AC cooling issues?",
    answer:
      "We begin with a complete inspection of the AC unit to identify weak cooling sources. Common reasons include low refrigerant levels, dirty filters, or faulty thermostats. Once diagnosed, we clean or replace the air filters, refill gas if needed, and recalibrate the thermostat. Our goal is to bring your AC back to optimal performance with the right airflow and temperature control, ensuring consistent and efficient cooling all around."
  },
  {
    question: "What is included in Motors Maintenance Service?",
    answer:
      "Our Motors Maintenance Service focuses on ensuring smooth and noise-free motor operation inside the AC unit. We check for signs of wear, overheating, or dirt buildup. Technicians lubricate the motors, tighten any loose parts, and test for irregular sounds. If motor issues are found early, costly breakdowns can be avoided. This maintenance not only extends the motor's life but also keeps the entire system energy-efficient and safe to operate."
  },
  {
    question: "Why is Compressor Maintenance important?",
    answer:
      "The compressor is the heart of your air conditioning system. Regular maintenance helps avoid pressure imbalances, overheating, and eventual failure. Our service involves checking refrigerant levels, testing the electrical components, and inspecting noise levels. A healthy compressor improves cooling efficiency and extends the life of your entire AC unit. Ignoring compressor issues can lead to expensive replacements or gas leakage, so timely servicing is highly recommended for hassle-free performance."
  },
  {
    question: "When should I refill refrigerator gas?",
    answer:
      "You should refill the refrigerator gas when you notice a drop in cooling performance, such as food spoiling quickly or ice not forming. Our technicians first test for leaks, then safely refill the gas using the correct type and amount of refrigerant. This ensures the system runs efficiently without harming internal components. Regular usage and minor leaks may cause gradual gas loss, so timely refilling is essential for continued freshness and energy efficiency."
  },
  {
    question: "How do you fix cooling issues in refrigerators?",
    answer:
      "Cooling issues in refrigerators are usually caused by problems with the thermostat, evaporator coils, or fan. Our service begins with diagnosing the root cause using modern tools. We then clean or repair clogged coils, calibrate the thermostat, and ensure the internal fan is working properly. This process restores proper air circulation and cooling, preventing food spoilage and maintaining the correct temperature throughout the fridge compartments for optimal storage."
  },
  {
    question: "What’s included in Fridge Parts Maintenance?",
    answer:
      "Fridge Parts Maintenance involves inspecting, repairing, or replacing components like fans, sensors, coils, and compressors. We begin with a complete system check to detect worn or damaged parts. If replacement is needed, only genuine and high-performance spares are used. After repairs, thorough testing is conducted to confirm smooth operation. This service improves energy efficiency, prevents unexpected breakdowns, and increases the overall life of your refrigerator. It is a must for long-term appliance care."
  }
];

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
    <Header/>
    <div className="w-full bg-gradient-to-br from-white via-blue-100 to-blue-200 overflow-hidden">
      {/* Banner Section */}
      <section className="h-[80vh] flex items-center justify-center px-4 text-center">
        <div>
          <TypeAnimation
            sequence={["Trusted AC Repair Experts for Every Problem", 2000, ""]}
            wrapper="h1"
            speed={50}
            className="text-[3rem] md:text-[5rem] font-bold text-blue-600"
            repeat={Infinity}
          />
          <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-700">
          We deliver expert, affordable AC repair solutions tailored to your needs. From power failures and gas refills to water leaks and part replacements — our skilled technicians handle everything with precision. Trust us to restore your cooling comfort quickly and efficiently.</p>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="flex flex-col md:flex-row items-center px-6 md:px-20 py-10 gap-10">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-blue-800">
            <span className="inline-block text-red-500">E</span><span className="inline-block text-blue-600">a</span><span className="inline-block text-green-600">c</span><span className="inline-block text-yellow-500">h</span> <span className="inline-block text-purple-500">S</span><span className="inline-block text-indigo-600">o</span><span className="inline-block text-pink-600">l</span><span className="inline-block text-blue-800">u</span><span className="inline-block text-green-700">t</span><span className="inline-block text-red-600">i</span><span className="inline-block text-teal-600">o</span><span className="inline-block text-blue-400">n</span>
          </h2>
          <p className="text-md leading-relaxed text-gray-600">
          Our expert technicians solve a variety of AC problems, including cooling issues, gas leaks, and unusual noises. We use advanced tools and genuine parts to ensure reliable, long-lasting repairs. Your AC’s performance and comfort are restored with precision, speed, and complete care.         </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image src={one} height={500} width={500} alt="Repair AC" className="rounded-xl shadow-xl" />
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-t from-blue-50 to-blue-100">
        <h2 className="text-center text-4xl font-bold text-blue-700 mb-12">
          lets Review More Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {otherServices.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-t from-blue-50 to-blue-100 p-6 rounded-2xl shadow-md text-center space-y-4 transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out"
            >
              <Image src={service.image} width={500} height={500} alt={service.title} className="mx-auto w-24 h-24 object-contain" />
              <h3 className="text-xl font-semibold text-blue-700">{service.title}</h3>
              <p className="text-gray-600 text-smc text-gray-800">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Include Section */}
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">What We Include</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {otherServices.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-t from-blue-50 to-blue-100 shadow-xl p-6 rounded-xl border border-blue-100 hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out"
              style={{ transition: "transform 0.3s ease-in-out" }}
            >
              <div className="text-2xl font-bold text-blue-600 mb-2">{item.title}</div>
              <p className="text-gray-500 mb-3">Detailed service breakdown with all essentials covered:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {item.includes.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-blue-50 px-6 md:px-20 py-16">
  <h2 className="text-center text-3xl font-bold text-blue-700 mb-10">Frequently Asked Questions</h2>
  <div className="space-y-4 max-w-4xl mx-auto">
    {serviceFaqData.map((faq, index) => (
      <div
        key={index}
        className="bg-white border border-gray-100 rounded-xl shadow"
      >
        <button
          onClick={() =>
            setActiveIndex(index === activeIndex ? null : index)
          }
          className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
        >
          <span className="text-lg font-medium text-blue-600">{faq.question}</span>
          <svg
            className={`w-5 h-5 transform transition-transform duration-300 ${
              activeIndex === index ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            activeIndex === index ? "max-h-96 p-5 pt-0" : "max-h-0"
          }`}
        >
          <p className="text-sm text-gray-600 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

    </div>
    <Footer/>
    </>
  );
};

export default Index;
