import { useContext } from "react";
import "tailwindcss/tailwind.css";
import { RestaurantContext } from "../context/restaurantContext";
import { FavoritesContext } from "../context/FavoritesContext";
import Card from "../components/Card";

const FavoritesPage = () => {
  const { restaurants } = useContext(RestaurantContext);
  const { favorites } = useContext(FavoritesContext);

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
            <Card restaurant={restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavoritesPage;
