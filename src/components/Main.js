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


function Main() {

  const navigate = useNavigate();

  const [isSelectedCategorie, setIsSelectedCategorie] = React.useState("Бургеры");
  function handleSetIsSelected(categorie) {
    setIsSelectedCategorie(categorie);
  }

  React.useEffect(() => {
    navigate("/");
  }, [])

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
        <section className="basket"></section>
        <Routes>
          <Route path="/" element={<Burgers title={"Бургеры"} />} />
          <Route path="/snack" element={<Snack title={"Снэки"} />} />
          <Route path="/hot-dog" element={<HotDogs title={"Хот-доги"} />} />
          <Route path="/combo" element={<Combo title={"Комбо"} />} />
          <Route path="/shaurma" element={<h2 className="cards__title">Скоро в меню!</h2>} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/vok" element={<h2 className="cards__title">Скоро в меню!</h2>} />
          <Route path="/deserts" element={<Desserts />} />
          <Route path="/sauces" element={<Sauces />} />
        </Routes>
      </div>
    </main>
  )
}

export default Main;