import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <footer className='bg-gray-900 text-white py-6 relative'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
                {/* Brand */}
                <a href="/">
                <h1 className='text-xl md:text-2xl font-bold'>
                    Naveed Wani <span className='text-yellow-500 italic'>Construction Pvt. Ltd.</span>
                </h1>
                </a>
                {/* Links */}
                <div className='flex gap-6 mt-4 md:mt-0'>
                    <a
                        href='https://github.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-yellow-500 transition-colors duration-300'
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href='https://linkedin.com/in/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-yellow-500 transition-colors duration-300'
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href='mailto:naveedwaniconstruction@gmail.com'
                        className='hover:text-yellow-500 transition-colors duration-300'
                    >
                        <FaEnvelope size={24} />
                    </a>
                </div>

                {/* Copyright */}
              
              <a href="/">  <p className='text-sm mt-4 md:mt-0'>
                    &copy; {new Date().getFullYear()} Naveed Wani construction Pvt. Ltd.-- All rights reserved.
                </p>
                </a>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className='fixed bottom-8 right-8 bg-yellow-500 text-black p-3 rounded-full shadow-lg hover:bg-black hover:text-white transition-colors duration-300'
                aria-label='Scroll to top'
            >
                <FaArrowUp size={20} />
            </button>
        </footer>
    );
};

export default Footer;
