import styled from "styled-components";

// import { Placeholder } from "../../PlaceHolder.styled";

export const PopNewCardWrapper = styled.div`
  // display: ${({ isOpenPopCard }) => (isOpenPopCard ? "block" : "none")};
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const PopNewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
  @media screen and (max-width: 495px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
  @media screen and (max-width: 660px) {
    border-radius: 0;
  }
  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopNewCardContent = styled.div`
  display: block;
  text-align: left;
`;

export const Title = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const CloseButton = styled.button`
  all: unset;
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

// export const FormWrapper = styled.div`
//   display: flex;
//   align-items: flex-start;
//   justify-content: space-between;
// `;

// export const Form = styled.div`
//   max-width: 370px;
//   width: 100%;
//   display: block;
//   margin-bottom: 20px;
// `;

// export const FormBlock = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// export const Label = styled.label`
//   font-size: 14px;
//   font-weight: 600;
//   color: #000;
// `;

// const BaseInput = styled(Placeholder)`
//   width: 100%;
//   outline: none;
//   padding: 14px;
//   background: transparent;
//   // border: 0.7px solid rgba(148, 166, 190, 0.4);
//    border: ${(props) => (props.$error ? "0.7px solid red" : "0.7px solid rgba(148, 166, 190, 0.4);")};
//   border-radius: 8px;
//   font-size: 14px;
//   line-height: 1;
//   letter-spacing: -0.14px;
//    margin: 20px 0;

// `;

// export const Input = styled(BaseInput).attrs({ as: 'input' })`
//  margin: 20px 0;
//  `;

// export const TextArea = styled(BaseInput).attrs({ as: 'textarea' })`
//    max-width: 370px;
//   margin-top: 14px;
//   height: 200px;
// `;
