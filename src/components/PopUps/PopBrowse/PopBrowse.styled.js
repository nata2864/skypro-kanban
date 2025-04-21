import styled from "styled-components";
import { Button } from "../../Button.styled";
import { Placeholder } from "../../PlaceHolder.styled";
import { PopNewCardWrapper,PopNewCardContainer,PopNewCardBlock, FormWrapper  } from "../PopNewCard/PopNewCard.styled";
import { Form,FormLabel } from "../../PopNewCardForm/PopNewCardForm.styled";

export const PopBrowseWrapper = styled(PopNewCardWrapper ).div`
  z-index: 7;
`;

export const PopBrowseContainer = styled(PopNewCardContainer )`
`;

export const PopBrowseBlock = styled(PopNewCardBlock)`
`;

export const PopBrowseContent = styled.div`
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const PopBrowseWrap = styled(FormWrapper)`
`;

export const PopBrowseForm = styled(Form )`

`;

export const PopBrowseFormLabel = styled(FormLabel)`

`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseArea = styled(Placeholder).attrs({ as: "textarea" })`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`;

export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;

export const PopBrowseStatusTitle = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
`;

export const StatusThemeTitle = styled.p`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
`;

export const PopBrowseBtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 495px) ¨ {
    width: 100%;
  }
`;

export const BtnGroep = styled.div`
  @media screen and (max-width: 495px) ¨ {
    width: 100%;
  }
`;

export const PopBrowseButton = styled(Button)`
  margin-bottom: 10px;
  padding: 0 14px;
  margin-right: 8px;
  width: auto; 
  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
    margin-right: 0px;
  }
`;
