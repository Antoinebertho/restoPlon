import { createContext } from "react";

type RestaurantType = {
  id: number;
  name: string;
  address: string;
  description_short: string;
  description_long: string;
  img: string;
  menu: {
    entrees: string[];
    dishes: string[];
    deserts: string[];
  };
};

export type RestaurantContextType = {
  restaurants: RestaurantType[];
  userName: string;
};

export const RestaurantContext = createContext<RestaurantContextType>({
  restaurants: [],
  userName: ""
});