const Card = ({ preHeading, image, heading, description, textColor }) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 p-6 rounded-lg max-w-full bg-opacity-70 flex flex-col justify-between">
      <div className="flex">
        <div>
          <img src={image} alt="card_img" className="w-22 h-45 mr-15 " />
        </div>
        <div>
          {/* PreHeading */}
          <p className={`${textColor} text-xs mb-5`}>{preHeading}</p>
          {/* Heading */}
          <h2 className={` ${textColor} text-xl mb-4 font-semibol`}>
            {heading}
          </h2>
          {/* Description */}
          <p className={`text-xs ${textColor} mt-2`}>{description}</p>
        </div>
      </div>

      {/* Button positioned at the bottom-right corner */}
      <button className="absolute right-10 bottom-20 bg-green-800 text-white px-4 py-2 rounded-full hover:bg-green-700">
        Know More
      </button>
    </div>
  );
};

export default Card;
