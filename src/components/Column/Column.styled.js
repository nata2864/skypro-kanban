import styled from "styled-components";

export const Column= styled.div`
 width: 20%;
  margin: 0 auto;
  display: block;
    @media (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`


export const ColumnRow= styled.div`
 padding: 0 10px;
  margin: 15px 0;
`

export const Title= styled.p`
color: #94a6be;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`

export const Cards= styled.div`
width: 100%;
  display: block;
  position: relative;
    @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
}
`