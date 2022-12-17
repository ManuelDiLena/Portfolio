import React from 'react';
import { projects } from '../data';
import { AiFillCode } from "react-icons/ai";

function Projects() {
    return(
        <section id="projects" className="text-gray bg-black body-font">
            <div className="container px-5 py-5 mx-auto text-center lg:px-40">
                <AiFillCode className="mx-auto inline-block w-10 mb-4 text-orange text-4xl"/>
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-text">
                    Apps I've Built
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-text text-xl">
                    These are some of the works I have done implementing the technologies I have learned.
                </p>
            </div>
            <div className="flex flex-wrap">
                    {projects.map((project) => (
                        <a
                                href={project.link}
                                key={project.image}
                                className="sm:w-1/3 w-100 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center rounded"
                                    src={project.image}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 rounded   hover:opacity-100 hover:bg-gray">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-orange mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed text-text">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
        </section>
    );
};

export default Projects;