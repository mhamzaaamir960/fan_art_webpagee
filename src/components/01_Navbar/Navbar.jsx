import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { navLinks } from "./Links";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.navbar}`}>
      <div className="bg-white rounded-b-xl">
        <img src="./fanArtLogo.svg" />
      </div>

      {/* Desktop Navbar */}
      <ul
        className={` hidden lg:flex items-center justify-center gap-x-[12px] underline-offset-0`}
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.link} className={styles.navLink}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* toogle Menu icons */}

      <div className="lg:hidden cursor-pointer p-1 rounded-md bg-white flex justify-center items-center">
        {toggle ? (
          <RxCross2
            size={30}
            className="text-[#f4d35f] opacity-100 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <IoMenu
            size={30}
            className="text-[#f4d35f] opacity-100 cursor-pointer "
            onClick={() => setToggle(!toggle)}
          />
        )}
      </div>

      {/* Mobile Navbar */}
      {toggle && (
        <ul
          className={`flex flex-col items-start justify-center gap-y-2 absolute top-28 sm:right-24 md:right-32 
        lg:hidden p-4 rounded-lg bg-[#243E47] border border-white z-20`}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.link} className="text-xl">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
