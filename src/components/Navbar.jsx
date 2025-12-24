import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="backdrop-blur-3xl shadow-xl fixed top-0 w-screen">
      <div className="flex justify-between md:px-10 p-5">
        <h1
          style={{ fontStyle: "italic" }}
          className="text-blue-600 font-bold text-2xl"
        >
          AM
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-5 items-center text-white">
            <li className="hover:text-blue-600 hover:scale-105">
              <a href="#home">Home</a>
            </li>
            <li className="hover:scale-105 hover:text-blue-600">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-blue-600 hover:scale-105">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-blue-600 hover:scale-105">
              <a href="#contact">Contact</a>
            </li>
            <li className="hover:scale-105 hover:text-blue-600">
              <a
                href="https://drive.google.com/file/d/1oIZMxbleGXP-b6uFXB-pX0qHoM1lZ8mG/view?usp=drive_link"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Icons */}
        <button 
        className="md:hidden text-white text-2xl"
        onClick={() => setMenu(!menu)}>
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      <nav className={`${menu ? "block" : "hidden"}`}>
        <ul className="flex flex-col text-xl items-center justify-center font-semibold backdrop-blur-3xl bg-black/97 absolute w-screen h-[90vh] gap-5 text-(--grey)">
          <li>
            <a href="#home" onClick={() => setMenu(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenu(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenu(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenu(false)}>
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1oIZMxbleGXP-b6uFXB-pX0qHoM1lZ8mG/view?usp=drive_link"
              onClick={() => setMenu(false)}
            >
              Resume
            </a>
          </li>
          <li>
             <a
              href="mailto:ashish.work.contact@gmail.com?subject=Hiring%20Inquiry"
              className="border-2 border-blue-600 text-gray-200 text-sm font-semibold px-3 py-2 hover:scale-105 transition-all ease-in-out duration-500 rounded-md shadow-black"
            >
              Hire Me →
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
