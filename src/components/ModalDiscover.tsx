import { useContext } from "react";
import { restaurantType } from "../models/restaurantType";
import { FavoritesContext } from "../context/FavoritesContext";

type ModalDiscoverProps = { onClose: () => void; restaurant: restaurantType };

const ModalDiscover = ({ onClose, restaurant }: ModalDiscoverProps) => {
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  const isFavorite = (restaurantId: number) => {
    return favorites.includes(restaurantId);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none --tw-translate-x: (-50%, -50%)">
      <div className="relative w-auto max-w-3xl mx-auto my-6">
        <div className="relative flex flex-col w-full bg-gray-800 border-0 rounded-2xl shadow-lg outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-900 rounded-t">
            <h3 className="text-3xl font-semibold">{restaurant.name}</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-white opacity-2 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              x
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
            <p className="mt-1 text-md font-semibold text-center  pb-3 text-gray-300 ">
              {restaurant.menu.entrees.join(" et/ou ")}
            </p>
            <p className="mt-1 text-md font-extrabold text-center text-gray-300 underline ">
              Plats
            </p>
            <p className="mt-1 text-md font-semibold text-center pb-3 text-gray-300 ">
              {restaurant.menu.dishes.join(" et/ou ")}
            </p>
            <p className="mt-1 text-md font-extrabold text-center  text-gray-300 underline ">
              Desserts
            </p>
            <p className="mt-1 text-md font-semibold text-center   text-gray-300 ">
              {restaurant.menu.deserts.join(" et/ou ")}
            </p>
            <div className="sm:flex sm:items-center sm:justify-between pt-2">
              <p className="mt-1 text-sx italic py-3 text-gray-300 ">
                {restaurant.description_short}
              </p>
              <> </>
              {isFavorite(restaurant.id) ? (
                <button
                  className="inline-block rounded bg-pink-600 px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500 focus:ring-yellow-400 hover:bg-indigo-500"
                  onClick={() => removeFavorite(restaurant.id)}
                >
                  Retirer
                </button>
              ) : (
                <button
                  className="inline-block rounded bg-pink-600 px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500 focus:ring-yellow-400 hover:bg-indigo-500"
                  onClick={() => addFavorite(restaurant.id)}
                >
                  Ajouter
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div onClick={onClose}></div>
    </div>
  );
};

export default ModalDiscover;