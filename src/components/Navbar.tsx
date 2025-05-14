import React, { useState } from "react";
import logo from "../assets/logo.png";
import account from "../assets/account.svg";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const links = ["Home", "Gift", "Order", "Pay", "Store"];

  return (
    <nav className="flex items-center px-5 py-3 shadow-md fixed top-0 w-full bg-white z-50">
      {/* Logo */}
      <div className="flex-shrink-0 ml-10">
        <img src={logo} alt="logo" className="h-10" />
      </div>

      {/* Nav Links */}
      <div className="flex items-center flex-grow gap-8 ml-10">
        <ul className="flex ml-8 gap-16">
          {links.map((item) => (
            <li key={item}>
              <a
                href="#"
                onClick={() => setActiveLink(item)}
                className={`relative text-gray-600 text-[14px]  hover:text-green-800 transition-colors duration-200 ${
                  activeLink === item ? "text-green-800" : ""
                }`}
              >
                {item}
                {activeLink === item && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-green-800 transition-all duration-300"></span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Search + Account */}
      <div className="flex items-center gap-20 ml-4 mr-10">
        <input
          type="text"
          placeholder="Looking for something specific?"
          className="px-8 py-0.5  border border-gray-300 rounded-full focus:outline-none placeholder:text-xs focus:ring-2 focus:ring-green-800"
        />
        <img src={account} alt="accountLogo" className="h-8 w-8" />
      </div>
    </nav>
  );
};

export default Navbar;
