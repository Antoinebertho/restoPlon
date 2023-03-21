import React from "react";
import "tailwindcss/tailwind.css";
import { restaurants } from "../data/datas";
import ModalCheck from "./ModalCheck";

interface SectionProps {}

const Section: React.FC<SectionProps> = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = React.useState({
    name: "",
    img: "",
    address: "",
    description_long: "",
    menu: {
      entrees: ["", ""],
      dishes: ["", "", ""],
      deserts: ["", ""],
    },
    description_short: "",
  });

  const handleCheckClick = (restaurant: typeof restaurants[number]) => {
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
  };

  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-4xl font-bold sm:text-4xl">Bon appetit!</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            >
              <img
                src={restaurant.img}
                alt={restaurant.name}
                className="h-56 w-full rounded-md object-cover"
              />
              <h2 className="mt-4 text-xl font-bold text-white">
                {restaurant.name}
              </h2>
              <p className="mt-1 text-xs text-gray-300 ">
                {restaurant.description_short}
              </p>
              <p className="text-xs mt-1.5 sm:mt-0 text-gray-500">
                {restaurant.address}
              </p>
              <div className="mt-12 text-center">
                <button
                  className="inline-block rounded bg-pink-600 px-8 py-3 text-sm font-medium text-white transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-pink-900 focus:ring-yellow-400 hover:bg-pink-700 mr-6"
                  onClick={() => handleCheckClick(restaurant)}
                >
                  Voir
                </button>
                <> </>
                <button className="inline-block rounded bg-pink-600 px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-pink-500 focus:ring-yellow-400 hover:bg-pink-700">
                  ♥️
                </button>
              </div>
            </div>
          ))}
        </div>
        {isModalOpen && (
          <ModalCheck
            onClose={() => setIsModalOpen(false)}
            restaurant={selectedRestaurant}
          />
        )}
      </div>
    </section>
  );
};

export default Section;
