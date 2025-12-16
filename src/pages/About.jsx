import Bootstrap from "/img/skills/Bootstrap.svg";
import docker from "/img/skills/Docker.svg";
import Java from "/img/skills/Java.svg";
import JavaScript from "/img/skills/JavaScript.svg";
import MongoDB from "/img/skills/MongoDB.svg";
import MySQL from "/img/skills/MySQL.svg";
import Node from "/img/skills/Node.js.svg";
import PostgresSQL from "/img/skills/PostgresSQL.svg";
import Python from "/img/skills/Python.svg";
import React from "/img/skills/React.svg";
import Tailwind from "/img/skills/Tailwind CSS.svg";

const About = () => {
  const skills = [
    JavaScript,
    Python,
    Java,
    React,
    Tailwind,
    Bootstrap,
    Node,
    MongoDB,
    PostgresSQL,
    MySQL,
    docker,
  ];

  return (
    <section
      id="about"
      className="p-4 md:px-[15%] pt-[72px] border-y-2 flex flex-col justify-center border-y-blue-700 min-h-screen max-h-screen"
    >
      <h2 className="text-white font-bold justify-start md:text-[65px] text-[40px] leading-none tracking-tight mb-2">
        Learning Fast. <br /> Adapting Faster<span>.</span>
      </h2>
      <div className="gap-5 my-3">
        <div>
          <p className="text-(--grey) text-justify">
            I’m <span className="text-blue-600"> Ashish Mishra</span>, a
            passionate and dedicated MCA student specializing in Full Stack
            Development, with a strong focus on the MERN stack (MongoDB,
            Express.js, React.js, and Node.js). I thrive on transforming ideas
            into interactive, scalable, and high-performance web applications
            that create meaningful digital experiences.
          </p>
        </div>
      </div>
      <div className="flex w-full overflow-x-auto mt-7 gap-2">
        {skills.map((img, index) => (
          <img
            className="w-15 p-2 border-2 shadow-2xl shadow-blue-600"
            src={img}
            key={index}
          />
        ))}
      </div>
      <div className="flex flex-col mt-15 gap-2 items-center justify-center">
        <p className="text-gray-400">Want to know more?</p>
        <a
          className="bg-blue-600 transition-all ease-in-out duration-500 text-gray-200 text-sm font-semibold px-3 py-2 hover:scale-105 rounded-md shadow-black"
          target="_blank"
          href="https://www.linkedin.com/in/ashishbmishra/"
        >
          Connect →
        </a>
      </div>
    </section>
  );
};

export default About;
