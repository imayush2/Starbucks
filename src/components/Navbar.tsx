import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import logo from "../assets/logo.png";
import account from "../assets/account.svg";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const links = [
    { name: "Home", path: "/" },
    { name: "Gift", path: "/gift" },
    { name: "Order", path: "/order" },
    { name: "Pay", path: "/pay" },
    { name: "Store", path: "/store" },
  ];

  return (
    <nav className="flex items-center px-5 py-3 shadow-md fixed top-0 w-full bg-white z-50">
      {/* Logo */}
      <div className="flex-shrink-0 ml-10">
        <img src={logo} alt="logo" className="h-10" />
      </div>

      {/* Nav Links */}
      <div className="flex items-center flex-grow gap-8 ml-10">
        <ul className="flex ml-8 gap-16">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setActiveLink(link.name)}
                className={`relative text-gray-600 text-[14px] hover:text-green-800 transition-colors duration-200 ${
                  activeLink === link.name ? "text-green-800" : ""
                }`}
              >
                {link.name}
                {activeLink === link.name && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-green-800 transition-all duration-300"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Search + Account */}
      <div className="flex items-center gap-20 ml-4 mr-10">
        <input
          type="text"
          placeholder="Looking for something specific?"
          className="px-8 py-0.5 border border-gray-300 rounded-full focus:outline-none placeholder:text-xs focus:ring-2 focus:ring-green-800"
        />
        <img src={account} alt="accountLogo" className="h-8 w-8" />
      </div>
    </nav>
  );
};

export default Navbar;
