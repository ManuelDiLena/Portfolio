import React from 'react';
import { works } from '../data';
import { AiOutlineCode } from 'react-icons/ai';

function Works() {
    return (
        <section id='works' className='text-text bg-black body-font'>
            <div className='container px-5 sm:pt-20 pt-16 mx-auto text-center lg:px-40'>
                <AiOutlineCode className='w-10 inline-block mb-4 text-orange sm:text-4xl text-3xl'/>
                <h1 className='sm:text-4xl text-2xl font-medium title-font mb-4 text-title'>
                    Apps I've Built
                </h1>
                <p className='mx-auto leading-relaxed text-text sm:text-xl'>
                    These are some of the works I have done implementing the technologies I have learned.
                </p>
            </div>
            <div className='flex flex-wrap'>
                {works.map((work) => (
                    <a
                        href={work.link}
                        className='sm:w-1/3 w-100 p-4'>
                        <div className='flex relative'>
                            <img
                                alt='gallery'
                                className='absolute inset-0 w-full h-full object-cover object-center rounded'
                                src={work.image}
                            />
                            <div className='px-8 py-10 relative z-10 w-full bg-gray-900 opacity-0 rounded   hover:opacity-100 hover:bg-gray'>
                                <h2 className='tracking-widest text-base title-font font-medium text-orange mb-1'>
                                    {work.subtitle}
                                </h2>
                                <h1 className='title-font text-lg font-medium text-title mb-3'>
                                    {work.title}
                                </h1>
                                <p className='leading-relaxed text-text'>{work.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
};

export default Works;