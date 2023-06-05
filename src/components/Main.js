import React from "react";
import Categorie from "./Categorie";
import { buttonLinks } from "../utils/constats"
import { Route, Routes, useNavigate } from "react-router-dom";
import Burgers from "./Burgers";
import Snack from "./Snacks";
import HotDogs from "./HotDogs";
import Combo from "./Combo";
import Pizza from "./Pizza";
import Desserts from "./Desserts";
import Sauces from "./Sauces";
import moto from "../images/мопед.svg"
import Order from "./Order";


function Main() {

  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [isSelectedCategorie, setIsSelectedCategorie] = React.useState("Бургеры");
  const [isOrders, setIsOrders] = React.useState([]);
  const [priceOrder, setPriceOrder] = React.useState(0);

  function handleSetIsSelected(categorie) {
    setIsSelectedCategorie(categorie);
  }

  React.useEffect(() => {
    navigate("/");
  }, [])

  function addOrder(card) {
    const index = isOrders.findIndex(order => order.title === card.title);
    if (index === -1) {
      setIsOrders([...isOrders, { ...card, quantity: 1 }]);
    } else {
      const updatedOrders = [...isOrders];
      updatedOrders[index].quantity += 1;
      setIsOrders(updatedOrders);
      console.log(card.quantity)
    }

    setTotalPrice(totalPrice + card.price);
  }

  function handleOrderValues(price) {
    setPriceOrder(totalPrice + price);
  }

  return (
    <main>
      <section className="food-categories">
        <div className="food-categories__container">
          {buttonLinks.map((item, index) => (
            <Categorie
              icon={item.image}
              title={item.title}
              key={index}
              route={item.path}
              isSelected={isSelectedCategorie === item.title}
              handleClick={() => { handleSetIsSelected(item.title) }}
            />
          ))}
        </div>
      </section>
      <div className="container">
        <section className="basket">
          <div className="basket__header">
            <h3 className="basket__title">Корзина</h3>
            <div className="basket__number-orders">{isOrders.length}</div>
          </div>
          <div className="orders">
            {
              isOrders.map((item, index) => (
                <Order
                  key={index}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  gramm={item.mass}
                  handleOrderValues={handleOrderValues}
                  quantity={item.quantity}
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
        <Routes>
          <Route path="/" element={<Burgers addOrder={addOrder} title={"Бургеры"} />} />
          <Route path="/snack" element={<Snack addOrder={addOrder} title={"Снэки"} />} />
          <Route path="/hot-dog" element={<HotDogs addOrder={addOrder} title={"Хот-доги"} />} />
          <Route path="/combo" element={<Combo addOrder={addOrder} title={"Комбо"} />} />
          <Route path="/shaurma" element={
            <div className="cards">
              <h2 className="cards__title">Скоро в меню!</h2>
            </div>
          }
          />
          <Route path="/pizza" element={<Pizza addOrder={addOrder} title={"Пицца"} />} />
          <Route path="/vok" element={
            <div className="cards">
              <h2 className="cards__title">Скоро в меню!</h2>
            </div>
          }
          />
          <Route path="/deserts" element={<Desserts addOrder={addOrder} title={"Десерты"} />} />
          <Route path="/sauces" element={<Sauces addOrder={addOrder} title={"Соусы"} />} />
        </Routes>
      </div>
    </main>
  )
}

export default Main;