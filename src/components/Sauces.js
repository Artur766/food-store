import React from "react";
import { souse } from "../utils/constats";
import Card from "./Card";

function Sauces(props) {
  return (
    <div>
      <h2 className="cards__title">{props.title}</h2>
      <section className="cards">
        {souse.map((item, index) => (
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

export default Sauces;