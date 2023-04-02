import { useContext, useState } from "react";
import "tailwindcss/tailwind.css";
import ModalDiscover from "./ModalDiscover";
import { restaurantType } from "../models/restaurantType";
import { RestaurantContext } from "../context/restaurantContext";
import { FavoritesContext } from "../context/FavoritesContext";

const FavoritesPage = () => {
  const { restaurants } = useContext(RestaurantContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<restaurantType | null>(null);

  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  const handleCheckClick = (restaurant: restaurantType) => {
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
  };

  const isFavorite = (restaurantId: number) => {
    return favorites.includes(restaurantId);
  };

  const favoriteRestaurants = restaurants.filter((restaurant) =>
    isFavorite(restaurant.id)
  );

  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-4xl font-bold sm:text-4xl">Mes favoris</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {favoriteRestaurants.map((restaurant) => (
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
                  className="inline-block rounded bg-pink-600 px-8 py-3 text-sm font-medium text-white transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500 focus:ring-yellow-400 hover:bg-indigo-500 mr-6"
                  onClick={() => handleCheckClick(restaurant)}
                >
                  Découvrir
                </button>
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
          ))}
        </div>
        {isModalOpen && selectedRestaurant != null && (
          <ModalDiscover
            onClose={() => setIsModalOpen(false)}
            restaurant={selectedRestaurant}
          />
        )}
      </div>
    </section>
  );
};

export default FavoritesPage;
