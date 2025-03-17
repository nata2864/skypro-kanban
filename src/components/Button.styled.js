import styled from "styled-components";


const buttonSizes = {
  user: "72px",
  exit: "153px",
};

const buttonMargins = {
  exit: "10px",
};

export const Button = styled.button`
  height: 30px;
  width: ${({ size }) => {
    return buttonSizes[size] || buttonSizes.exit;
  }};
  background-color: ${(props) => (props.$primary ? "#565eef" : "transparent")};
  color: ${(props) => (props.$primary ? "#FFFFFF" : "#565eef")};
  border-radius: 4px;
  border: ${(props) => (props.$primary ? "none" : "0.7px solid #565eef")};
  font-weight: 500;
  font-size: 14px;
  line-height: 10px;
  letter-spacing: -0.14px;
  text-align: center;
  cursor: pointer;
  outline: none;
  margin-right: ${({ margin }) => {
    return buttonMargins[margin] || 0;
  }};


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
