import { useNavigate } from "react-router-dom";
import * as S from "./AuthForm.styled";
import { AuthButton } from "./AuthForm.styled";
import { signUp, signIn } from "../../services/auth";
import { RoutesApp } from "../../const";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

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

  const [error, setError] = useState("");

  const validateForm = () => {
    const requiredFields = ["login", "password", ...(isSignUp ? ["name"] : [])];
    const newErrors = {};
    let isValid = true;

    for (const field of requiredFields) {
      if (!formData[field].trim()) {
        newErrors[field] = true;
        isValid = false;
      }
    }

    if (!isValid) {
      setError(
        isSignUp
          ? "Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме."
          : "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа."
      );
    } else {
      setError("");
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: false });
    setError("");
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
      setError(err.message);
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
            <S.Form id="formLogUp" onSubmit={handleSubmit}>
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
              <S.ErrorText>{error}</S.ErrorText>
              <AuthButton $primary id="SignUpEnter" type="submit">
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
