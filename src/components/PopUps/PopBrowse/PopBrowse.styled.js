import styled from "styled-components";
import {
  PopNewCardWrapper,
  PopNewCardContainer,
  PopNewCardBlock,
} from "../PopNewCard/PopNewCard.styled";

export const PopBrowseWrapper = styled(PopNewCardWrapper)`
  z-index: 7;
`;

export const PopBrowseContainer = styled(PopNewCardContainer)``;

export const PopBrowseBlock = styled(PopNewCardBlock)``;

export const PopBrowseContent = styled.div``;

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
