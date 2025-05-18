import CoffeeButton from "../shared/CoffeeButton";

const Card = ({ image, heading, description }) => {
  return (
    <div className=" absolute top-0 left-0 right-0 bottom-0 p-6 rounded-lg max-w-full bg-opacity-70 flex flex-col justify-between">
      <div className="flex">
        <div>
          <CoffeeButton />
        </div>
        <div className="mt-58">
          {/* Heading */}
          <h2 className="text-xl text-white mb-1 font-semibol">{heading}</h2>

          <div className="flex">
            <div>
              <img
                src={image}
                alt="card_img"
                className=" w-8 h-8  mr-4 rounded-full "
              />
            </div>
            {/* Description */}
            <p className="text-[10px] mt-2 text-white ">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
