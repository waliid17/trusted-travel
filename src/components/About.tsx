import { motion } from "framer-motion";
import travel from "../assets/travel.png";

export const About = () => {
  return (
    <section id="about" className="relative py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col items-center gap-8 md:gap-16">
        {/* Section Title */}
        <motion.h1
          className="relative text-[30px] uppercase font-semibold text-black text-center before:content-[''] before:absolute before:left-[8%] before:w-[100%] before:bottom-[1px] before:bg-black before:h-[5px] before:rounded-[6px] before:transition-transform before:duration-300 after:content-[''] after:absolute after:top-[1px] after:left-[-6%] after:w-[100%] after:bg-black after:h-[5px] after:rounded-[6px] after:transition-transform after:duration-300 hover:before:translate-x-[-10%] hover:after:translate-x-[10%]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          About Us
        </motion.h1>

        {/* Content Wrapper */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Left Side: Content */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4 md:mb-6 leading-snug">
              Your Trusted Travel Companion
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed">
              At our travel agency, we specialize in curating unforgettable journeys tailored to your unique interests and desires. From breathtaking landscapes to vibrant cities, we help you discover the beauty the world has to offer.
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed">
              Our dedicated team ensures every aspect of your trip is seamless, personalized, and stress-free. Let us turn your travel dreams into a reality.
            </p>
            <button className="px-6 py-3 md:px-8 md:py-4 bg-cyan-600 text-white text-base md:text-lg font-medium rounded-lg shadow-lg hover:bg-cyan-700 transition duration-300">
              Learn More
            </button>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={travel}
              alt="Travel"
              className="rounded-2xl w-full max-w-[90%] md:max-w-[100%] lg:max-w-[130%] h-auto"
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <motion.div
        className="absolute -top-8 -left-8 w-32 h-32 md:w-64 md:h-64 bg-cyan-100 rounded-full blur-2xl"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      ></motion.div>
    </section>
  );
};