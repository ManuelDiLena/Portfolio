import React from 'react';
import { AiFillContacts, AiFillPhone, AiFillMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Contact() {
    return(
        <section id="contact">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <AiFillContacts className="w-10 inline-block mb-4 text-orange text-4xl"/>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-text mb-4">
                        Contact
                    </h1>
                    <p className="text-text leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-xl">
                        Whats next?? Get in touch. These are some of the ways to do it.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-3/5 sm:mx-auto sm:mb-2 -mx-2">
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray rounded flex p-4 h-full items-center">
                            <AiFillPhone className="text-orange w-6 h-6 flex-shrink-0 mr-4" />
                            <span className="title-font font-medium text-white">
                                +54 9 3462 623165
                            </span>
                        </div>
                    </div>
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray rounded flex p-4 h-full items-center">
                            <AiFillMail className="text-orange w-6 h-6 flex-shrink-0 mr-4" />
                            <span className="title-font font-medium text-white">
                                manuel.dilena.29@gmail.com
                            </span>
                        </div>
                    </div>
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray rounded flex p-4 h-full items-center">
                            <AiFillGithub className="text-orange w-6 h-6 flex-shrink-0 mr-4" />
                            <a className="title-font font-medium text-white" href="https://github.com/ManuelDiLena">
                                ManuelDiLena
                            </a>
                        </div>
                    </div>
                    <div className="p-2 sm:w-1/2 w-full">
                        <div className="bg-gray rounded flex p-4 h-full items-center">
                            <AiFillLinkedin className="text-orange w-6 h-6 flex-shrink-0 mr-4" />
                            <a className="title-font font-medium text-white" href="https://www.linkedin.com/in/manueldilena">
                                Manuel Di Lena
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mb-20">
                    <p className="text-text leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                    Created by Manuel Di Lena | 2022
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;