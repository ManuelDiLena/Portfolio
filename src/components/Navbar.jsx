import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

function Navbar() {
    return(
        <header className="bg-gray md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" className="text-xl">
                        Manuel Di Lena
                    </a>
                </div>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-text justify-center">
                    <a href="#projects" className="mr-5 hover:text-orange">
                        Works
                    </a>
                    <a href="#skills" className="mr-5 hover:text-orange">
                        Skills
                    </a>
                    <a href="#contact" className="mr-5 hover:text-orange">
                        Contact
                    </a>
                </nav>
                <a
                    href='https://drive.google.com/file/d/11kZraFp8DVFpGZ9sxiHrFBZUQ-OYRktF/view?usp=sharing'
                    className="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:text-red rounded text-orange mt-4 md:mt-0">
                        Resume
                        <AiOutlineArrowRight className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    );
};

export default Navbar;