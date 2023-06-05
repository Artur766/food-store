import React from "react";

function Order(props) {

  const [orderValues, setOrderValues] = React.useState(props.quantity);

  function handleChange(e) {
    setOrderValues(e.target.value);
  }


  function countPLus() {
    setOrderValues(orderValues + 1);
    props.handleOrderValues(props.price);
  }
  function countMinus() {
    if (orderValues > 1) {
      setOrderValues(orderValues - 1);
      props.handleOrderValues(-props.price);
    }
  }
  return (
    <div className="order">
      <img className="order__image" src={props.image} alt="заказ" />
      <div className="order__wrapper">
        <h3 className="order__title">{props.title}</h3>
        <p className="order__gramm">{props.gramm}</p>
        <p className="order__price">{props.price}₽</p>
      </div>
      <div className="count">
        <button type="button" className="count__minus" onClick={countMinus} >-</button>
        <input className="count__input" value={orderValues} onChange={handleChange} />
        <button type="button" className="count__plus" onClick={countPLus} >+</button>
      </div>
    </div>
  )
}

export default Order;