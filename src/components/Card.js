import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img className="card__img" src={props.image} alt="фото бургера" />
      <p className="card_price">{props.price}</p>
      <p className="card__title">{props.title}</p>
      <p className="card__mass">{props.mass}</p>
      <button className="card__btn">Добавить</button>
    </div>
  )
}

export default Card;