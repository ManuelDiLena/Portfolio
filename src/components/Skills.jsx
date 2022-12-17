import React from 'react';
import { AiFillSetting, AiFillCheckCircle } from "react-icons/ai";
import { skills } from '../data';

function Skills() {
    return(
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <AiFillSetting className="w-10 inline-block mb-4 text-orange text-4xl"/>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-text mb-4">
                        Skills & Technologies
                    </h1>
                    <p className="text-text leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-xl">
                        These are some of the technologies I have worked with:
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray rounded flex p-4 h-full items-center">
                                <AiFillCheckCircle className="text-orange w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-white">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;