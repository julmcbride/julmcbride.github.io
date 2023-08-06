import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center text-white">
        <div className="lg:flex-grow md:w-3/4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          {/*<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
             development
          </h1>*/}

          <h2 className="mb-8 sm:text-xl text-xl mb-4">
            I'm a web/software developer in Boston, MA. I specialize in
            front-end development and code primarily in JavaScript. I'm also
            interested in full stack development and data visualization.
          </h2>
          <div className="flex justify-center">
            {/*<a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Contact
  </a>*/}
            <a
              href="#projects"
              //className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              className="inline-flex text-black font-semibold bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded text-lg"
            >
              Projects
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
