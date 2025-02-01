import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';


export const Header = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 800) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.header
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            className={`fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-5 py-2 h-[70px] shadow-md transition-all duration-300 ${scrolling ? 'bg-[#608da2]' : 'bg-transparent'}`}
        >
            {/* Logo Section */}
            <motion.div
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 0.3 }} 
                className="logo flex items-center text-white text-2xl font-bold"
            >
                <img
                    src={logo}
                    alt="Logo"
                    className="h-[60px] w-auto transition-transform duration-300"
                />
                <p>
                    <span className="text-black">Trusted</span>-Travel
                </p>
            </motion.div>

            {/* Menu Section */}
            <motion.ul
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="menu flex justify-center items-center"
            >
                <li className="mx-4 list-none">
                    <a
                        href="#home"
                        className="text-sm text-black font-light transition-all duration-200  hover:bg-[#ffffff] hover:px-3 hover:py-2 hover:rounded-lg"
                    >
                        Accueil
                    </a>
                </li>
                <li className="mx-4 list-none">
                    <a
                        href="#des"
                        className="text-sm text-black font-light transition-all duration-200  hover:bg-[#ffffff] hover:px-3 hover:py-2 hover:rounded-lg"
                    >
                        Nos Destinations
                    </a>
                </li>
                <li className="mx-4 list-none">
                    <a
                        href="#about"
                        className="text-sm text-black font-light transition-all duration-200  hover:bg-[#ffffff] hover:px-3 hover:py-2 hover:rounded-lg"
                    >
                        About us
                    </a>
                </li>
                <li className="mx-4 list-none">
                    <a
                        href="#contact"
                        className="text-sm text-black font-light transition-all duration-200  hover:bg-[#ffffff] hover:px-3 hover:py-2 hover:rounded-lg"
                    >
                        Contact
                    </a>
                </li>
            </motion.ul>

            {/* Buttons Section */}
            <motion.div
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5, delay: 0.4 }} 
                className="flex items-center space-x-4"
            >
                <a href="Login.html">
                    <button className="bg-[#000000] text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#607da2] transition-all duration-300 shadow-md">
                        LOGIN
                    </button>
                </a>
                <a href="Signup.html">
                    <button className="bg-[#000000] text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#608da2] transition-all duration-300 shadow-md">
                        SIGN UP
                    </button>
                </a>
            </motion.div>
        </motion.header>
    );
};