"use client";
import { motion } from "framer-motion";
import { FaCertificate, FaStar, FaThumbsUp, FaUsers, FaCog, FaSnowflake } from "react-icons/fa"; // Adding new icon for AC-related service
import Image from "next/image";
const services = [
  {
    title: "Cool Your World with Professional AC Installation",
    description:
      "Our team ensures that your air conditioning system is tailored to your needs, providing comfort and efficiency all year round.",
    imgSrc: "https://via.placeholder.com/600x400?text=AC+Installation", // Replace with actual image URL
  },
  {
    title: "Why Choose Us for Your Air Conditioning Needs?",
    description:
      "We offer not just installation but energy-efficient solutions that ensure your space remains cool and cost-effective throughout the year.",
    imgSrc: "https://via.placeholder.com/600x400?text=AC+Maintenance", // Replace with actual image URL
  },
];

const features = [
  { icon: <FaCertificate />, title: "Certified Experts", description: "Our team is fully certified, bringing professional knowledge and reliable solutions to every project." },
  { icon: <FaStar />, title: "5-Star Rated Service", description: "Our clients trust us, and our 5-star ratings reflect our commitment to delivering high-quality services." },
  { icon: <FaThumbsUp />, title: "Reliable & Trustworthy", description: "We pride ourselves on being dependable and trustworthy, with a focus on customer satisfaction." },
  { icon: <FaUsers />, title: "Excellent User Experience", description: "We ensure that the customer experience is top-notch, from consultation to post-service support." },
  { icon: <FaCog />, title: "Efficient Work & Maintenance", description: "Efficient and timely maintenance to ensure your systems work smoothly year-round." },
  { icon: <FaSnowflake />, title: "Advanced Air Conditioning Solutions", description: "We offer the latest AC models, ensuring the most efficient and quiet solutions for your space." }, // New AC-related card
];

export default function DynamicSections() {
  return (
    <section className="relative w-full py-24 px-6 bg-gradient-to-br from-white via-blue-100 to-blue-200 overflow-hidden text-blue-900">
      {/* First Section */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto mb-20">
        {/* Left Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <Image
            src={services[0].imgSrc}
            alt="AC Installation"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Right Dynamic Text */}
        <div className="w-full md:w-1/2 pl-6">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {services[0].title}
          </motion.h2>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {services[0].description}
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium shadow-lg"
          >
            Learn More
          </motion.button>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto mb-20">
        {/* Left Dynamic Text */}
        <div className="w-full md:w-1/2 pr-6 mb-6 md:mb-0">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {services[1].title}
          </motion.h2>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {services[1].description}
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium shadow-lg"
          >
            Discover Our Solutions
          </motion.button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={services[1].imgSrc}
            alt="AC Maintenance"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why <span className="text-sky-600">Choose Us?</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
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
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold text-center mb-4">{feature.title}</h3>
              <p className="text-gray-700 text-sm text-center mb-6">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dynamic Word Animation Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.h2
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Service is <span className="text-sky-600">Committed</span> to Quality
        </motion.h2>
        <motion.p
          className="text-lg text-center mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We believe in offering high-quality services with a customer-first approach. <span className="text-blue-600">Efficiency, Trust, and Excellence</span> are at the core of what we do. Our solutions are <span className="text-red-600">affordable</span> yet <span className="text-green-600">durable</span>, making sure your comfort is never compromised.
        </motion.p>
      </div>
    </section>
  );
}
