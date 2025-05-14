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
    },
    {
      image:
        "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/BANNER_BG_WEB_452993d1ad.png",
      preHeading: "All New", // New pre-heading field
      heading: "☀️ Refreshing New Summer Specials ",
      description:
        "Beat the Heat with refreshing summer beverages and indulgent mango delights - craft to keep you cool and craving more.",
      cardImage: img2, // New image for the card
    },
    {
      image:
        "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Refreshers_dashboard_02_1_86726dda31.png",
      preHeading: "All New", // New pre-heading field
      heading: "Starbucks Refresher",
      description:
        "Beat the heat with your bestie. Refresher now available in Lyncee Rasberry and Kewi Calamansi flavours.",
      cardImage: img3, // New image for the card
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
    <div className="relative mt-15 flex justify-center">
      <div className="w-[1150px] h-[210px] overflow-hidden relative rounded-md border border-gray-300 shadow-xl ">
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
              />
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-green-900 bg-white bg-opacity-50 px-4 py-2 rounded-full hover:bg-opacity-70"
        >
          &larr;
        </button>

        {/* Right Button */}
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-green-900 bg-white bg-opacity-50 px-4 py-2 rounded-full hover:bg-opacity-70"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
