import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="bg-gray-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h1 className="relative text-2xl md:text-3xl uppercase font-semibold text-black text-center before:content-[''] before:absolute before:left-[44%] before:w-[13%] before:bottom-[-2px] before:bg-black before:h-[5px] before:rounded-[6px] before:transition-transform before:duration-300 after:content-[''] after:absolute after:top-[-2px] after:left-[43%] after:w-[13%] after:bg-black after:h-[5px] after:rounded-[6px] after:transition-transform after:duration-300 hover:before:translate-x-[-10%] hover:after:translate-x-[10%]">
          Contact us
        </h1>

        {/* Description */}
        <p className="mt-4 text-base md:text-lg text-gray-500 text-center max-w-2xl mx-auto">
          We're here to help and answer any questions you might have. We look
          forward to hearing from you!
        </p>

        {/* Grid Layout for Map and Form */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Map Section */}
          <div className="w-full h-64 md:h-96 lg:h-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2a6c8e2299e!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1625070000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form Section */}
          <div className="w-full">
            <form className="grid grid-cols-1 gap-y-4 sm:gap-y-6 sm:grid-cols-2 sm:gap-x-6">
              {/* Name Input */}
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    className="py-2 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    className="py-2 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="py-2 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};