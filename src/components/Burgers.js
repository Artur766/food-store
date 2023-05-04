import React from "react";
import { burgers } from "../utils/constats";
import Card from "./Card";

function Burgers() {
  return (
    <div>
      <h2 className="cards__title">Бургеры</h2>
      <section className="cards">
        {burgers.map((item, index) => (
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

export default Burgers;