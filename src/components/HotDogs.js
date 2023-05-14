import React from "react";
import { hotDogs } from "../utils/constats";
import Card from "./Card";

function HotDogs(props) {
  return (
    <div>
      <h2 className="cards__title">{props.title}</h2>
      <section className="cards">
        {hotDogs.map((item, index) => (
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

export default HotDogs;