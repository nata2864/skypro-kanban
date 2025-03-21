import styled, { keyframes } from "styled-components";

export const cardAnimation = keyframes`
  0% {
    max-height: 0;
    opacity: 0;
  }
  100% {
    max-height: 130px;
    opacity: 1;
  }
`;

export const CardsItem = styled.div`
  padding: 5px;
  animation: ${cardAnimation} 500ms linear;
  overflow: hidden;
`;

export const Card = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  @media (max-width: 1200px) {
    width: 220px;
    height: 130px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }
`;

export const CardGroep = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardButton = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`;

export const Item = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94a6be;
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`;

export const Content = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Date = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const DateText = styled.p`
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #94a6be;
  letter-spacing: 0.2px;
`;

export const Icon = styled.svg`
  width: 13px;
`;
