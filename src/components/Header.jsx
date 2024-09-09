import Container from "./Container";
import Flex from "./Flex";
import logo from "../assets/Logo.png";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const cartRef = useRef();

  // Toggle the menu visibility
  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <section className="nav">
      <header className="py-5 items-center main styl">
        <Container>
          <Flex className="justify-between">
            {/* Logo */}
            <div>
              <img src={logo} alt="Company Logo" />
            </div>

            {/* Navigation Links */}
            <div>
              <ul
                className={`lg:flex gap-x-12 font-semibold absolute right-0 top-0 lg:static ${
                  show
                    ? "top-[50px] right-0 w-full bg-[grey] lg:bg-transparent z-10 duration-300 ease-in-out text-center"
                    : "top-[50px] right-[-450px] w-full duration-300 ease-in-out text-center"
                }`}
                onClick={() => setShow(false)}
              >
                <NavLink to="/">
                  <li className="py-3 lg:py-0 text-[16px] font-normal font-sans hover:font-bold">
                    Home
                  </li>
                </NavLink>
                <NavLink to="/Shop">
                  <li className="py-3 lg:py-0 text-[16px] font-normal lg:text-[#77676] font-sans hover:font-bold">
                    Shop
                  </li>
                </NavLink>
                <NavLink to="/About">
                  <li className="py-3 lg:py-0 text-[16px] font-normal font-sans hover:font-bold">
                    About
                  </li>
                </NavLink>
                <NavLink to="/Contact">
                  <li className="py-3 lg:py-0 text-[16px] font-normal font-sans hover:font-bold">
                    Contact
                  </li>
                </NavLink>
                <NavLink to="/Journal">
                  <li className="py-3 lg:py-0 text-[16px] font-normal font-sans hover:font-bold">
                    Journal
                  </li>
                </NavLink>
              </ul>
            </div>

            {/* Hamburger / Close Icon */}
            <div onClick={toggleMenu} className="lg:hidden">
              {show ? <ImCross /> : <FaBars />}
            </div>
          </Flex>
        </Container>
      </header>
    </section>
  );
};

export default Header;
