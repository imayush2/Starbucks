import { useState } from "react";
import Card2 from "./Card2";

const cardData = [
  {
    image:
      "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/ICW_Live_Event_Day7_f6e81a27fe.jpg",
    heading: "Pinnalce of Braiste Craft",
    subheading: "Published 1 year ago.",
    icon: "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/barista_avatar_day_7_ahmed_c0c00a5ee0.jpg",
    author: "Ahmed wajid",
    time: "6 minutes read",
    type: "Article",
  },
  {
    image:
      "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/ICW_Live_Event_Day5_41f11ca3d2.jpg",
    heading: "Art & Science of Coffee Brewing",
    subheading: "Published 1 year ago.",
    icon: "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/barista_avatar_day_5_c9c3f95f38.jpg",
    author: "Kunal jagdap",
    time: "9 minutes read",
    type: "Article",
  },
  {
    image:
      "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/ICW_Live_Event_Day4_8b66c34e69.jpg",
    heading: "Roasting is a Philosophy",
    subheading: "Published 1 year ago.",
    icon: "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/barista_avatar_day_4_7709eec1bc.jpg",
    author: "Ubaid Narzul Kazi",
    time: "5 minutes read",
    type: "Article",
  },
  {
    image:
      "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/ICW_Live_Event_Day3_f6f2374407.jpg",
    heading: "How to Brew the Perfect Coffee",
    subheading: "Published 1 year ago.",
    icon: "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/barista_avatar_day_3_79931959b5.jpg",
    author: "Murunyee sambersk",
    time: "5 minutes read",
    type: "Article",
  },
  {
    image:
      "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Women_Day_banner_v2_c04e8d083e.jpg",
    heading: "Geography is Flavor",
    subheading: "Published 1 year ago.",
    icon: "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/TSB_LOGO_3x_1_5bbd6dd955.png",
    author: "StartBucks",
    time: "6 minutes read",
    type: "Videos",
  },
  {
    image:
      "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/ICW_Live_Event_Day1_44e611af60.jpg",
    heading: "Celebrating Sumatra ",
    subheading: "Published 1 year ago.",
    icon: "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/avatar_barista_nidhi_23a9a62cef.jpg",
    author: "Siddhi sintre",
    time: "5 minutes read",
    type: "Article",
  },
  {
    image:
      "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Coffee_Agriculture_081853d817.jpg",
    heading: "Coffee Agriculture and Farming",
    subheading: "Published 2 year ago.",
    icon: "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/TSB_LOGO_3x_1_5bbd6dd955.png",
    author: "StartBucks",
    time: "3 minutes read",
    type: "Article",
  },
];

const Box2 = () => {
  const [activeTypes, setActiveTypes] = useState([]);

  // Toggle type on button click
  const toggleType = (type) => {
    setActiveTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  // Filter logic
  const filteredCards =
    activeTypes.length === 0
      ? cardData
      : cardData.filter((card) => activeTypes.includes(card.type));

  return (
    <div>
      {/* Filter Buttons */}
      <div className="w-full h-[55px] flex  items-center px-4 shadow-sm bg-white space-x-4">
        <span className="text-gray-700 ml-10 text-[11px] font-medium">
          Filter by:
        </span>
        <img
          src="https://www.starbucks.in/assets/icon/Union.svg"
          alt="img"
          className="w-4 h-4"
        />
        <button
          onClick={() => toggleType("Article")}
          className={`text-xs px-2 py-1 ml-10 rounded-lg transition ${
            activeTypes.includes("Article")
              ? "bg-green-700 text-white opacity-65"
              : "text-gray-500 bg-gray-100 hover:bg-gray-200"
          }`}
        >
          Article
        </button>
        <button
          onClick={() => toggleType("Videos")}
          className={`text-xs px-2 py-1 rounded-lg transition ${
            activeTypes.includes("Videos")
              ? "bg-green-700 text-white opacity-65"
              : "text-gray-500 bg-gray-100 hover:bg-gray-200"
          }`}
        >
          Videos
        </button>
      </div>

      {/* Filtered Cards */}
      <div className="mt-10  ml-25 mb-15 flex flex-wrap justify-between mr-17 gap-6">
        {filteredCards.map((card, index) => (
          <Card2
            key={index}
            image={card.image}
            heading={card.heading}
            subheading={card.subheading}
            icon={card.icon}
            author={card.author}
            timetext={card.time}
          />
        ))}
      </div>
    </div>
  );
};

export default Box2;
