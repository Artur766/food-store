import React from "react";
import logo from "../images/logo (1).svg"
import iconTelegram from "../images/Vector.svg"
import iconVk from "../images/Vector (1).svg"
import iconPhone from "../images/еуд.svg"


function Footer() {
  return (
    <footer className="footer">
      <div className="footer__one-column">
        <img className="footer__logo" src={logo} alt="лого" />
        <p className="footer__copyrigth">© YouMeal, 2023. Адгамов Артур</p>
        <p className="footer__disaner">Design: Anastasia Ilina</p>
      </div>
      <div className="footer__two-column">
        <div >
          <p className="footer__text">Номер для заказа</p>
          <div className="footer__wrapper-contact">
            <img className="footer__image-tel" src={iconPhone} alt="иконка телефона" />
            <p className="footer__num">+7(930)833-38-11</p>
          </div>
        </div>
        <div >
          <p className="footer__about-text">Мы в соцсетях</p>
          <nav className="footer__social">
            <a className="footer__link"><img className="footer__icon" src={iconTelegram} alt="иконка телеграма" /></a>
            <a className="footer__link"><img className="footer__icon" src={iconVk} alt="иконка вк" /></a>
          </nav>
        </div>
      </div >
    </footer>
  )
}

export default Footer