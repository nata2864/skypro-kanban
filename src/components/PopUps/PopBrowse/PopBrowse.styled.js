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

// export const StatusThemes = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: flex-start;
//   justify-content: flex-start;
// `;

// export const StatusTheme = styled.div`
//   border-radius: 24px;
//   border: 0.7px solid rgba(0, 62, 144, 0.4);
//   background: ${(props) =>
//     props.$isActiveStatus ? categorieColor.grey.background : "transparent"};

//   color: ${(props) =>
//     props.$isActiveStatus ? categorieColor.grey.color : "#94a6be"};
//   padding: 11px 14px 10px;
//   margin-right: 7px;
//   margin-bottom: 7px;
//   border: ${(props) =>
//     props.$isActiveStatus ? "none" : " 0.7px solid rgba(0, 62, 144, 0.4)"};
// `;

// export const StatusThemeTitle = styled.p`
//   font-size: 14px;
//   line-height: 1;
//   letter-spacing: -0.14px;
// `;
