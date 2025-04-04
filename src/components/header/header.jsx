import { useState } from "react";
import { RoutesApp } from "../../const";
import PopUserSet from "../PopUps/PopUserSet/PopUserSet";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button.styled";
import { HeaderUserButton } from "./HeaderUserButton.styled";
import Logo from "../Logo/Logo";
import * as S from "./Header.styled";

function Header() {
  const [isOpenPopUser, setIsOpenPopUser] = useState(false);

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
              onClick={() => navigate(RoutesApp.NEWCARD)}
            >
              Создать новую задачу
            </Button>
            <HeaderUserButton onClick={handleClickPopupUser}>
              Ivan Ivanov
            </HeaderUserButton>
            <PopUserSet
              setIsOpenPopUser={setIsOpenPopUser}
              isOpenPopUser={isOpenPopUser}
            />
          </S.Nav>
        </S.Block>
      </S.Container>
    </S.Header>
  );
}

export default Header;
