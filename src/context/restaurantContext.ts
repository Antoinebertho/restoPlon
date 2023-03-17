import { createContext } from "react";
import { RestaurantType } from "../models/restaurantType";

export type RestaurantContextType = {
  restaurants: RestaurantType[];
  userName: string;
};

export const RestaurantContext = createContext<RestaurantContextType>({
  restaurants: [],
  userName: ""
});