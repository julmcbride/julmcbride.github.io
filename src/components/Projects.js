import {
  CalculatorIcon,
  ChartBarSquareIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";

import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Featured Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Most projects developed for clients of{" "}
            <a href="http://www.erg.com/">ERG</a>, where I am a senior front-end
            developer.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div className="sm:w-1/2 w-100 p-4" key={project.name}>
              <div className="flex relative">
                <div className="px-4 py-5 relative w-full border-4 border-gray-800 bg-gray-900">
                  {" "}
                  {project.icon === "calculator" ? (
                    <CalculatorIcon className="h-20 w-20  mx-auto" />
                  ) : null}
                  {project.icon === "chart" ? (
                    <ChartBarSquareIcon className="h-20 w-20  mx-auto" />
                  ) : null}
                  {project.icon === "web" ? (
                    <ComputerDesktopIcon className="h-20 w-20  mx-auto" />
                  ) : null}
                  <br />
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1 text-left">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3 text-left">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-left">
                    {project.description}{" "}
                    {project.link !== "" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline text-white"
                      >
                        Project site
                      </a>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
