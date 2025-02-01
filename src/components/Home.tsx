import trusted from '../assets/trusted-travel.png';
import { motion } from "framer-motion";


export const Home = () => {
  return (
    <section
    id='home'
      className="relative w-full h-screen pt-[100px] overflow-hidden bg-fixed bg-cover bg-top"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1415018255745-0ec3f7aee47b?dpr=1&auto=format&fit=crop&w=1500&h=938&q=80&cs=tinysrgb&crop=')",
      }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <motion.h1
  className="text-[70px] text-white tracking-[10px] font-[400] uppercase opacity-90 z-10 mt-[-150px]"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeInOut" }} // Smooth easing curve
>
  Welcome to
</motion.h1>
        <br />
        <br />
        <motion.img
  src={trusted}
  alt="trusted"
  className="w-[30vw] h-auto mx-auto mt-[-50px]"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, ease: "easeInOut" }} // Same easing curve
  whileHover={{
    scale: 1.1,
    transition: { duration: 0.3, ease: "easeOut" }, // Smooth hover effect
  }}
/>
        <div className="mt-4">
          <p className="text-[30px] text-white tracking-[7px] font-[100] uppercase opacity-90 absolute bottom-[10%] left-[50%] transform -translate-x-1/2 whitespace-nowrap z-10">
            Explorez le monde
          </p>
          <h3 className="text-[30px] text-white tracking-[7px] font-[100] uppercase opacity-90 absolute bottom-[-5%] left-[50%] transform -translate-x-1/2 whitespace-nowrap z-10">
            Voyagez au-delà des frontières, découvrez l'inexploré.
          </h3>
        </div>
      </div>
    </section>
  );
};
