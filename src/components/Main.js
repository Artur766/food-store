import React from "react";
import Categorie from "./Categorie";
import { buttonLinks } from "../utils/constats"

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
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Main;