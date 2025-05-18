import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <div className="bg-[#edebe9] mt-10 p-6 rounded-lg shadow-md">
      <div className="flex justify-between">
        {/* Heading */}
        <h2 className="text-xl ml-15 font-extrabold text-[#1e3932] mt-1 mb-8">
          Learn more about the world of coffee!
        </h2>

        <Link
          to="/discover"
          className="text-green-800 mr-5 mt-3 font-semibold text-xs cursor-pointer"
        >
          Discover more
        </Link>
      </div>

      {/* Image with Text Overlay */}
      <div className="relative w-[95%] h-[330px] rounded-lg overflow-hidden group">
        {/* Image */}
        <img
          src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/ICW_Live_Event_Day5_41f11ca3d2.jpg"
          alt="Learn more"
          className="w-full ml-15 h-full object-cover brightness-[0.7] group-hover:brightness-[0.5] transition duration-300"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 bg-opacity-50 flex items-center ml-20 mt-20">
          <p className="text-white text-2xl font-semibold text-center px-4">
            Art & Science Of coffee Brewing
          </p>
        </div>
        <div className="absolute inset-0 bg-opacity-50 flex items-center ml-20 mt-37">
          <p className="text-white text-xs text-center px-4">
            Master the perfect Brew with StarBucks! Learn the art and Science of
            coffee Brewing.
          </p>
        </div>
        <div className="absolute inset-0 bg-opacity-50 flex items-center ml-23 mt-60">
          <button className="bg-white text-green-950 text-xs font-semibold px-14 py-1 rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
