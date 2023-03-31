import React from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { RestaurantContext } from "./context/restaurantContext";
import { restaurantsData } from "./data/restaurantsDatas";
import { FavoritesProvider } from "./context/favoritesContext";

function App() {
  return (
    <div className="App">
      <Banner />
      <FavoritesProvider>
      <RestaurantContext.Provider value={{ restaurants: restaurantsData }}>
        <Main />
      </RestaurantContext.Provider>
      </FavoritesProvider>
      <Footer />
    </div>
  );
}

export default App;