import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="mb-5 md:text-center">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 md:text-center">
            Skills &amp; Tools
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-left md:text-center">
            Below are some of the skills and tools I've worked with, this is an
            ever-evolving list!
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 lg:w-1/4 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <CheckCircleIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-center text-gray-500 mx-auto mt-8">
          &copy; JULIE MCBRIDE 2023
        </p>
      </div>
    </section>
  );
}
