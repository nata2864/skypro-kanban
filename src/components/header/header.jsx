import { useState } from "react";
import PopNewCard from "../PopUps/PopNewCard/PopNewCard";
import PopUserSet from "../PopUps/PopUserSet";
import PopExit from "../PopUps/PopExit/PopExit";
import { Button} from "../Button.styled";
// import { buttonSizes,buttonMargins } from "../const";
// import { buttonSizes,buttonMargins  } from "../../const";
import { HeaderUserButton } from "../HeaderUserButton.styled";

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
            <Button
            $size = "new"
              $margin="new"
              $primary
              id="btnMainNew"
              onClick={handleClickPopupCard}
            >
              Создать новую задачу
            </Button>
{/* 
            <ButtonName className="button_user" onClick={handleClickPopupUser}>
              Ivan Ivanov
            </ButtonName> */}

            
            <HeaderUserButton  className="header__user" onClick={handleClickPopupUser}>
              Ivan Ivanov
            </HeaderUserButton >

            <PopUserSet
              setIsOpenPopUser={setIsOpenPopUser}
              setIsOpenPopExit={setIsOpenPopExit}
              isOpenPopUser={isOpenPopUser}
            />
          </nav>
        </div>
      </div>
      <PopNewCard
        isOpenPopCard={isOpenPopCard}
        onClose={() => setIsOpenPopCard(false)}
      />
      <PopExit isOpen={isOpenPopExit} onClose={() => setIsOpenPopExit(false)} />
    </header>
  );
}

export default Header;
