import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import paris from "../assets/paris.png";

export const Destinations = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const [currentIndex, setCurrentIndex] = useState(0); // Track the current card index
  const [startX, setStartX] = useState<number | null>(null); // Track the start position of the swipe
  const carouselRef = useRef(null); // Ref for the carousel container

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const cards = [...Array(4)]; // Array of 4 cards

  // Function to handle next card
  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  // Function to handle previous card
  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  // Touch event handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX); // Record the initial touch position
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!startX) return;

    const currentX = e.touches[0].clientX; // Get the current touch position
    const diffX = startX - currentX; // Calculate the difference

    // If the swipe is significant, change the card
    if (diffX > 50) {
      nextCard(); // Swipe left
      setStartX(null); // Reset the start position
    } else if (diffX < -50) {
      prevCard(); // Swipe right
      setStartX(null); // Reset the start position
    }
  };

  return (
    <section ref={sectionRef}>
      <h1 className="relative text-[25px] uppercase font-semibold text-black text-center before:content-[''] before:absolute before:left-[44%] before:w-[13%] before:bottom-[-2px] before:bg-black before:h-[5px] before:rounded-[6px] before:transition-transform before:duration-300 after:content-[''] after:absolute after:top-[-2px] after:left-[43%] after:w-[13%] after:bg-black after:h-[5px] after:rounded-[6px] after:transition-transform after:duration-300 hover:before:translate-x-[-10%] hover:after:translate-x-[10%]">
        Nos Destinations
      </h1>
      <br />
      <br />
      <section id="des">
        {/* Desktop Layout (unchanged) */}
        <div className="hidden md:flex flex-wrap justify-center gap-6">
          {cards.map((_, index) => (
            <motion.div
              key={index}
              className="w-[350px] h-[560px] border border-gray-300 bg-white/75 shadow-[0_14px_28px_rgba(0,0,0,0.75),_0_10px_10px_rgba(0,0,0,0.22)] transition-all duration-300 ease-in-out hover:shadow-[0_3px_6px_rgba(0,0,0,0.16),_0_10px_10px_rgba(0,0,0,0.23)] hover:translate-y-[8px]"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                delay: index * 0.4,
              }}
            >
              <div className="h-[348px] flex justify-center items-center">
                <img src={paris} alt="Paris" className="object-cover h-full" />
              </div>
              <div className="px-5 py-3 flex justify-between items-center p-[5px_20px]">
                <h2 className="text-2xl font-extrabold text-black">Paris</h2>
                <p className="text-red-600 font-bold text-2xl">56000.00 DA</p>
              </div>
              <div className="px-5 py-3">
                <p className="text-gray-700 text-xs">
                  EXPLOREZ LE MONDE VOYAGEZ AU-DELÀ DES FRONTIÈRES, DÉCOUVREZ
                  L'INEXPLORÉ.
                </p>
              </div>
              <div className="px-5 py-3">
                <a href="paris.html">
                  <button className="bg-[#000000CC] text-white font-semibold py-[15px] px-[25px] transition-all duration-300 ease-in hover:bg-[#608da2] hover:border hover:border-gray-300 hover:rounded-[10px] focus:outline-none">
                    Travel now
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Layout (carousel) */}
        <div
          className="md:hidden relative overflow-hidden"
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {/* Carousel Container */}
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {cards.map((_, index) => (
              <motion.div
                key={index}
                className="w-full flex-shrink-0"
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  delay: index * 0.4,
                }}
              >
                <div className="w-[350px] h-[560px] border border-gray-300 bg-white/75 shadow-[0_14px_28px_rgba(0,0,0,0.75),_0_10px_10px_rgba(0,0,0,0.22)] transition-all duration-300 ease-in-out hover:shadow-[0_3px_6px_rgba(0,0,0,0.16),_0_10px_10px_rgba(0,0,0,0.23)] hover:translate-y-[8px] mx-auto">
                  <div className="h-[348px] flex justify-center items-center">
                    <img
                      src={paris}
                      alt="Paris"
                      className="object-cover h-full"
                    />
                  </div>
                  <div className="px-5 py-3 flex justify-between items-center p-[5px_20px]">
                    <h2 className="text-2xl font-extrabold text-black">Paris</h2>
                    <p className="text-red-600 font-bold text-2xl">
                      56000.00 DA
                    </p>
                  </div>
                  <div className="px-5 py-3">
                    <p className="text-gray-700 text-xs">
                      EXPLOREZ LE MONDE VOYAGEZ AU-DELÀ DES FRONTIÈRES, DÉCOUVREZ
                      L'INEXPLORÉ.
                    </p>
                  </div>
                  <div className="px-5 py-3">
                    <a href="paris.html">
                      <button className="bg-[#000000CC] text-white font-semibold py-[15px] px-[25px] transition-all duration-300 ease-in hover:bg-[#608da2] hover:border hover:border-gray-300 hover:rounded-[10px] focus:outline-none">
                        Travel now
                      </button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Navigation Buttons (optional for mobile) */}
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-all duration-300"
            onClick={prevCard}
          >
            &lt;
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-all duration-300"
            onClick={nextCard}
          >
            &gt;
          </button>
        </div>
      </section>
    </section>
  );
};
