import React from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { RestaurantContext } from "./context/restaurantContext";
import { restaurantsData } from "./data/restaurantsDatas";
// import { useState, useEffect } from 'react'

function App() {
  // const savedFav = localStorage.getItem('fav')
  // const [fav, updateFav] = useState(savedFav ? JSON.parse(savedFav) : [])
  // useEffect(() => {
  // 	localStorage.setItem('fav', JSON.stringify(fav))
  // }, [fav])
  return (
    <div className="App">
      <Banner />
      <RestaurantContext.Provider value={{ restaurants: restaurantsData }}>
        <Main />
      </RestaurantContext.Provider>
      <Footer />
    </div>
  );
}

export default App;