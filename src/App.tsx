import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { MainPage } from "./pages/MainPage";
import { RestaurantContext } from "./context/restaurantContext";
import { restaurantsData } from "./data/restaurantsDatas";
import { FavoritesProvider } from "./context/FavoritesContext";
import { FavoritesPage } from "./pages/FavoritesPage";

function App() {
  return (
    <BrowserRouter>
        <Banner />
        <FavoritesProvider>
          <RestaurantContext.Provider value={{ restaurants: restaurantsData }}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/FavoritesPage" element={<FavoritesPage />} />
            </Routes>
          </RestaurantContext.Provider>
        </FavoritesProvider>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
