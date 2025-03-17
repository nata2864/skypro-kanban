import styled from "styled-components";

export const HeaderUserButton = styled.p`
  height: 20px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 20px;
    color: #565EEF;
cursor: pointer;
      &:hover {
    color: #33399b;
  }

    &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565EEF;
    border-bottom: 1.9px solid #565EEF;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  


     &:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`





// .header__user {
//     height: 20px;
//     display: flex;
//     flex-wrap: nowrap;
//     align-items: center;
//     justify-content: center;
//     font-size: 14px;
//     line-height: 20px;
//     color: #565EEF;
//   }
//   .header__user::after {
//     content: "";
//     display: block;
//     width: 6px;
//     height: 6px;
//     border-radius: 1px;
//     border-left: 1.9px solid #565EEF;
//     border-bottom: 1.9px solid #565EEF;
//     transform: rotate(-45deg);
//     margin: -6px 0 0 5px;
//     padding: 0;
//   }

  /* ._hover02:hover, .header__user:hover {
  color: #33399b;
}
._hover02:hover::after, .header__user:hover::after {
  border-left-color: #33399b;
  border-bottom-color: #33399b;
} */