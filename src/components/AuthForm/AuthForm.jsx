// import { AuthButton } from "../Button.styled";
import * as S from "./AuthForm.styled"
import { AuthButton } from "./AuthForm.styled";

function AuthForm() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Modal>
          <S.ModalBlok>
            <div>
              <S.Title>Регистрация</S.Title>
            </div>
            <S.Form id="formLogUp" action="#">
              <S.Input
                className="modal__input first-name"
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
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
              <AuthButton 
             $primary
                id="SignUpEnter"
              >
                <a href="../main.html">Зарегистрироваться</a>{" "}
              </AuthButton>
              <div className="modal__form-group">
                <S.ModalText>
                  Уже есть аккаунт? <S.ModalLink href="signin.html">Войдите здесь</S.ModalLink>
                </S.ModalText>
              </div>
            </S.Form>
          </S.ModalBlok>
        </S.Modal>
      </S.Container>
    </S.Wrapper>
  );
}

export default AuthForm;
