import { useNavigate } from "react-router-dom";
import * as S from "./AuthForm.styled";
import { AuthButton } from "./AuthForm.styled";
import { signUp, signIn } from "../../services/auth";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { checkRequiredFields } from "../../utils";
import { toast } from "react-toastify";
import { textValidationErrors, RoutesApp } from "../../const";

function AuthForm({ isSignUp }) {
  const navigate = useNavigate();
  const { updateUserInfo } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    login: false,
    password: false,
  });

  const validateForm = () => {
    const requiredFields = ["login", "password", ...(isSignUp ? ["name"] : [])];
    const { isValid } = checkRequiredFields(formData, requiredFields);

    if (!isValid) {
      toast.error(
        isSignUp
          ? textValidationErrors.signUpError
          : textValidationErrors.signInError
      );
    }

    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const data = !isSignUp
        ? await signIn({ login: formData.login, password: formData.password })
        : await signUp(formData);

      if (data) {
        if (isSignUp) {
          navigate(RoutesApp.SIGN_IN);
        } else {
          updateUserInfo(data);
          navigate(RoutesApp.MAIN);
        }
      }
    } catch (err) {
      toast.error(err.message || "Что-то пошло не так");
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Modal>
          <S.ModalBlok>
            <div>
              <S.Title>{isSignUp ? "Регистрация" : "Вход"}</S.Title>
            </div>
            <S.Form onSubmit={handleSubmit}>
              {isSignUp && (
                <S.Input
                  $error={errors.name}
                  type="text"
                  name="name"
                  id="first-name"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleChange}
                />
              )}

              <S.Input
                $error={errors.login}
                type="email"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
                value={formData.login}
                onChange={handleChange}
              />
              <S.Input
                $error={errors.password}
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
              />

              <AuthButton $primary type="submit">
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
