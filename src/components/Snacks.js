import React from "react";
import { snack } from "../utils/constats";
import Card from "./Card";

function Snack() {
  return (
    <div>
      <h2 className="cards__title">Закуски</h2>
      <section className="cards">
        {snack.map((item, index) => (
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

export default Snack;