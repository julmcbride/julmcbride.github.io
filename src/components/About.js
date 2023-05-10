import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-3/4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            web/software development
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a developer based in Boston, MA specializing in front-end
            development. I currently work with an environmental consulting firm
            and am interested in making data more accessible and understandable
            through good user interface design and development.
          </p>
          <div className="flex justify-center">
            {/*<a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Contact me
  </a>*/}
            <a
              href="#projects"
              //className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Project Portfolio
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-quarter md:w-1/4">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./j.jpg"
          />
        </div>
      </div>
    </section>
  );
}
