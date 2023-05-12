import React from "react";
import { combo } from "../utils/constats"
import Card from "./Card";

function Combo(props) {
  return (
    <div>
      <h2 className="cards__title">{props.title}</h2>
      <section className="cards">
        {combo.map((item, index) => (
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

export default Combo;