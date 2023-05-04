import React from "react";
import { hotDogs } from "../utils/constats";
import Card from "./Card";

function HotDogs() {
  return (
    <div>
      <h2 className="cards__title">Хот-доги</h2>
      <section className="cards">
        {hotDogs.map((item, index) => (
          <Card
            title={item.title}
            image={item.image}
            price={item.price}
            mass={item.mass}
            key={index}
          />
        ))}
      </section>
    </div>
  )
}

export default HotDogs;