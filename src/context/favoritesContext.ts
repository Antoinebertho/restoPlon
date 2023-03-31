import { createContext } from "react";

export type FavoritesContextType = {
  favorites: number[] ;
  addFavorite: () => {};
  removeFavorite: () => {};
};

export const FavoritesContext = createContext<string[]>([]);