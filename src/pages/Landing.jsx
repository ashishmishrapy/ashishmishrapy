import { FaGithub, FaLinkedin } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="min-h-screen pt-[72px] flex flex-col items-center justify-center">
      <h1 className="text-white lg:text-[40px] text-[30px] mb-5">Hey 👋 I'm</h1>
      <div className="relative w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] mb-8">
        <div className="absolute inset-0 rounded-full rotating-border"></div>

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
      <h3 className="text-(--grey) mb-5 font-bold text-[20px]">
        Web Developer, Mern Stack
      </h3>
      <div className="text-(--grey) text-2xl flex gap-3">
        <a href="https://github.com/ashishmishrapy" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ashishbmishra/" target="_blank">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Landing;
