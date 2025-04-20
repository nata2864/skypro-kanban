import styled from "styled-components";
import { categorieColor } from "../../const";

export const CategorieButton = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $topic }) =>
    categorieColor[$topic]?.background || "#ccc"};
`;

export const CategorieText = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
  color: ${({ $topic }) => categorieColor[$topic]?.color || "#000"};
`;

export const CategoriePopUpButton = styled(CategorieButton)`
  display: inline-block;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.4)};
`;

export const CategoriePopUpButtonText = styled(CategorieText)`
  font-size: 14px;
  line-height: 14px;
  white-space: nowrap;
`;
