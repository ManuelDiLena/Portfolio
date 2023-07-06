import React from 'react';
import { RiInformationLine } from 'react-icons/ri';

function About() {
    return (
        <section id='about'>
            <div className='container mx-auto flex flex-col px-10 sm:py-20 py-16 bg-black justify-around items-center'>
                <RiInformationLine className='text-orange w-10 inline-block sm:text-4xl text-3xl mb-4'/>
                <h1 className='sm:text-4xl text-2xl font-medium title-font text-title mb-4'>About Me</h1>
                <div className='mb-4 text-text sm:text-xl'>
                    <p>I'm a young developer who loves to create, design and build technological and digital experiences that add value to those who need it.</p>
                    <p>My interest in development began during my studies in 2016 and after graduation I continued training to constantly improve my skills.</p>
                    <p>Currently my focus is on creating accessible products and experiences, as well as continuing to hone my skills.</p>
                </div>
                <h2 className='sm:text-2xl text-xl text-text mb-4'>Where I've Worked</h2>
                <div className='flex flex-col text-text sm:w-3/4'>
                    <h3 className='sm:text-xl text-1'>Developer <a href='#home' className='text-orange underline'>@ Essen S.A.</a></h3>
                    <p className='sm:text-base'>Aug 2019 - Jun 2023</p>
                    <ul className='text-sm list-disc list-inside pl-8'>
                        <li>Write modern, performant, maintainable code for a diverse array of client and internal projects.</li>
                        <li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React, C#, .NET, SQL Server, and APIs.</li>
                        <li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis.</li>
                        <li>Worked with a team to build a e-commerce platform and marketing website.</li>
                        <li>Engineered and maintained major features of customer-facing web app using.</li>
                        <li>Proposal and implementation of scalable solutions to problems identified with the services and applications responsible for communication with the main products.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About