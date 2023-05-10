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
      <div className="container px-5 py-10 mx-auto lg:px-40">
        <div className="flex flex-col w-full mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white md:text-center">
            Featured Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-left md:text-center">
            Most projects developed for clients of{" "}
            <a
              className="underline hover:text-white"
              href="http://www.erg.com/"
              target="_blank"
              rel="noreferrer"
            >
              ERG
            </a>
            , the consulting firm I work with.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div className="md:w-1/2 w-100 p-4" key={project.name}>
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
                    {project.name !== "oshaate" && project.link !== "" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="underline hover:text-white"
                      >
                        Project site
                      </a>
                    )}
                    {project.name === "newr" && (
                      <>
                        {" "}
                        |{" "}
                        <a
                          href={project.link2}
                          target="_blank"
                          rel="noreferrer"
                          className="underline hover:text-white"
                        >
                          Detail
                        </a>
                      </>
                    )}
                    {project.name === "epeat" && (
                      <>
                        {" "}
                        |{" "}
                        <a
                          href={project.link2}
                          target="_blank"
                          rel="noreferrer"
                          className="underline hover:text-white"
                        >
                          User Guide
                        </a>
                      </>
                    )}
                    {project.name === "oshaate" && (
                      <>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="underline hover:text-white"
                        >
                          Project code
                        </a>
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="text-base leading-relaxed mx-auto p-4 text-left md:text-center">
            <p className="text-white pb-2">
              Other programs, organizations, and projects I have supported:
            </p>
            <p>
              U.S. Environmental Protection Agency (EPA): Environmentally
              Preferable Purchasing Program, Greenhouse Gas Reporting Program,
              Coalbed Methane Outreach Program, Landfill Methane Outreach
              Program, Green Power Partnership, Voluntary Methane Programs for
              the Oil and Natural Gas Industry, Pollution Prevention (P2), Toxic
              Release Inventory National Analysis, Report on the Environment,
              National Water Reuse Action Plan, Regulations and End-Use
              Specifications Explorer (REUSExplorer), Trash Free Waters South
              Atlantic Strategy Project Tracker, National Recycling Strategy
              Circular Economy Implementation Plan, A Student's Guide to Global
              Climate Change; Occupational Safety and Health Administration
              (OSHA); West Coast Climate &amp; Materials Managment Forum;
              Airport Cooperative Research Program; A Better City; PepsiCo
              Beverage Packaging Sustainability Tool; Massachusetts Registry of
              Motor Vehicles Violations, Investigations and Scheduling,
              Information and Tracking System (VISITS); Massachusetts
              Rehabilitation Commission Contracts Management Database; Harvard
              Law School Program on Corporate Governance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
