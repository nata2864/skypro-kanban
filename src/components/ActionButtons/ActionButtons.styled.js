import styled from "styled-components";
import { Button } from "../Button.styled";

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