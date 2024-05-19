import React, { useState, useEffect } from "react";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import styles from "../constants/style";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState(
    localStorage.getItem("activePage") || "Home"
  );
  const [toggle, setToggle] = useState(false);
  const [color, setColor] = useState("");
  const [sticky, setSticky] = useState("");
  useEffect(() => {
    function changeColor() {
      const scrollY = window.scrollY;
      if (scrollY > 2000 && scrollY <= 9000) {
        setColor("bg-navbar-2");
      } else {
        setColor("bg-purple-gradient");
      }
      if (scrollY > 600 && scrollY <= 9000) {
        setSticky("nav1");
      } else {
        setSticky("");
      }
    }
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  function setActivePage(navtitle) {
    setActive(navtitle);
    localStorage.setItem("activePage", navtitle);
  }
  return (
    <>
      <nav
        className={`w-full flex py-[30px] px-4 md:px-6 justify-between items-center
        ${color} ${sticky} bg-purple-gradient z-[10] h-[90px] xs:h-[125px] sm:h-[135px]`}
      >
        <a href="/">
          <div className="-mx-[30px] sm:mx-0 md:max-w-[700px] max-w-[200px] max-h-[120px] flex flex-row items-center">
            <img
              src="https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/q_5/dpr_auto/bbbbqgjfs494kia7vlw5.jpg"
              alt="Sparksites Studio Logo"
              className="max-w-[100px] xs:max-w-[130px] sm:max-w-[160px]"
            />
            <img
              src="https://res.cloudinary.com/dixg66tpb/image/upload/f_webp/q_5/dpr_auto/wrix6smtc2bi79aeocix.jpg"
              alt="SPARKSITES STUDIOS"
              className="sm:w-[280px] w-[140px] xs:w-[170px] -ml-[40px] sm:-ml-[50px] -mt-[5px]"
            />
          </div>
        </a>

        <ul className="list-none md:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`${styles.list} ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } mr-10 hover:text-primary transition ease-out duration-300`}
            >
              <a href={nav.link} onClick={() => setActivePage(nav.title)}>
                {nav.title}
              </a>
            </li>
          ))}
          <a href="/services#getstarted">
            <button className="btn py-3 px-4 bg-navbar font-roboto font-medium text-[18px] text-white outline-none rounded-full">
              Request A Proposal
            </button>
          </a>
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center z-[100]">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[20px] ss:w-[28px] h-[28px] object-contain z-[100]"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </nav>

      <div
        className={`${
          !toggle ? "hidden" : "flex-col"
        } p-6 bg-purple-gradient nav w-[65%] xs:w-[58%] ss:w-[50%] transition-all duration-500 ease-in-out`}
      >
        <div className="justify-end flex mt-6 mr-8">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[20px] ss:w-[28px] h-[28px] object-contain z-[100]"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <ul className="list-none flex justify-center items-center mt-[60%] flex-1 flex-col">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`${styles.list} ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } mb-6`}
            >
              <a href={nav.link} onClick={() => setActivePage(nav.title)}>
                {nav.title}
              </a>
            </li>
          ))}
          <a href="/services#getstarted">
            <button className="btn py-2 ss:py-4 px-2 ss:px-4 bg-navbar font-roboto font-medium text-[12px] xs:text-[14px] ss:text-[16px] text-white outline-none rounded-full">
              Request A Proposal
            </button>
          </a>
        </ul>
      </div>
      <div
        className={`${
          toggle ? "hidden" : "block"
        } top-[85px] xs:top-[120px] sm:top-[130px] ${
          sticky ? "scroll-watcher" : null
        }`}
      ></div>
    </>
  );
};

export default Navbar;
