import React from "react";
import { deserts } from "../utils/constats";
import Card from "./Card";

function Desserts(props) {
  return (
    <div>
      <h2 className="cards__title">{props.title}</h2>
      <section className="cards">
        {deserts.map((item, index) => (
          <Card
            addOrder={props.addOrder}
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

export default Desserts;