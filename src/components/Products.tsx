const products = [
  {
    image: "https://www.starbucks.in/assets/icon/Bestseller.webp",
    label: "Bestseller",
  },
  {
    image: "https://www.starbucks.in/assets/icon/Drinks.webp",
    label: "Drinks",
  },
  {
    image: "https://www.starbucks.in/assets/icon/Food.webp",
    label: "Food",
  },
  {
    image: "https://www.starbucks.in/assets/icon/Merchandise.webp",
    label: "Merchandise",
  },
  {
    image: "https://www.starbucks.in/assets/icon/CoffeeAtHome.webp",
    label: "Coffee",
  },
  {
    image: "https://www.starbucks.in/assets/icon/ReadyToEat.webp",
    label: "Ready to Eat",
  },
];

const Products = () => {
  return (
    <div className="w-full flex flex-col mt-20">
      {/* Heading */}
      <h2 className="text-2xl ml-20 text-[#1e3932] font-semibold mb-6">
        Handcrafted Curations
      </h2>

      {/* Image Container */}
      <div className="flex ml-20 space-x-28">
        {products.map((item, index) => (
          <div key={index} className="w-24 h-32 flex flex-col items-center">
            <img
              src={item.image}
              alt={item.label}
              className="w-24 h-24 object-cover rounded-full border-2 border-gray-300 hover:border-green-800 transition duration-300"
            />
            <p className="text-sm text-center mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
