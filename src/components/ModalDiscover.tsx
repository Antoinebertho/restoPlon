import { useContext, useRef, useState } from "react";
import { restaurantType } from "../models/restaurantType";
import { FavoritesContext } from "../context/FavoritesContext";
import { ModalRemove } from "./ModalRemove";
import "tailwindcss/tailwind.css";

type ModalDiscoverProps = { onClose: () => void; restaurant: restaurantType };

export const ModalDiscover = ({ onClose, restaurant }: ModalDiscoverProps) => {
  const { favorites, addFavorite } = useContext(FavoritesContext);
  const [showModal, setShowModal] = useState(false);

  const isFavorite = (restaurantId: number) => {
    return favorites.includes(restaurantId);
  };

  const idRef = useRef(0);

  const handleDeleteClick = (id: number) => {
    idRef.current = id;
    console.log(idRef);

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="fixed top-0 h-full overflow-y-scroll flex items-center justify-center outline-none focus:outline-none">
      <div className="w-auto max-w-3xl mx-auto my-6 h-full">
        <div className=" flex flex-col w-full bg-gray-800 border-0 rounded-2xl shadow-lg outline-none focus:outline-none">
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
            <div className="mt-1 text-md font-semibold text-center pb-3 text-gray-300">
              {restaurant.menu.entrees.map((entree) => (
                <p key={entree}>{entree}</p>
              ))}
            </div>
            <p className="mt-1 text-md font-extrabold text-center text-gray-300 underline ">
              Plats
            </p>
            <div className="mt-1 text-md font-semibold text-center pb-3 text-gray-300">
              {restaurant.menu.dishes.map((dish) => (
                <p key={dish}>{dish}</p>
              ))}
            </div>
            <p className="mt-1 text-md font-extrabold text-center  text-gray-300 underline ">
              Desserts
            </p>
            <div className="mt-1 text-md font-semibold text-center pb-3 text-gray-300">
              {restaurant.menu.deserts.map((desert) => (
                <p key={desert}>{desert}</p>
              ))}
            </div>
            <div className="sm:flex sm:items-center sm:justify-between pt-2">
              <p className="mt-1 text-sx italic py-3 text-gray-300 ">
                {restaurant.description_short}
              </p>
              <> </>
              {isFavorite(restaurant.id) ? (
                <button
                  className="inline-block rounded bg-pink-600 px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500 focus:ring-yellow-400 hover:bg-indigo-500"
                  onClick={() => handleDeleteClick(restaurant.id)}
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
              {showModal && (
                <ModalRemove
                  isOpen={showModal}
                  onClose={closeModal}
                  idRef={idRef.current}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div onClick={onClose}></div>
    </div>
  );
};
