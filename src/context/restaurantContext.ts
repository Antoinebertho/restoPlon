import { createContext } from "react";
import { restaurantType } from "../models/restaurantType";

export type RestaurantContextType = {
  restaurants: restaurantType[];
  userName: string;
};

export const RestaurantContext = createContext<RestaurantContextType>({
  restaurants: [],
  userName: ""
});