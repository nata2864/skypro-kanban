import { useNavigate } from "react-router-dom";
import * as S from "./AuthForm.styled";
import { AuthButton } from "./AuthForm.styled";

import { RoutesApp } from "../../const";

function AuthForm({ isSignUp, setIsAuth }) {
  const navigate = useNavigate();
   const handleLogin = (e) => {
      e.preventDefault();
      setIsAuth(true);
      navigate(RoutesApp.MAIN);
   };
  return (
    <S.Wrapper>
      <S.Container>
        <S.Modal>
          <S.ModalBlok>
            <div>
              <S.Title>{isSignUp ? "Регистрация" : "Вход"}</S.Title>
            </div>
            <S.Form id="formLogUp" action="#">
              {isSignUp && (
                <S.Input
                  className="modal__input first-name"
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                />
              )}

              <S.Input
                className="modal__input login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <S.Input
                className="modal__input password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <AuthButton $primary id="SignUpEnter"  onClick={handleLogin}>
                  {isSignUp ? "Зарегистрироваться" : "Войти"}
              </AuthButton>
              <S.TextGroep>
                {isSignUp && (
                  <div>
                    <S.ModalText>
                      Уже есть аккаунт?{" "}
                      <S.ModalLink to={RoutesApp.SIGN_IN}>
                        Войдите здесь
                      </S.ModalLink>
                    </S.ModalText>
                  </div>
                )}
                {!isSignUp && (
                  <div>
                    <S.ModalText>
                      Нужно зарегистрироваться?{" "}
                      <S.ModalLink to={RoutesApp.SIGN_UP}>
                        Регистрируйтесь здесь
                      </S.ModalLink>
                    </S.ModalText>
                  </div>
                )}
              </S.TextGroep>
            </S.Form>
          </S.ModalBlok>
        </S.Modal>
      </S.Container>
    </S.Wrapper>
  );
}

export default AuthForm;
