import { createContext } from "react";
import { restaurantType } from "../models/restaurantType";

export type RestaurantContextType = {
  restaurants: restaurantType[];
};

export const RestaurantContext = createContext<RestaurantContextType>({
  restaurants: []
});

//const {restaurants}= useContext(RestaurantContext)