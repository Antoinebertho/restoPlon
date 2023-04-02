import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Main from "./components/MainPage";
import { RestaurantContext } from "./context/restaurantContext";
import { restaurantsData } from "./data/restaurantsDatas";
import { FavoritesProvider } from "./context/FavoritesContext";
import FavoritesPage from "./components/FavoritesPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Banner />
        <FavoritesProvider>
          <RestaurantContext.Provider value={{ restaurants: restaurantsData }}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/FavoritesPage" element={<FavoritesPage />} />
            </Routes>
          </RestaurantContext.Provider>
        </FavoritesProvider>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
