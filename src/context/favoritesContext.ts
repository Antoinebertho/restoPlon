import React, { createContext, useState, useEffect} from "react";

export type FavoritesContextType = {
  favorites: number[] ;
  addFavorite: (restaurantId: number) => void;
  removeFavorite: (restaurantId: number) => void;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: () => undefined,
  removeFavorite: () => undefined,
})

export  const FavoritesProvider = ({children}: {children: React.ReactNode}): JSX.Element => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } , [favorites]);

  const addFavorite = (restaurantId: number) => {
      setFavorites((prevFavorites) => 
          prevFavorites.includes(restaurantId) ? prevFavorites : [...prevFavorites, restaurantId]
      )
  }

  const removeFavorite = (restaurantId: number) => {
      setFavorites((prevFavorites) => 
          prevFavorites.filter((id) => id !== restaurantId)
      )
  }

  return (
    <FavoritesContext.Provider value={{favorites, addFavorite, removeFavorite}}> 
    {children} 
    </FavoritesContext.Provider>
  );
}