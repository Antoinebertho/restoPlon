import React from "react";

interface ModalCheckProps {
  onClose: () => void;
  restaurant: {
    name: string;
    img: string;
    address: string;
    description_long: string;
    menu: {
      entrees: string[];
      dishes: string[];
      deserts: string[];
    };
    description_short: string;
  };
}

const ModalCheck: React.FC<ModalCheckProps> = ({ onClose, restaurant }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none --tw-translate-x: (-50%, -50%)">
      <div className="relative w-auto max-w-3xl mx-auto my-6">
        <div className="relative flex flex-col w-full bg-gray-800 border-0 rounded-2xl shadow-lg outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-900 rounded-t">
            <h3 className="text-3xl font-semibold">{restaurant.name}</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-xl block outline-none focus:outline-none">
                x
              </span>
            </button>
          </div>
          <div className="relative p-6 flex-auto">
            <img
              src={restaurant.img}
              alt={restaurant.name}
              className="h-56 w-full rounded-md object-cover"
            />
            <p className="text-md mt-1.5 sm:mt-0 py-3 text-gray-500">
              {restaurant.address}
            </p>
            <p className="mt-1 text-md text-gray-300 ">
              {restaurant.description_long}
            </p>
            <p className="mt-1 text-md font-extrabold text-center text-gray-300 underline ">
              Entrées
            </p>
            <p className="mt-1 text-md font-semibold text-center  text-gray-300 ">
              {restaurant.menu.entrees.join(", ")}
            </p>
            <p className="mt-1 text-md font-extrabold text-center text-gray-300 underline ">
              Plats
            </p>
            <p className="mt-1 text-md font-semibold text-center text-gray-300 ">
              {restaurant.menu.dishes.join(", ")}
            </p>
            <p className="mt-1 text-md font-extrabold text-center text-gray-300 underline ">
              Desserts
            </p>
            <p className="mt-1 text-md font-semibold text-center text-gray-300 ">
              {restaurant.menu.deserts.join(", ")}
            </p>
            <p className="mt-1 text-sx italic py-3 text-gray-300 ">
              {restaurant.description_short}
            </p>
          </div>
        </div>
      </div>
      <div
        className="fixed inset-0 z-40 bg-black opacity-10"
        onClick={onClose}
      ></div>
    </div>
  );
};

export default ModalCheck;