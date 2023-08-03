import React from 'react'
import moto from "../images/мопед.svg"
import Order from "./Order";

export default function Basket({ isOrders, totalPrice, quantityOrders, handleQuantityChange, removeOrder, handleOpenPopup }) {

  const [isBasketOpen, setIsBasketOpen] = React.useState(false);

  function handleOpenBasket() {
    setIsBasketOpen(true);
  }

  function handleCloseBasket() {
    setIsBasketOpen(false);
  }

  return (
    <section className="basket">
      <div className="basket__header" onClick={handleOpenBasket}>
        <h3 className="basket__title" >Корзина</h3>
        <div className="basket__number-orders">{quantityOrders}</div>
      </div>
      <div className={`basket__container ${isBasketOpen ? "basket__container_visable" : ""}`}>
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
        <button disabled={!quantityOrders ? true : false} type="submit" className={quantityOrders ? "basket__btn" : "basket__btn basket__btn_disabled"} onClick={handleOpenPopup}>Оформить заказ</button>
        <div className="basket__delivery">
          <div className='basket__container-delivery'>
            <img className="basket__svg" src={moto} alt="мопед" />
            <p className="basket__delivery-text">{totalPrice >= 599 ? "Бесплатная доставка" : "Бесплатная доставка от 599"}</p>
          </div>
          <span className='basket__roll-up' onClick={handleCloseBasket}>Свернуть</span>
        </div>
      </div>
    </section>
  )
}
