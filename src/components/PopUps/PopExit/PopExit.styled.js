import styled from "styled-components";
import { Button } from "../../Button.styled";

export const PopExit = styled.div`
  //   display: none;
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const Block = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const Title = styled.div`
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
  }
`;

export const PopExitButton = styled(Button)`
  line-height: 21px;
  width: 153px;
  @media only screen and (max-width: 375px) {
    height: 40px;
  }
`;

export const PopExitButtonYes = styled(PopExitButton)`
  margin-right: 10px;
  @media only screen and (max-width: 375px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 375px){
    display: block;
  }
`;
