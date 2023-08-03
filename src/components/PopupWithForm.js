import React from 'react';
import ponchik from "../images/пончик.png"


function PopupWithForm({ isOpen, handleClose }) {

  const [radioDostavka, setRadioDostavka] = React.useState(true);
  const [radioSamovizov, setRadioSamovizov] = React.useState(false);

  function handleRadio() {
    if (radioDostavka) {
      setRadioDostavka(false);
      setRadioSamovizov(true);
    } else {
      setRadioDostavka(true);
      setRadioSamovizov(false);
    }
  }

  function handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
      //удаляем открытый попап
      handleClose();
    }
  }

  React.useEffect(() => {
    //закрытие на esc
    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        //удаляем открытый попап
        handleClose();
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscClose);
    }

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    }
  }, [isOpen, handleClose]);

  return (
    <div onMouseDown={handleOverlayClose} className={`popup ${isOpen && "popup_opened"}`}>
      <div className='popup__container'>
        <button className='popup__close-btn' type='button' onClick={handleClose} />
        <div className='popup__container-image'>
          <img src={ponchik} alt='пончик' className='popup__image' />
        </div>
        <form className='popup__form'>
          <h2 className='popup__title'>Доставка</h2>
          <input className='popup__input' placeholder='Ваше имя' type='text' />
          <input className='popup__input' placeholder='Телефон' type='tel' />
          <fieldset className='popup__fieldset-chek'>
            <label className='popup__label' >
              <input type='radio' checked={radioSamovizov} onClick={handleRadio} />
              <span>Самовывоз</span>
            </label>
            <label className='popup__label'>
              <input type='radio' name='format' checked={radioDostavka} onClick={handleRadio} />
              <span>Доставка</span>
            </label>
          </fieldset>
          {radioDostavka &&
            <>
              <input className='popup__input' placeholder='Улица, дом, квартира' type='text' />
              <fieldset className='popup__fieldset-input-dostavka'>
                <input className='popup__input' placeholder='Этаж' type='number' />
                <input className='popup__input' placeholder='Домофон' type='number' />
              </fieldset>
            </>
          }
          <button className={`popup__button popup__save-btn`} type='submit' >Оформить</button>
        </form>

      </div>
    </div>
  )
}

export default PopupWithForm;