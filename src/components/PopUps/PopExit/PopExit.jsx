import { Button } from "../../Button.styled";
import { useNavigate } from "react-router-dom";
import * as S from "./PopExit.styled";
import { RoutesApp } from "../../../const";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

function PopExit() {
  const navigate = useNavigate();
  const {logout} = useContext(AuthContext);

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
          <S.Form id="formExit">
          <S.FormGroup>
              <Button
                $primary
                $size="exit"
                $margin="exit"
                onClick={handleLogout}
              >
                Да, выйти
              </Button>
              <Button
                $size="exit"
                type="button"
                onClick={() => {
                  navigate(RoutesApp.MAIN);
                }}
              >
                Нет, остаться
              </Button>
            </S.FormGroup>
          </S.Form>
        </S.Block>
      </S.Container>
    </S.PopExit>
  );
}

export default PopExit;
