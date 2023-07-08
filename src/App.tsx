import React, { useState, useEffect } from "react";
import './App.css'
import Header from './Components/Header'
import Automobilesandparts from './assets/Automobilesandparts.png';
import BeautyProducts from './assets/BeautyProducts.png';
import ElectronicGadgets from './assets/ElectronicGadgets.png';
import Electronics from './assets/Electronics.png';
import furniture from './assets/furniture.png';
import Groceries from './assets/Groceries.png';
import localcircle from './assets/localcircle.png';
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0)
  const images = [
    Automobilesandparts,
    BeautyProducts,
    ElectronicGadgets,
    Electronics,
    furniture,
    Groceries,
    localcircle
  ];

  const [backgroundImage, setBackgroundImage] = useState(images[1]);

  useEffect(() => {
    let currentIndex = 0;

    const changeBackgroundImage = () => {
      currentIndex = (currentIndex + 1) % images.length;
      setBackgroundImage(images[currentIndex]);
    };

    const interval = setInterval(changeBackgroundImage, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Header/>
      <img src={backgroundImage} alt="Background" style={{ width: "100%", height: "600px" } } className="carh rounded-lg " />
      <Footer/>
  </div>
  )
}

export default App
