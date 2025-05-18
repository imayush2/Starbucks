import CoffeeButton from "../shared/CoffeeButton";
const Card2 = ({ image, heading, subheading, icon, author, timetext }) => {
  return (
    <div className="w-[340px] h-[170x] bg-[#f9f9f9] border border-[#ededed] rounded-lg shadow-lg relative overflow-visible cursor-pointer ">
      {/* Flex container */}
      <div className="flex items-center h-full pl-16 pr-4 py-4 relative">
        {/* Overlapping image */}
        <div className="absolute left-0 top-[37%] -translate-y-1/2 -ml-10 w-20 h-20 z-10">
          <img
            src={image}
            alt="Card"
            className="w-full h-full object-cover rounded-md  "
          />
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-hidden">
          <div className="mb-5 mt-5">
            <CoffeeButton />
            <h2 className="text-sm  font-semibold  text-gray-800 leading-snug break-words">
              {heading}
            </h2>
            <p className="text-[8px] mt-1   text-gray-600  leading-snug break-words">
              {subheading}
            </p>
            <div className="flex items-center mt-13 ">
              <img
                src={icon}
                alt="Author"
                className="w-5 h-5 rounded-full mr-2"
              />
              <span className="text-gray-700 text-xs font-semibold">
                {author}
              </span>
              <span className="text-[8px] mt-[2px] ml-2">{timetext}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
