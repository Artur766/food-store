import React from "react";
import { Link } from "react-router-dom"

function Categorie(props) {
  return (
    <Link className="food-categories__link" type="button"><img className="food-categories__icon" src={props.icon} />{props.title}</Link>
  )
}

export default Categorie;