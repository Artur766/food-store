import React from "react";
import { Link } from "react-router-dom"

function Categorie(props) {

  const [isSelected, setIsSelected] = React.useState(false);

  function handleClick() {
    setIsSelected(!isSelected)
  }


  return (
    <Link
      onClick={handleClick}
      to={props.route}
      className={`food-categories__link ${isSelected ? "food-categories__container_select" : ""}`}
      type="button" >
      <img className="food-categories__icon" src={props.icon} alt="иконки" />
      {props.title}
    </Link>
  )
}

export default Categorie;