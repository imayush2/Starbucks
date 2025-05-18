import { useState } from "react";
import Cardx from "./Cardx"; // Import your Card component
import { carouselData2 } from "../helpers/carouselData2";

const Carousel = ({ carouselData2 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData2.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselData2.length) % carouselData2.length
    );
  };

  return (
    <div className="bg-white ml-14  w-[1180px] h-[300px] mb-28  ">
      <div className="relative mt-15 flex justify-center">
        <div className="w-[1150px] h-[340px]  overflow-hidden relative rounded-md border border-gray-300 shadow-xl ">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carouselData2.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0 relative">
                <img
                  src={item.image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-100 object-cover"
                />
                {/* Pass data to Card component */}
                <Cardx
                  heading={item.heading}
                  description={item.name}
                  image={item.icon}
                />
              </div>
            ))}
          </div>
        </div>
        {/* left button */}
        <button
          onClick={prevImage}
          disabled={currentIndex === 0}
          className={`absolute left-3.5 top-[57%] transform -translate-y-1/2 -translate-x-1/2 
    text-green-900 bg-white bg-opacity-50 w-[38px] h-[38px] 
    flex items-center justify-center rounded-full 
    shadow-xl drop-shadow-lg hover:bg-opacity-70 z-10
    ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          &larr;
        </button>

        {/* right button */}
        <button
          onClick={nextImage}
          disabled={currentIndex === carouselData2.length - 1}
          className={`absolute right-3.5 top-[57%] transform -translate-y-1/2 translate-x-1/2 
    text-green-900 bg-white bg-opacity-50 w-[38px] h-[38px]
    flex items-center justify-center rounded-full 
    shadow-xl drop-shadow-lg hover:bg-opacity-70 z-10
    ${currentIndex === carouselData2.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          &rarr;
        </button>
      </div>

      {/* Slider line */}
      <div>
        <div className="w-1/5 flex justify-center ml-120 mt-5 ">
          <div className="relative w-[1150px] h-0.5 bg-gray-300 rounded-full">
            <div
              className="absolute top-0 left-0 h-0.5 bg-green-700 rounded-full transition-all duration-500"
              style={{
                width: `${100 / carouselData2.length}%`,
                transform: `translateX(${currentIndex * 100}%)`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
