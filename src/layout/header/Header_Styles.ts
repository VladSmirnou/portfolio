import styled from "styled-components";
import { Container } from '../../components/Container';
import { currentColorType } from "./Header";
import { Link } from "react-scroll";


const Header = styled.header<{backgroundColor: currentColorType}>`
  height: 56px;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${props => props.backgroundColor};

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Logo = styled.span``;

const Name = styled(Link)`
  font-family: Comfortaa, sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  white-space: nowrap;
  cursor: pointer;
`

export const S = {
  Header,
  Logo,
  Name
}