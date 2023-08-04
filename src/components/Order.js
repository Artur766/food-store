import React from "react";

function Order(props) {
  const [quantity, setQuantity] = React.useState(props.quantity);

  function handlePlus() {
    props.onQuantityChange({
      ...props,
      quantity: props.quantity + 1,
    })
  }

  function handleMinus() {
    setQuantity(quantity - 1);

    props.onQuantityChange({
      ...props,
      quantity: props.quantity + 1,
    })
    if (quantity === 0) {
      props.removeOrder(props);
    }
  }

  return (
    <div className="order">
      <img className="order__image" src={props.image} alt="заказ" />
      <div className="order__wrapper">
        <h3 className="order__title">{props.title}</h3>
        <p className="order__gramm">{props.mass}</p>
        <p className="order__price">{props.price * props.quantity}₽</p>
      </div>
      <div className="count">
        <button type="button" className="count__minus" onClick={handleMinus}>-</button>
        <div className="count__input">{props.quantity}</div>
        <button type="button" className="count__plus" onClick={handlePlus} >+</button>
      </div>
    </div>
  )
}

export default Order;