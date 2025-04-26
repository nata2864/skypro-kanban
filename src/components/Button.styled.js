import styled from "styled-components";
import { buttonSizes } from "../const";

export const Button = styled.button`
  height: 30px;
   width: ${({ $size }) => buttonSizes[$size] || "100%"};
  background-color: ${(props) => (props.$primary ? "#565eef" : "transparent")};
  color: ${(props) => (props.$primary ? "#FFFFFF" : "#565eef")};
  float: ${(props) => (props.$float ? "right" : "none")};
  border-radius: 4px;
  border: ${(props) => (props.$primary ? "none" : "0.7px solid #565eef")};
  font-weight: 500;
  font-size: 14px;
  line-height: 10px;
  letter-spacing: -0.14px;
  text-align: center;
  cursor: pointer;
  outline: none;




   &:disabled {
      background-color: #94A6BE;
      color: : #ffffff;
      border: none;
      cursor: not-allowed;
   }

  &:hover {
    background-color: #33399b;
    color: #ffffff;
    border: none;
  }
`;
