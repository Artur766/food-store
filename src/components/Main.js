import React from "react";
import Categorie from "./Categorie";
import { buttonLinks } from "../utils/constats"
import { Route, Routes } from "react-router-dom";
import Burgers from "./Burgers";
import Snack from "./Snacks";
import HotDogs from "./HotDogs";


function Main() {



  return (
    <main>
      <section className="food-categories">
        <div className="food-categories__container">
          {buttonLinks.map((item, index) => (
            <Categorie
              icon={item.image}
              title={item.title}
              key={index}
              route={item.path}
            />
          ))}
        </div>
      </section>
      <div className="container">
        <section className="basket"></section>
        <Routes>
          <Route path="/" element={<Burgers />} />
          <Route path="/snack" element={<Snack />} />
          <Route path="/hot-dog" element={<HotDogs />} />
          {/* <Route path="/combo" element={<Burgers />} />
          <Route path="/shaurma" element={<Burgers />} />
          <Route path="/pizza" element={<Burgers />} />
          <Route path="/vok" element={<Burgers />} />
          <Route path="/deserts" element={<Burgers />} />
          <Route path="/sauces" element={<Burgers />} /> */}
        </Routes>

      </div>
    </main>
  )
}

export default Main;