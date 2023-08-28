import React from "react";
import burger from "../images/burger.svg"
import logo from "../images/logo.svg"

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="лого" />
      <div className="header__wrapper">
        <img className="header__burger" src={burger} alt="бургер"></img>
        <div className="header__text">
          <h1 className="header__title">Только самые <span className="header__span">Сочные бургеры!</span></h1>
          <p className="header__subtitle">Бесплатная доставка от 599₽</p>
        </div>
      </div>
    </header>
  )
}

export default Header