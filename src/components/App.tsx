import React from 'react';
// import { useState, useEffect } from 'react'
import Banner from './Banner';
import Footer from './Footer';
import Section from './Section';


function App() {
    // const savedFav = localStorage.getItem('fav')
	// const [fav, updateFav] = useState(savedFav ? JSON.parse(savedFav) : [])
	// useEffect(() => {
	// 	localStorage.setItem('fav', JSON.stringify(fav))
	// }, [fav])
  return (
    <div>
        <Banner />
        <Section />
        <Footer />
    </div>
  )
}

export default App;