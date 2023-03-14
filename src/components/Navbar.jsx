import React from 'react';
import logo from '../images/MD.png';
import { FaAngleDoubleRight } from 'react-icons/fa';

function Navbar() {
    return (
        <header className='bg-black fixed top-0 left-0 right-0 z-50 sm:sticky'>
            <div className='container mx-auto flex flex-row justify-between py-3 sm:flex-row'>
                <div className='title-font font-medium m-1 sm:mb-0'>
                    <a href='#home' className="sm:text-xl">
                        <img src={logo} alt='MD' class='sm:w-16 sm:h-11 h-6'></img>
                    </a>
                </div>
                <nav className='text-title flex flex-wrap items-center justify-center sm:text-2xl'>
                    <FaAngleDoubleRight className='mr-1 text-orange'/><a href='#about' className='mr-5 hover:text-orange'>
                        About
                    </a>
                    <FaAngleDoubleRight className='mr-1 text-orange'/><a href='#skills' className='mr-5 hover:text-orange'>
                        Skills
                    </a>
                    <FaAngleDoubleRight className='mr-1 text-orange'/><a href='#works' className='mr-5 hover:text-orange'>
                        Works
                    </a>
                    <FaAngleDoubleRight className='mr-1 text-orange'/><a href='#contact' className='mr-5 hover:text-orange'>
                        Contact
                    </a>
                    <a
                    href='https://flowcv.com/resume/strljaup15' className='text-orange mr-5 border-solid border-2 rounded-md py-1 px-2 transition duration-300 hover:bg-gray'>
                        Resume
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;