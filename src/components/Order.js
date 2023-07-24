import React, { useEffect } from "react";

function Order(props) {
  const [value, setValue] = React.useState(1);

  function handleChange(e) {
    setValue(e.target.value);
    props.onChangePrice(e.target.value * props.price);
  }

  function handleIncrement() {
    setValue(value + 1);
    // props.onIncrement(value * props.price);
  }

  function handleDecrement() {
    if (value > 1) {
      setValue(value - 1);
    }
  }

  return (
    <div className="order">
      <img className="order__image" src={props.image} alt="заказ" />
      <div className="order__wrapper">
        <h3 className="order__title">{props.title}</h3>
        <p className="order__gramm">{props.gramm}</p>
        <p className="order__price">{props.price * value}₽</p>
      </div>
      <div className="count">
        <button type="button" className="count__minus" onClick={handleDecrement}  >-</button>
        <input className="count__input" value={value} onChange={handleChange} />
        <button type="button" className="count__plus" onClick={handleIncrement} >+</button>
      </div>
    </div>
  )
}

export default Order;