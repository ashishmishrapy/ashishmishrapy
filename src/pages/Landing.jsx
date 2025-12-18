import { FaGithub, FaLinkedin } from "react-icons/fa";

const Landing = () => {
  return (
    <section className="min-h-screen pb-20 pt-[72px] flex flex-col items-center justify-center">
      <h1 className="text-white lg:text-[40px] text-[30px] mb-5">
        Hey <span>👋 </span> I'm
      </h1>
      <div className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] mb-8">
        <img
          src="img/pfp-artguru.webp"
          loading="lazy"
          className="object-top rounded-full object-cover w-full h-full "
          alt=""
        />
      </div>

      <h2 className="text-white lg:text-[70px] text-[60px] text-center font-black">
        <span className="block md:inline leading-5">Ashish </span>
        <span>Mishra</span>
      </h2>
      <h3 className="text-blue-600 text-center mb-5 font-bold text-[20px]">
        Student, Full Stack Development
      </h3>
      <div className="flex flex-col mt-5 gap-2 items-center justify-center">
        <p className="text-gray-400">Looking for a MERN developer?</p>
        <div className="flex mt-1 gap-4">
            <a
              href="mailto:ashish.work.contact@gmail.com?subject=Hiring%20Inquiry"
              className="bg-blue-600 border-2 border-blue-600 text-gray-200 text-sm font-semibold px-3 py-2 hover:scale-105 transition-all ease-in-out duration-500 rounded-md shadow-black"
            >
              Hire Me →
            </a>
            <a
              href="#projects"
              className="border-2 border-blue-600 tracking-tighter text-gray-200 text-sm font-semibold px-3 py-2 hover:scale-105 transition-all ease-in-out duration-500 rounded-md shadow-black"
            >
              View Work →
            </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
