import Carousel2 from "../components/Carousel2";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { carouselData2 } from "../helpers/carouselData2";

const Discover = () => {
  const [activeLink, setActiveLink] = useState("");

  const links = ["Popolar", "Recent"];
  return (
    <>
      <Navbar />

      <div className="mt-10 p-10">
        <p className="  text-[#1e3932] mb-4">Profile Coffee Culture</p>

        <div className="mt-5 ml-110">
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
        </div>
      </div>

      <div className="-mt-18">
        <Carousel2 carouselData2={carouselData2} />
      </div>
    </>
  );
};

export default Discover;
