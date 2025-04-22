import styled  from "styled-components";
import { categorieColor } from "../../const";
export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(0, 62, 144, 0.4);
  background: ${(props) =>
    props.$isActiveStatus ? categorieColor.grey.background : "transparent"};

  color: ${(props) =>
    props.$isActiveStatus ? categorieColor.grey.color : "#94a6be"};
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  border: ${(props) =>
    props.$isActiveStatus ? "none" : " 0.7px solid rgba(0, 62, 144, 0.4)"};
`;

export const StatusThemeTitle = styled.p`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
`;
