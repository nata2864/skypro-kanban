import { useNavigate } from "react-router-dom";
import * as S from "./PopExit.styled";
import { RoutesApp } from "../../../const";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

function PopExit() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  function handleLogout(e) {
    e.preventDefault();
    logout();
    navigate(RoutesApp.SIGN_IN);
  }
  return (
    <S.PopExit>
      <S.Container>
        <S.Block>
          <S.Title>
            <h2>Выйти из аккаунта?</h2>
          </S.Title>

          <S.FormGroup>
            <S.PopExitButtonYes $primary onClick={handleLogout}>
              Да, выйти
            </S.PopExitButtonYes>
            <S.PopExitButton
              type="button"
              onClick={() => {
                navigate(RoutesApp.MAIN);
              }}
            >
              Нет, остаться
            </S.PopExitButton>
          </S.FormGroup>
        </S.Block>
      </S.Container>
    </S.PopExit>
  );
}

export default PopExit;
