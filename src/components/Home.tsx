import trusted from '../assets/trusted-travel.png';
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen pt-[100px] overflow-hidden bg-fixed bg-cover bg-top flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1415018255745-0ec3f7aee47b?dpr=1&auto=format&fit=crop&w=1500&h=938&q=80&cs=tinysrgb&crop=')",
      }}
    >
      <div className="text-center">
        <motion.h1
          className="text-white font-light uppercase opacity-90 z-10 tracking-wide
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[70px]
          mt-[-310px] sm:mt-[-150px]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Welcome to
        </motion.h1>

        <br />
        <motion.img
          src={trusted}
          alt="trusted"
          className="w-[70vw] md:w-[40vw] lg:w-[30vw] h-auto mx-auto mt-[30px] sm:mt-[-20px]" // Responsive width
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        />

        <div className="mt-6 space-y-4">
          <p className="text-white font-light uppercase opacity-90 tracking-wide text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[30px]">
            Explorez le monde
          </p>
          <h3 className="text-white font-light uppercase opacity-90 tracking-wide text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[30px] px-4 md:px-0">
            Voyagez au-delà des frontières, découvrez l'inexploré.
          </h3>
        </div>
      </div>
    </section>
  );
};
