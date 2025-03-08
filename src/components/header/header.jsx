import { useState } from "react";
import PopNewCard from "../PopUps/PopNewCard/PopNewCard";
import PopUserSet from "../PopUps/PopUserSet";

function Header() {
  const [isOpenPopUser, setIsOpenPopUser] = useState(false);
  const [isOpenPopCard, setIsOpenPopCard] = useState(false);
  function togglePopupUser() {
    setIsOpenPopUser(!isOpenPopUser);
  }
  function togglePopupCard() {
    setIsOpenPopCard(!isOpenPopCard);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              {/* Найти правельный путь и лучше прописать альт */}
              {/* <img src="images/logo.png" alt="logo" /> */}
              <img src="../public/images/logo.png" alt="Логотип для светлой темы" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="../public/images/logo_dark.png" alt="Логотип для темной темы" />
            </a>
          </div>
          <nav className="header__nav">
            <button
              className="header__btn-main-new _hover01"
              id="btnMainNew"
              onClick={togglePopupCard}
            >
              Создать новую задачу
            </button>

            <div
              className={`pop-new-card ${isOpenPopCard ? "visible" : ""}`}
              id="popNewCard"
            >
              <PopNewCard />
            </div>

            <button className="button_user" onClick={togglePopupUser}>
              Ivan Ivanov
            </button>
            <div
              className="header__pop-user-set pop-user-set"
              id="user-set-target"
              style={{ display: isOpenPopUser ? "block" : "none" }}
            >
              <PopUserSet />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
