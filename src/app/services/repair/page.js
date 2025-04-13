"use client";

import Header from '../../componant/header';
import Footer from "../../componant/footer";
import React from "react";
import { TypeAnimation } from "react-type-animation";

// Replace icons with image URLs in the services section
const repairServices = [
  {
    title: "AC Power Issue Repair",
    image: "/power-issue-image.png", // Replace with actual image
    description: "Expert repair for sudden AC power failures, non-starting units, or inconsistent performance issues.",
    includes: ["Power circuit inspection", "Fuse replacement", "Thermal overload check"]
  },
  {
    title: "AC Noise Issue Repair",
    image: "/noise-issue-image.png", // Replace with actual image
    description: "We resolve rattling, buzzing, or humming sounds to restore peaceful AC operation without disturbance.",
    includes: ["Fan and motor inspection", "Loose part tightening", "Vibration reduction"]
  },
  {
    title: "Gas Leakage Repair & Refilling",
    image: "/gas-leakage-image.png", // Replace with actual image
    description: "Fix and refill AC refrigerant with utmost safety and precision to ensure efficient cooling.",
    includes: ["Leakage detection", "Safe refrigerant refilling", "Compressor check"]
  },
  {
    title: "AC Water Leakage Repair",
    image: "/water-leakage-image.png", // Replace with actual image
    description: "Complete drainage system check and repair to stop indoor unit water leakage issues effectively.",
    includes: ["Drain pipe cleaning", "Clog removal", "Insulation inspection"]
  },
  {
    title: "AC Parts Repair",
    image: "/parts-repair-image.png", // Replace with actual image
    description: "Repair or replace faulty components like capacitors, fans, compressors, and sensors with genuine parts.",
    includes: ["Component diagnosis", "Part replacement", "Functionality testing"]
  },
  {
    title: "Cleaning & Replacing Parts",
    image: "/cleaning-parts-image.png", // Replace with actual image
    description: "Deep cleaning of filters and components for improved efficiency, air quality, and unit lifespan.",
    includes: ["Filter cleaning", "Fan blade washing", "Dust removal"]
  }
];

const faqs = [
  {
    question: "Can the problem reoccur after repair?",
    answer: "No, we provide high-quality repair services. If the issue occurs again, you can use our free revisit option within 7 days."
  },
  {
    question: "Where can I find the repair charges?",
    answer: "The exact charges will be communicated after technician inspection. We follow transparent pricing with no hidden costs."
  },
  {
    question: "How long does the AC repair take?",
    answer: "Most repairs are completed the same day. If it's a major issue, it may take 24-48 hours."
  },
  {
    question: "Do you use original parts?",
    answer: "Yes! We use only branded and genuine parts for every repair."
  },
  {
    question: "Are the technicians trained?",
    answer: "Yes, all our technicians are professionally trained and background verified. They are certified in AC repairs."
  },
  {
    question: "Is there a warranty after service?",
    answer: "Yes, we provide a minimum 7-day warranty on all repairs."
  }
];

const Repair = () => {
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
            We provide reliable, affordable, and expert AC repair services. Whether it’s power issues, gas refilling, water leakage, or part replacement — our trained professionals handle it all with precision and care. Let us bring back your cool comfort.
          </p>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="flex flex-col md:flex-row items-center px-6 md:px-20 py-10 gap-10">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-blue-800">
            <span className="inline-block text-red-500">E</span><span className="inline-block text-blue-600">a</span><span className="inline-block text-green-600">c</span><span className="inline-block text-yellow-500">h</span> <span className="inline-block text-purple-500">S</span><span className="inline-block text-indigo-600">o</span><span className="inline-block text-pink-600">l</span><span className="inline-block text-blue-800">u</span><span className="inline-block text-green-700">t</span><span className="inline-block text-red-600">i</span><span className="inline-block text-teal-600">o</span><span className="inline-block text-blue-400">n</span>
          </h2>
          <p className="text-md leading-relaxed text-gray-600">
            Our expert technicians address a wide range of AC problems. From strange noises to gas leaks, every repair is performed with the highest attention to detail. We use state-of-the-art equipment and diagnostics to ensure that your air conditioning system operates at peak efficiency.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img src="/repair-image.png" alt="Repair AC" className="rounded-xl shadow-xl" />
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-t from-blue-50 to-blue-100">
        <h2 className="text-center text-4xl font-bold text-blue-700 mb-12">
          Our Repair Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {repairServices.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-t from-blue-50 to-blue-100 p-6 rounded-2xl shadow-md text-center space-y-4 transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out"
            >
              <img src={service.image} alt={service.title} className="mx-auto w-24 h-24 object-contain" />
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
          {repairServices.map((item, idx) => (
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
        <div className="space-y-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow border border-gray-100"
              style={{ transition: "opacity 0.3s ease-in-out", opacity: 1 }}
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{faq.question}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Repair;
