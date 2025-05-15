import { useState } from "react";
import Card from "./Card"; // Import your Card component
import img1 from "../assets/CardImg1.png";
import img2 from "../assets/CardImg2.png";
import img3 from "../assets/CardImg3.png";

const Carousel = () => {
  const carouselData = [
    {
      image:
        "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/BG_WEB_08b7ce409f.png",
      preHeading: "Starbucks", // New pre-heading field
      heading: "Beverage Subscription",
      description:
        "Starbucks Subscription is Back! Your Favourite for less. Tap for details. T&C Apply.",
      cardImage: img1, // New image for the card
      button: "Explore menu",
    },
    {
      image:
        "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/BANNER_BG_WEB_452993d1ad.png",
      preHeading: "All New", // New pre-heading field
      heading: "☀️ Refreshing New Summer Specials ",
      description:
        "Beat the Heat with refreshing summer beverages and indulgent mango delights - craft to keep you cool and craving more.",
      cardImage: img2, // New image for the card
      button: "Order now",
    },
    {
      image:
        "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Refreshers_dashboard_02_1_86726dda31.png",
      preHeading: "All New", // New pre-heading field
      heading: "Starbucks Refresher",
      description:
        "Beat the heat with your bestie. Refresher now available in Lyncee Rasberry and Kewi Calamansi flavours.",
      cardImage: img3, // New image for the card
      button: "Know more",
    },
    {
      image:
        "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/BG_WEB_83bb4a2479.png",
      preHeading: "Starbucks", // New pre-heading field
      heading: "Beverage Subscription",
      description:
        "Starbucks Subscription is Back! Your Favourite for less. Tap for details. T&C Apply.",
      cardImage:
        "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/image_7_e38baafb43.png", // New image for the card
      button: "Explore menu",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length
    );
  };

  return (
    <div className="bg-white ml-14  w-[1180px] h-[210px]  ">
      <div className="relative mt-15 flex justify-center">
        <div className="w-[1150px] h-[200px]  overflow-hidden relative rounded-md border border-gray-300 shadow-xl ">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carouselData.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0 relative">
                <img
                  src={item.image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Pass data to Card component */}
                <Card
                  preHeading={item.preHeading}
                  heading={item.heading}
                  description={item.description}
                  image={item.cardImage}
                  textColor={index === 0 ? "text-white" : "text-black"}
                  button={item.button}
                />
              </div>
            ))}
          </div>
        </div>
        {/* left button */}
        <button
          onClick={prevImage}
          disabled={currentIndex === 0}
          className={`absolute left-3.5 top-[65%] transform -translate-y-1/2 -translate-x-1/2 
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
          disabled={currentIndex === carouselData.length - 1}
          className={`absolute right-3.5 top-[65%] transform -translate-y-1/2 translate-x-1/2 
    text-green-900 bg-white bg-opacity-50 w-[38px] h-[38px]
    flex items-center justify-center rounded-full 
    shadow-xl drop-shadow-lg hover:bg-opacity-70 z-10
    ${currentIndex === carouselData.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          &rarr;
        </button>
      </div>

      {/* Slider line */}
      <div>
        <div className="w-1/5 flex justify-center ml-120 mt-5">
          <div className="relative w-[1150px] h-0.5 bg-gray-300 rounded-full">
            <div
              className="absolute top-0 left-0 h-0.5 bg-green-700 rounded-full transition-all duration-500"
              style={{
                width: `${100 / carouselData.length}%`,
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
