import styled from "styled-components";
import { colorPageTheme } from "../../const";
import { Button } from "../Button.styled";
import { Placeholder } from "../PlaceHolder.styled";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: ${colorPageTheme.light};
`;

export const Container = styled.div`
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalBlok = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  @media (max-width: 375px) {
    max-width: 368px;
    width: 100%;
    padding: 0 16px;
    border-radius: none;
    border: none;
    box-shadow: none;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.6px;
  margin-bottom: 20px;
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled(Placeholder)`
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  border: 0.7px solid
    ${({ $error }) => ($error ? "#FF4F4F" : "rgba(148, 166, 190, 0.4)")};
  outline: none;
  padding: 10px 8px;
  margin-bottom: 7px;
  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94a6be;
  }
  & ::-moz-placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94a6be;
  }
`;

export const AuthButton = styled(Button)`
  margin-top: 13px;
  margin-bottom: 20px;

  @media (max-width: 375px) {
    height: 40px;
  }
`;

export const TextGroep = styled.div`
  text-align: center;
`;

export const ModalText = styled.p`
  color: rgba(148, 166, 190, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.14px;
`;

export const ErrorText = styled.p`
  color: rgba(248, 77, 77, 1);
  font-family: Arial;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: center;
`;

export const ModalLink = styled(Link)`
  color: rgba(148, 166, 190, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.14px;
  text-decoration: underline;
`;
