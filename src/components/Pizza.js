import React from "react";
import { pizza } from "../utils/constats";
import Card from "./Card";
import { useSelector } from "react-redux";

function Pizza(props) {

  const meal = useSelector(state => state.meal.meal);

  return (
    <div>
      <h2 className="cards__title">{props.title}</h2>
      <section className="cards">
        {meal.map((item, index) => (
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

export default Pizza;