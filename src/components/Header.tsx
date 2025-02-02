import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

export const Header = () => {
    const [scrolling, setScrolling] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 800);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            className={`fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-5 py-2 h-[70px] shadow-md transition-all duration-300 ${
                scrolling ? 'bg-[#608da2]' : 'bg-transparent'
            }`}
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

            {/* Menu Section (Always Visible on PC, Hidden in Mobile) */}
            <motion.ul
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="menu hidden lg:flex justify-center items-center"
            >
                <li className="mx-4 list-none">
                    <a href="#home" className="text-sm text-black font-light transition-all duration-200 hover:bg-[#ffffff] hover:px-3 hover:py-2 hover:rounded-lg">
                        Accueil
                    </a>
                </li>
                <li className="mx-4 list-none">
                    <a href="#des" className="text-sm text-black font-light transition-all duration-200 hover:bg-[#ffffff] hover:px-3 hover:py-2 hover:rounded-lg">
                        Nos Destinations
                    </a>
                </li>
                <li className="mx-4 list-none">
                    <a href="#about" className="text-sm text-black font-light transition-all duration-200 hover:bg-[#ffffff] hover:px-3 hover:py-2 hover:rounded-lg">
                        About us
                    </a>
                </li>
                <li className="mx-4 list-none">
                    <a href="#contact" className="text-sm text-black font-light transition-all duration-200 hover:bg-[#ffffff] hover:px-3 hover:py-2 hover:rounded-lg">
                        Contact
                    </a>
                </li>
            </motion.ul>

            {/* Buttons Section */}
            <motion.div
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5, delay: 0.4 }} 
                className="hidden lg:flex items-center space-x-4"
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

            {/* Mobile Menu Toggle Button */}
            <button className="lg:hidden text-black z-30" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                    />
                </svg>
            </button>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.3 }} 
                    className="lg:hidden fixed top-[70px] left-0 right-0 bottom-0 bg-[#78a2b9] z-20 p-8 flex flex-col items-center"
                >
                    <ul className="flex flex-col items-center space-y-6">
                        <li>
                            <a href="#home" className="text-lg text-white hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>
                                Accueil
                            </a>
                        </li>
                        <li>
                            <a href="#des" className="text-lg text-white hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>
                                Nos Destinations
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="text-lg text-white hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>
                                About us
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-lg text-white hover:text-gray-200" onClick={() => setIsMenuOpen(false)}>
                                Contact
                            </a>
                        </li>
                    </ul>

                    <div className="flex flex-col space-y-4 mt-8 w-full max-w-[200px]">
                        <a href="Login.html" className="w-full">
                            <button className="w-full bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#608da2] transition-all duration-300">
                                LOGIN
                            </button>
                        </a>
                        <a href="Signup.html" className="w-full">
                            <button className="w-full bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#608da2] transition-all duration-300">
                                SIGN UP
                            </button>
                        </a>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
};
