import React from "react";

function Order(props) {


  return (
    <div className="order">
      <img className="order__image" src={props.image} alt="заказ" />
      <div className="order__wrapper">
        <h3 className="order__title">{props.title}</h3>
        <p className="order__gramm">{props.gramm}</p>
        <p className="order__price">{props.price}₽</p>
      </div>
      <div className="count">
        <button type="button" className="count__minus" onClick={props.countMinus}>-</button>
        <input className="count__input" value={props.value} onChange={props.handleChange} />
        <button type="button" className="count__plus" onClick={props.countPLus}>+</button>
      </div>
    </div>
  )
}

export default Order;