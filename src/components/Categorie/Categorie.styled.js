import styled from "styled-components";


export const CategorieButton= styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color:${({ theme, $topic }) => theme[$topic]?.background || "#ccc"};
`;

export const CategorieText= styled.p`
font-size: 10px;
  font-weight: 600;
  line-height: 10px;
   color: ${({ theme, $topic }) => theme[$topic]?.color || "#000"};
`;
