import { useState } from "react";
import PopNewCard from "../PopUps/PopNewCard/PopNewCard";
// import PopUserSet from "../PopUps/PopUserSet";
import PopUserSet from "../PopUps/PopUserSet/PopUserSet";
import { useNavigate } from "react-router-dom";
import PopExit from "../PopUps/PopExit/PopExit";
import { Button } from "../Button.styled";
import { HeaderUserButton } from "./HeaderUserButton.styled";
import Logo from "../Logo/Logo";
import * as S from "./Header.styled";

function Header() {
  const [isOpenPopUser, setIsOpenPopUser] = useState(false);
  const [isOpenPopExit, setIsOpenPopExit] = useState(false);

  function handleClickPopupUser() {
    setIsOpenPopUser((prev) => !prev);
  }

  const navigate = useNavigate();

  return (
    <S.Header>
      <S.Container>
        <S.Block>
          {/* <div className="header__logo _show _light">
            <a href="" target="_self">
              <img
                src="../../public/images/logo.png"
                alt="Логотип для светлой темы"
              />
            </a>
          </div> */}
          <Logo />
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img
                src="../public/images/logo_dark.png"
                alt="Логотип для темной темы"
              />
            </a>
          </div>
          <S.Nav>
            <Button
              $size="new"
              $margin="new"
              $primary
              id="btnMainNew"
              onClick={() => navigate("/card/add")}
            >
              Создать новую задачу
            </Button>
            <HeaderUserButton onClick={handleClickPopupUser}>
              Ivan Ivanov
            </HeaderUserButton>
            <PopUserSet
              setIsOpenPopUser={setIsOpenPopUser}
              setIsOpenPopExit={setIsOpenPopExit}
              isOpenPopUser={isOpenPopUser}
            />
          </S.Nav>
        </S.Block>
      </S.Container>
      {/* <PopNewCard
        isOpenPopCard={isOpenPopCard}
        onClose={() => setIsOpenPopCard(false)}
      /> */}
      <PopExit isOpen={isOpenPopExit} onClose={() => setIsOpenPopExit(false)} />
    </S.Header>
  );
}

export default Header;
