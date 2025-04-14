'use client'
import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaCogs, FaFan, FaCheckCircle } from "react-icons/fa";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import Header from '../../componant/header';
import Footer from "../../componant/footer";
import Image from "next/image";
import one from '../../images/one.jpeg'; // Replace with actual image URL

const AcInstallationPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is included in Window AC Installation?",
      answer: "It includes wall mounting, power connection, insulation, and testing the final setup for cooling and airflow. Our team ensures the unit is properly fixed and that the electrical connections are safe and functional. We also test the unit to ensure it provides optimal cooling performance for your space, delivering a satisfactory and reliable experience.",
    },
    {
      question: "How long does Split AC Uninstallation take?",
      answer: "Usually, it takes 1 to 2 hours depending on the installation setup and piping distance. The time varies based on the unit's complexity and the additional steps required for proper disconnection. Our team carefully handles the uninstallation process, ensuring all components are properly disconnected and removed without any damage or mess. The unit is then safely transported for reinstallation or disposal.",
    },
    {
      question: "Do you provide support for old AC units?",
      answer: "Yes, we install, uninstall, and maintain both old and new AC units with care. Our professionals are experienced in handling older systems, ensuring their setup and operation are done according to safety standards. Whether you're replacing an old model or maintaining an existing one, we provide thorough servicing to enhance its performance and lifespan.",
    },
    {
      question: "Is copper piping included in installation?",
      answer: "Basic copper piping is included. Extra piping is chargeable as per requirement. The amount of copper piping needed depends on the installation location and distance between the indoor and outdoor units. If you need additional piping beyond the standard requirement, we will provide a clear cost estimate upfront, ensuring transparency and no surprises during the installation process.",
    },
  ];

  return (
    <>
    <Header />
    <div className="bg-gradient-to-br from-white via-blue-100 to-blue-200 min-h-screen w-full overflow-hidden">
      {/* Typing Banner */}
      <div className="flex flex-col justify-center items-center text-center py-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[40px] md:text-[60px] lg:text-[100px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-500 to-black"
        >
          AC Installation Services
        </motion.h1>    
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-gray-700 text-lg md:text-xl max-w-4xl mt-4"
        >
          We specialize in expert installation and uninstallation of Window & Split ACs. Our professionals ensure safe, efficient, and proper setup of your air conditioners with the highest quality and satisfaction.
        </motion.p>
      </div>

      {/* Left Text - Right Image */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-12 gap-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 w-full"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">Expert AC Installation</h2>
          <p className="text-gray-700 text-lg">
            Whether it s a brand-new unit or relocating an existing one  we handle the setup  mounting  insulation electricals  and complete testing to ensure optimal performance.
          </p>
        </motion.div>
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          src="https://i.ibb.co/7Rn3yNT/airconditioner.png"
          alt="AC Installation"
          className="w-full lg:w-1/2"
        />
      </div>

      {/* Services Section */}
      <div className="px-6 lg:px-20 py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">Our Installation Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              title: "Window AC Installation", 
              desc: "Wall mount, insulation, electrical setup & performance testing.", 
              img: one
            },
            { 
              title: "Split AC Installation", 
              desc: "Indoor/outdoor setup, copper piping, and complete system connection.", 
              img: one
            },
            { 
              title: "Window AC Uninstallation", 
              desc: "Safe removal, power disconnect, and hardware disassembly.", 
              img: one
            },
            { 
              title: "Split AC Uninstallation", 
              desc: "Professional disconnection & equipment safety handling.", 
              img: one
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-2xl p-6 shadow-xl hover:scale-105 duration-300"
            >
              <Image src={item.img} alt={item.title} width={500} height={500} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* What We Include Section */}
      <div className="px-6 lg:px-20 py-16 bg-blue-50">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">What We Include</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            { icon: <FaTools size={40} />, label: "Indoor Unit Mounting" },
            { icon: <FaCogs size={40} />, label: "Outdoor Unit Setup" },
            { icon: <FaFan size={40} />, label: "Pipeline Connection" },
            { icon: <FaCheckCircle size={40} />, label: "Final System Check" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl duration-300"
            >
              <div className="text-blue-600 mb-2">{item.icon}</div>
              <p className="text-lg font-medium text-gray-800">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-6 lg:px-20 py-16 bg-white">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">FAQs</h2>
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="mb-4 border-b">
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center py-4 text-left text-lg font-medium text-blue-700"
              >
                {faq.question}
                {openFAQ === i ? <BsChevronUp /> : <BsChevronDown />}
              </button>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: openFAQ === i ? "auto" : 0 }}
                className="overflow-hidden text-gray-600 text-base"
              >
                <div className="pb-4 px-2">{faq.answer}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AcInstallationPage;
