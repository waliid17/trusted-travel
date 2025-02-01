import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h1 className="relative text-[25px] uppercase font-semibold text-black text-center before:content-[''] before:absolute before:left-[44%] before:w-[13%] before:bottom-[-2px] before:bg-black before:h-[5px] before:rounded-[6px] before:transition-transform before:duration-300 after:content-[''] after:absolute after:top-[-2px] after:left-[43%] after:w-[13%] after:bg-black after:h-[5px] after:rounded-[6px] after:transition-transform after:duration-300 hover:before:translate-x-[-10%] hover:after:translate-x-[10%]">
        Contact us
      </h1>

        <p className="mt-4 text-lg text-gray-500 text-center">
          We're here to help and answer any questions you might have. We look
          forward to hearing from you!
        </p>

        <div className="mt-12">
          <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

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
    </motion.section>
  );
};