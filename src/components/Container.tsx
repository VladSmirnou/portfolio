import styled from "styled-components";
import { theme } from "../styles/Theme";


export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  outline: 1px solid red;
  
  @media ${theme.media.tablet} {
    padding: 0 15px;
  }
`;
