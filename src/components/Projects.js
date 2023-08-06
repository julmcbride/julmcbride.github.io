import {
  CalculatorIcon,
  ChartBarSquareIcon,
  CommandLineIcon,
} from "@heroicons/react/24/solid";

import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="bg-white">
      <div className="container px-5 py-10 mx-auto lg:px-40">
        <div className="flex flex-col w-full mb-10">
          <h2 className="text-4xl font-semibold title-font">
            Featured Projects
          </h2>
          <hr className="mt-4 w-100" />
          {/*<p className="lg:w-2/3 mx-auto leading-relaxed text-base text-left md:text-center">
            Most projects developed with{" "}
            <a
              className="underline hover:text-white"
              href="http://www.erg.com/"
              target="_blank"
              rel="noreferrer"
            >
              ERG
            </a>.
  </p>*/}
        </div>
        <div className="flex flex-wrap">
          {projects.map((project) => (
            <div className=" w-100" key={project.name}>
              <div className="flex relative">
                <div className="relative w-full">
                  <h3 className="text-2xl font-semibold title-font text-green-600 mb-3 text-left">
                    {project.title}
                  </h3>
                  <span className="font-semibold text-gray-900">
                    {project.icon === "calculator" ? (
                      <CalculatorIcon className="h-10 w-10 inline-flex text-green-600" />
                    ) : null}
                    {project.icon === "chart" ? (
                      <ChartBarSquareIcon className="h-10 w-10 inline-flex text-green-600" />
                    ) : null}
                    {project.icon === "web" ? (
                      <CommandLineIcon className="h-8 w-8 inline-flex text-green-600" />
                    ) : null}{" "}
                    {project.subtitle}
                  </span>
                  <p className="leading-relaxed text-left">
                    {project.description}

                    {project.name !== "oshaate" && project.link !== "" && (
                      <>
                        <br />{" "}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex text-black font-semibold bg-green-500 border-0 py-2 px-6 mt-4 focus:outline-none hover:bg-green-400 rounded text-lg"
                        >
                          Project site
                        </a>
                      </>
                    )}
                    {project.name === "oshaate" && (
                      <>
                        <br />
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex text-black font-semibold bg-green-500 border-0 py-2 px-6 mt-4 focus:outline-none hover:bg-green-400 rounded text-lg"
                        >
                          Project code
                        </a>
                      </>
                    )}
                  </p>
                </div>
              </div>
              <hr className="mt-8 mb-8 w-100" />
            </div>
          ))}

          {/*<div className="text-gray-800 leading-relaxed mx-auto p-4 text-left">
            <h3 className="text-lg font-bold pb-2">
              Other recent programs, organizations, and projects I have
              supported:
            </h3>
            <p>
              U.S. Environmental Protection Agency (EPA): Environmentally
              Preferable Purchasing (EPP) Program, Report on the Environment,
              Greenhouse Gas Reporting Program, Coalbed Methane Outreach
              Program, Landfill Methane Outreach Program, Green Power
              Partnership, Voluntary Methane Programs for the Oil and Natural
              Gas Industry, Pollution Prevention (P2), Toxic Release Inventory
              National Analysis, National Water Reuse Action Plan, Regulations
              and End-Use Specifications Explorer (REUSExplorer), Trash Free
              Waters South Atlantic Strategy Project Tracker, National Recycling
              Strategy Circular Economy Implementation Plan, Climate Change, A
              Student's Guide to Global Climate Change; U.S. Department of Labor
              Occupational Safety and Health Administration (OSHA) ; West Coast
              Climate &amp; Materials Managment Forum; Airport Cooperative
              Research Program;A Better City; PepsiCo Beverage Packaging
              Sustainability Tool; Massachusetts Registry of Motor Vehicles
              Violations, Investigations and Scheduling, Information and
              Tracking System (VISITS) ; Massachusetts Rehabilitation Commission
              (MRC) Contracts Management Database ; Eastern Research Group, Inc.
              (ERG); Harvard Law School Program on Corporate Governance
            </p>
                    </div>*/}
        </div>
      </div>
    </section>
  );
}
