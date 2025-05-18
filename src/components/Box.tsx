const Box = () => {
  return (
    <div className="w-full mt-20 h-12 bg-[#f2f0eb] flex items-center space-x-6 border-b border-gray-300">
      <span className="ml-14 relative cursor-pointer text-sm text-gray-500 group">
        All
        <span className="absolute left-1/2 -bottom-4 w-0 h-[2px] bg-green-700 transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
      </span>
      <span className="ml-5 text-gray-500 text-sm">|</span>
      <span className="relative text-sm ml-5 cursor-pointer text-gray-500 group">
        Coffee Culture
        <span className="absolute left-1/2 -bottom-4 w-0 h-[2px] bg-green-700 transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
      </span>
    </div>
  );
};

export default Box;
