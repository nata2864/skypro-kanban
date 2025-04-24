import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
  min-height: 100vh;

`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
  @media (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
    @media (max-width: 1200px) {
     display: block;
  }
`;

export const Container = styled.div`
   max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
    @media (max-width: 495px) {
   .container {
    width: 100%;
    padding: 0 16px;
  }
`;

export const NoTasksText = styled.p`
  text-align: center;
  font-size: 18px;
  color: #888;
  margin-top: 40px;
`;
