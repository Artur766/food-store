import React from 'react'
import moto from "../images/мопед.svg"
import Order from "./Order";

export default function Basket({ isOrders, totalPrice, quantityOrders, handleQuantityChange, removeOrder }) {

  return (
    <section className="basket">
      <div className="basket__header">
        <h3 className="basket__title">Корзина</h3>
        <div className="basket__number-orders">{quantityOrders}</div>
      </div>
      <div className="orders">
        {
          isOrders.map((item, index) => (
            <Order
              key={index}
              title={item.title}
              price={item.price}
              image={item.image}
              mass={item.mass}
              quantity={item.quantity}
              onQuantityChange={handleQuantityChange}
              removeOrder={removeOrder}
            />
          ))
        }
      </div>
      <div className="basket__total">
        <p className="basket__text">Итого</p>
        <p className="backet__total-price">{totalPrice}₽</p>
      </div>
      <button type="submit" className="basket__btn">Оформить заказ</button>
      <div className="basket__delivery">
        <img className="basket__svg" src={moto} alt="мопед" />
        <p className="basket__delivery-text">{totalPrice >= 599 ? "Бесплатная доставка" : "Бесплатная доставка от 599"}</p>
      </div>
    </section>
  )
}
