import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="backdrop-blur-3xl shadow-xl fixed top-0 w-screen">
      <div className="flex justify-between md:px-10 p-5">
        <h1 style={{fontStyle: "italic"}} className="text-blue-600 font-bold text-2xl">AM</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-5 items-center text-(--grey)">
            <li className="hover:text-blue-600 hover:scale-105">
              <a href="/">Home</a>
            </li>
            <li className="hover:scale-105 hover:text-blue-600">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-blue-600 hover:scale-105">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:scale-105 hover:text-blue-600">
              <a href="https://drive.google.com/file/d/1tIOB7AmmV8tuXoH4nP6AJ17ahotXHFkL/view?usp=drive_link" target="_blank">Resume</a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Icons */}
        <nav className="md:hidden">
          <ul className="flex gap-5 text-(--grey) text-2xl">
            <li>
              <button onClick={() => setMenu(!menu)}>
                <GiHamburgerMenu />
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      <nav className={`${menu ? "block" : "hidden"}`}>
        <ul className="flex flex-col text-xl items-center justify-center font-semibold backdrop-blur-md bg-black/95 absolute w-screen h-[90vh] gap-5 text-(--grey)">
          <li>
            <a href="/" onClick={() => setMenu(false)}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenu(false)}>About</a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenu(false)}>Projects</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1tIOB7AmmV8tuXoH4nP6AJ17ahotXHFkL/view?usp=drive_link" onClick={() => setMenu(false)}>Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
