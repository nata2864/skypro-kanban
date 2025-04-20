import styled from "styled-components";
import { ErrorText } from "../AuthForm/AuthForm.styled";
import {Placeholder} from "../PlaceHolder.styled"



export const Form = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #000;
`;

const BaseInput = styled(Placeholder)`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  // border: 0.7px solid rgba(148, 166, 190, 0.4);
   border: ${(props) => (props.$error ? "0.7px solid red" : "0.7px solid rgba(148, 166, 190, 0.4);")};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
   margin: 20px 0;

`;

export const Input = styled(BaseInput).attrs({ as: 'input' })`
 margin: 20px 0;
 `;

export const TextArea = styled(BaseInput).attrs({ as: 'textarea' })`
   max-width: 370px;
  margin-top: 14px;
  height: 200px;
`;

export const PopUpErrorText = styled(ErrorText)``;