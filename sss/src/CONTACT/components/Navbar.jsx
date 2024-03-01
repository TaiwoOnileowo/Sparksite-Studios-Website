import React, { useState ,useEffect} from "react";
import close from "../../HOMEPAGE/assets/close.svg";
import menu from "../../HOMEPAGE/assets/menu.svg";
import logo from "../../HOMEPAGE/assets/logo.png";
import styles from "../../style";
import { buttonLinks, navLinks } from "../../HOMEPAGE/constants";

const Navbar = () => {
  const [active, setActive] = useState("Contact Us");
  const [toggle, setToggle] = useState(false);
  const [color, setColor] = useState("");

  useEffect(() => {
    function changeColor() {
      const scrollY = window.scrollY;
      if (scrollY > 1000 && scrollY <= 2500) {
        setColor("bg-navbar-1");
      } else if (scrollY > 2500 && scrollY <= 9000) {
        setColor("bg-navbar-2");
      } else {
        setColor("bg-purple-gradient");
      }
    }
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll",changeColor);
    };
  },[]);
  return (
    <>
    <nav className={`w-full flex py-2 px-6 justify-between items-center bg-purple-gradient fixed z-[100] ${color}`}>
      <a href="/">

      <img src={logo} alt="hoobank" className="w-[300px] h-[92px]" loading="lazy"/>
      </a>

      <ul className="list-none md:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={` ${styles.list} ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } mr-10 hover:text-primary transition ease-out duration-300`}
            onClick={() => setActive(nav.title)}
          >
            <a href={nav.link}>{nav.title}</a>
          </li>
        ))}
        <a href={buttonLinks[0].link}>

        <button className="py-3 px-4 bg-navbar font-roboto btn font-medium text-[18px] text-white outline-none rounded-full">Request A Proposal</button>
        </a>
      </ul>

      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain z-[100]"
          onClick={() => setToggle(!toggle)}
          loading="lazy"
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-purple-gradient nav transition-all duration-500 ease-in-out`}
        >
          <ul className="list-none flex justify-center items-center flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`${styles.list} ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } mb-6`}
                onClick={() => setActive(nav.title)}
              >
                <a href={nav.link}>{nav.title}</a>
              </li>
            ))}
            <a href={buttonLinks[0].link}>

            <button className="py-3 px-4 bg-navbar font-roboto btn font-medium text-[12px] text-white outline-none rounded-full">Request A Proposal</button>
            </a>
          </ul>
        </div>
      </div>
    </nav>
    <div className="scroll-watcher"></div>
   </> 
  );
};

export default Navbar;
