import React from 'react';

function About() {
    return(
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center bg-black">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-text">
                        Hi, I'm Manu
                    </h1>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange">
                        Web & Front-end Developer
                    </h1>
                    <p className="mb-8 leading-relaxed text-text text-xl">
                        I am a young developer. I really like creating, designing and building technological and digital experiences to help solve and improve problems. I also work on the development and implementation of management systems.
                        <br className="hidden lg:inline-block"/>
                        <br className="hidden lg:inline-block"/>
                        My interest in development began during my studies as a Functional Analyst and after graduating I continued training to improve my skills.
                        <br className="hidden lg:inline-block"/>
                        <br className="hidden lg:inline-block"/>
                        As an experience, I currently work as a developer for Essen S.A. more than a year ago, in addition to some freelance projects.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-orange border-0 py-2 px-6 focus:outline-none hover:bg-red hover rounded text-lg">
                                Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-white bg-gray border-0 py-2 px-6 focus:outline-none hover:bg-shadow rounded text-lg">
                                Know My Projects
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;