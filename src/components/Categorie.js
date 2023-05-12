import React from "react";
import { Link } from "react-router-dom"

function Categorie(props) {
  return (
    <Link
      onClick={props.handleClick}
      to={props.route}
      className={`food-categories__link ${props.isSelected ? "food-categories__container_select" : ""}`}
      type="button" >
      <img className="food-categories__icon" src={props.icon} alt="иконки" />
      {props.title}
    </Link>
  )
}

export default Categorie;