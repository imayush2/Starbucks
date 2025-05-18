import Carousel2 from "../components/Carousel2";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { carouselData2 } from "../helpers/carouselData2";
import Box from "../components/Box";
import Box2 from "../components/Box2";

const Discover = () => {
  const [activeLink, setActiveLink] = useState("");

  const links = ["Popular", "Recent"];
  return (
    <>
      <Navbar />

      <div className="mt-10 p-10">
        <p className="  text-[#6a6e6c] ml-4 mb-4 text-xs">
          Profile &gt; Coffee Culture
        </p>

        <div className="mt-5 ml-110">
          <div className="flex items-center mt-4 flex-grow gap-8 ml-16 text-sm">
            <ul className="flex ml-8 gap-8">
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

      <div>
        <Box />
      </div>

      <div>
        <Box2></Box2>
      </div>
    </>
  );
};

export default Discover;
