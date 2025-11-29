import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive ? "text-white" : "text-(--grey)";

  return (
    <div className="backdrop-blur-3xl fixed top-0 w-screen">
      <div className="flex justify-between md:px-10 p-5">
        <h1 className="text-white italic font-bold text-2xl">AM</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-5 items-center text-(--grey)">
            <li>
              <NavLink to="/" className={linkClass}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={linkClass}>About</NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={linkClass}>Projects</NavLink>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1MOPR1z6kaQy0cMPuFCb7jR0McbYC1FNn/view?usp=drive_link" target="_blank">Resume</a>
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
        <ul className="flex flex-col items-center justify-center font-semibold backdrop-blur-md bg-(--bg) absolute w-screen h-[90vh] gap-5 text-(--grey)">
          <li>
            <NavLink to="/" className={linkClass} onClick={() => setMenu(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass} onClick={() => setMenu(false)}>About</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={linkClass} onClick={() => setMenu(false)}>Projects</NavLink>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1MOPR1z6kaQy0cMPuFCb7jR0McbYC1FNn/view?usp=drive_link" onClick={() => setMenu(false)}>Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
