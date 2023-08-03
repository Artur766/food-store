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
import Basket from "./Basket";



function Main({ handleOpenPopup }) {

  const navigate = useNavigate();
  const [isSelectedCategorie, setIsSelectedCategorie] = React.useState("Бургеры");
  const [isOrders, setIsOrders] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [quantityOrders, setQuantityOrders] = React.useState(0);

  function handleSetIsSelected(categorie) {
    setIsSelectedCategorie(categorie);
  }

  React.useEffect(() => {
    navigate("/");
  }, [])

  React.useEffect(() => {
    setQuantityOrders(isOrders.reduce((acc, order) => acc + order.quantity, 0));
    const newTotalPrice = isOrders.reduce((acc, order) => acc + order.price * order.quantity, 0);
    setTotalPrice(newTotalPrice);
  }, [isOrders])

  function addOrder(card) {
    const index = isOrders.findIndex(order => order.title === card.title);
    if (index === -1) {
      setIsOrders([...isOrders, { ...card, quantity: 1 }]);

    } else {
      const updatedOrders = [...isOrders];
      updatedOrders[index].quantity += 1;
      setIsOrders(updatedOrders);
    }
  }

  function handleQuantityChange(updatedOrder) {
    const updatedOrders = isOrders.map(order => {
      if (order.title === updatedOrder.title) {
        return updatedOrder;
      }
      return order;
    });
    setIsOrders(updatedOrders);
  }

  function removeOrder() {
    setIsOrders(isOrders.filter(item => item.quantity !== 0));
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
        <div className="container__basket">
          <Basket
            removeOrder={removeOrder}
            isOrders={isOrders}
            totalPrice={totalPrice}
            quantityOrders={quantityOrders}
            handleQuantityChange={handleQuantityChange}
            handleOpenPopup={handleOpenPopup}
          />
        </div>
        <Routes>
          <Route path="/" element={<Burgers addOrder={addOrder} title={"Бургеры"} />} />
          <Route path="/snack" element={<Snack addOrder={addOrder} title={"Снэки"} />} />
          <Route path="/hot-dog" element={<HotDogs addOrder={addOrder} title={"Хот-доги"} />} />
          <Route path="/combo" element={<Combo addOrder={addOrder} title={"Комбо"} />} />
          <Route path="/shaurma" element={
            <div>
              <h2 className="cards__title">Шаурма</h2>
              <section className="cards">
                <h2>Скоро в меню!</h2>
              </section>
            </div>
          }
          />
          <Route path="/pizza" element={<Pizza addOrder={addOrder} title={"Пицца"} />} />
          <Route path="/vok" element={
            <div>
              <h2 className="cards__title">Вок</h2>
              <section className="cards">
                <h2>Скоро в меню!</h2>
              </section>
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