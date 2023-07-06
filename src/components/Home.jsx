import React from 'react'
import { FiGithub } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai';

function Home() {
  return (
    <section id='home' className='h-screen'>
        <div className='container mx-auto flex flex-col sm:flex-row px-10 py-10 bg-black justify-around items-center'>
            <div className='flex flex-col justify-evenly mt-8'>
                <p className='text-orange title-font sm:text-3xl mb-4 font-medium text-2xl'>Hi, my name is</p>
                <h1 className='text-title title-font sm:text-5xl text-4xl font-bold bg-gradient-to-r from-orange to-gray p-2 md:w-4/5'>Manuel Di Lena</h1>
                <h2 className='text-title title-font sm:text-5xl text-4xl font-bold bg-gradient-to-r from-orange to-gray p-2 md:w-4/5'>Front-end Developer</h2>
                <div className='sm:mt-8 mt-4 sm:text-left text-text sm:text-xl sm:w-3/4'>
                    <p>I’m a software developer specializing in building (and occasionally designing) digital experiences.</p>
                    <p>I really like creating, designing and building products to help solve and improve problems.</p>
                </div>
                <div className='flex sm:justify-start justify-around mt-8 sm:text-3xl'>
                    <a href='#contact'
                       className='text-black bg-orange border-0 rounded-md sm:py-3 px-6 py-3 mr-8 transition duration-300 focus:outline-none hover:scale-105'>
                        Work With Me
                    </a>
                    <a href='#works'
                       className='text-orange bg-transparent border-solid border-2 rounded-md sm:py-3 sm:px-6 p-3 transition duration-300 focus:outline-none hover:scale-105 hover:bg-gray'>
                        Know My Projects
                    </a>
                </div>
            </div>
            <div className='flex sm:flex-col sm:justify-evenly justify-around mt-8'>
                <a href='https://github.com/ManuelDiLena' 
                   className='text-orange sm:text-4xl text-3xl p-1 mx-1 my-4 transition duration-300 hover:scale-125'>
                    <FiGithub/>
                </a>
                <a href='https://www.linkedin.com/in/manueldilena/'
                   className='text-orange sm:text-4xl text-3xl p-1 mx-1 my-4 transition duration-300 hover:scale-125'>
                    <SlSocialLinkedin/>
                </a>
                <a href='https://www.instagram.com/manuudilena/'
                   className='text-orange sm:text-4xl text-3xl p-1 mx-1 my-4 transition duration-300 hover:scale-125'>
                    <AiOutlineInstagram/>
                </a>
                <a href='#contact'
                   className='text-orange sm:text-4xl text-3xl p-1 mx-1 my-4 transition duration-300 hover:scale-125'>
                    <AiOutlineMail/>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Home;
