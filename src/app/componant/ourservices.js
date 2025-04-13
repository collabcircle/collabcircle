"use client";
import { motion } from "framer-motion";
import {
  FaTools,
  FaWrench,
  FaSync,
  FaDiagnoses,
  FaBuilding,
  FaUserMd,
} from "react-icons/fa";

const services = [
  {
    icon: <FaTools />,
    title: "Installation",
    desc: "Professional AC installation ensuring maximum efficiency and long-term performance tailored for your space.",
  },
  {
    icon: <FaWrench />,
    title: "Maintenance",
    desc: "Scheduled maintenance to keep your AC running smooth, cool, and power-efficient throughout the year.",
  },
  {
    icon: <FaSync />,
    title: "Repair",
    desc: "Fast and accurate repair services using the latest tools to get your cooling back in action.",
  },
  {
    icon: <FaDiagnoses />,
    title: "Indoor Quality Testing",
    desc: "Advanced indoor air quality tests with precise diagnostics and environment optimization recommendations.",
  },
  {
    icon: <FaBuilding />,
    title: "Commercial Testing",
    desc: "Full-scale HVAC testing for commercial buildings with performance insights and optimization plans.",
  },
  {
    icon: <FaUserMd />,
    title: "Real-Time Consultation",
    desc: "Expert advice and real-time consultation for AC issues, installation planning, or performance upgrades.",
  },
];

export default function OurServices() {
  return (
    <section className="relative w-full py-24 px-6 bg-gradient-to-br from-white via-blue-100 to-blue-200 overflow-hidden text-blue-900">
      {/* Floating Animated Ice Cubes */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.5),transparent_40%)]" />

      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-6 h-6"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ y: ["0%", "100%"], rotate: [0, 180, 360] }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <rect
              x="10"
              y="10"
              width="80"
              height="80"
              rx="15"
              fill="url(#grad)"
              stroke="#bae6fd"
              strokeWidth="5"
            />
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#e0f7ff" />
                <stop offset="100%" stopColor="#90cdf4" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center mb-20"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our <span className="text-sky-600">Services</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white/60 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-8 hover:shadow-blue-200 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex justify-center items-center text-5xl text-sky-500 mb-6"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold text-center mb-4">{service.title}</h3>
              <p className="text-gray-700 text-sm text-center mb-6">{service.desc}</p>
              <div className="flex justify-center">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    background: "linear-gradient(to right, #0284c7, #0ea5e9)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:from-blue-600 hover:to-sky-500 transition-all duration-300"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
