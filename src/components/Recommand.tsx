const Recommand = () => {
  return (
    <div className="flex flex-col mt-20 w-full h-auto bg-[#edebe9] p-10">
      <div className="flex justify-between items-center mb-6">
        <div className="text-2xl ml-10 text-[#1e3932] font-bold">
          Barista Recommends
        </div>
        <div className="text-green-800 font-semibold text-xs ">View menu</div>
      </div>

      {/* Card Container */}

      {/* Example Card */}

      <div className="bg-white ml-10 rounded-lg shadow-xl p-3.5 w-95 ">
        <div className="flex ">
          {/* Icon / Image */}
          <img
            src="https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100501.webp"
            alt="Item Icon"
            className="w-16 h-16 mb-4 rounded-sm"
          />

          {/* Heading */}
          <div>
            <img
              src="https://www.starbucks.in/assets/icon/veg.svg"
              alt="Item Icon"
              className="ml-6 mt-2"
            />
            <h3 className="text-sm font-semibold text-[#1e3932] ml-6 ">
              Iced Caramel Latte
            </h3>
            <p className=" ml-6 text-[9px]">TALL 345ML 392Kcal</p>
          </div>
        </div>

        <div className="flex justify-between">
          {/* Price */}
          <p className="text-sm text-gray-600 font-bold mb-4">&#8377;499.00</p>

          {/* Add Item Button */}
          <button className="bg-green-800 text-white text-[10px] px-5 py-[1px]  rounded-full hover:bg-green-900  shadow-xl">
            Add Item
          </button>
        </div>
      </div>

      {/* Add more cards here */}
    </div>
  );
};

export default Recommand;
