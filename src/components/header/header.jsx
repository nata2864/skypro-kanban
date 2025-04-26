import { useState, useContext } from "react";
import { RoutesApp } from "../../const";
import PopUserSet from "../PopUps/PopUserSet/PopUserSet";
import { useNavigate } from "react-router-dom";
import {
  HeaderUserButton,
  HeaderPopupNewCardButton,
} from "./HeaderUserButton.styled";
import Logo from "../Logo/Logo";
import * as S from "./Header.styled";
import { AuthContext } from "../../context/AuthContext";

function Header() {
  const [isOpenPopUser, setIsOpenPopUser] = useState(false);

  function handleClickPopupUser() {
    setIsOpenPopUser((prev) => !prev);
  }

  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  return (
    <S.Header>
      <S.Container>
        <S.Block>
          <Logo />
          <div className="header__logo _dark">
            <img
              src="../public/images/logo_dark.png"
              alt="Логотип для темной темы"
            />
          </div>
          <S.Nav>
            <HeaderPopupNewCardButton
              $primary
              onClick={() => navigate(RoutesApp.NEWCARD)}
            >
              Создать новую задачу
            </HeaderPopupNewCardButton>
            <HeaderUserButton onClick={handleClickPopupUser}>
              {user.name}
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
