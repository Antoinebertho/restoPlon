import { createContext } from "react";

export type FavoritesContextType = {
  favorites: [];
  addFavorite: () => {};
  removeFavorite: () => {};
};

export const FavoritesContext = createContext<string[]>([]);