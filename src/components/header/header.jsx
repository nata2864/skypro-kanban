import { useState } from "react";
import PopNewCard from "../PopUps/PopNewCard/PopNewCard";
import PopUserSet from "../PopUps/PopUserSet";
import PopExit from "../PopUps/PopExit/PopExit";

function Header() {
  const [isOpenPopUser, setIsOpenPopUser] = useState(false);
  const [isOpenPopCard, setIsOpenPopCard] = useState(false);
  const [isOpenPopExit, setIsOpenPopExit] = useState(false);

  function handleClickPopupUser() {
    setIsOpenPopUser((prev) => !prev);
  }
  function handleClickPopupCard() {
    setIsOpenPopCard(!isOpenPopCard);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img
                src="../../public/images/logo.png"
                alt="Логотип для светлой темы"
              />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img
                src="../public/images/logo_dark.png"
                alt="Логотип для темной темы"
              />
            </a>
          </div>
          <nav className="header__nav">
            <button
              className="header__btn-main-new _hover01"
              id="btnMainNew"
              onClick={handleClickPopupCard}
            >
              Создать новую задачу
            </button>

              <PopNewCard isOpenPopCard ={isOpenPopCard} onClose={() => setIsOpenPopCard(false)}/>
       

            <button className="button_user" onClick={handleClickPopupUser}>
              Ivan Ivanov
            </button>

            <PopUserSet
              setIsOpenPopUser={setIsOpenPopUser}
              setIsOpenPopExit={setIsOpenPopExit}
              isOpenPopUser={isOpenPopUser}
            />
          </nav>
        </div>
      </div>
      <PopExit isOpen={isOpenPopExit} onClose={() => setIsOpenPopExit(false)} />
    </header>
  );
}

export default Header;
