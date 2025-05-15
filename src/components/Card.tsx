const Card = ({
  preHeading,
  image,
  heading,
  description,
  textColor,
  button,
}) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 p-6 rounded-lg max-w-full bg-opacity-70 flex flex-col justify-between">
      <div className="flex">
        <div>
          <img
            src={image}
            alt="card_img"
            className="-ml-6 w-22 h-47 -mt-2 mr-15 "
          />
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
      <button className="absolute right-10 bottom-17.5 bg-[#00754a] text-white text-xs px-14 py-3.5 rounded-full">
        {button}
      </button>
    </div>
  );
};

export default Card;
