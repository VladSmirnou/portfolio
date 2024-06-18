import styled from "styled-components";


export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  outline: 1px solid red;
  
  @media screen and (max-width: 375px) {
    padding: 0 15px;
  }
`;
