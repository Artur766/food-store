import { useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Haeder";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import React from 'react';

function App() {


  const [isOpen, setIsOpen] = React.useState(false);

  function handlePopup() {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className="wrapper">
        <Header />
        <Main handleOpenPopup={handlePopup} />
        <Footer />
      </div>
      <PopupWithForm isOpen={isOpen} handleClose={handlePopup} />
    </>
  );
}

export default App;
