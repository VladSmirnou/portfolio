import styled, { css } from "styled-components"
import { theme } from "../../../styles/Theme";


type HeaderMenuPropsType = {
  menuLinks: string[];
}

export const MobileMenu = (props: HeaderMenuPropsType) => {
  return (
    <StyledMobileMenu>

      <MobileMenuPopup isOpen={true}>
        <ul>
          {props.menuLinks.map((el, i) => {
            return (
              <ListItem key={i}>
                <ListItemLink href={"#"}>{el}</ListItemLink>
              </ListItem>
            )
          })}
        </ul>
      </MobileMenuPopup>
      
      <BurgerButton isOpen={true}>
        <span></span>
      </BurgerButton>
    </StyledMobileMenu>
  )
}


const StyledMobileMenu = styled.nav`
  display: none;
  
  @media ${theme.media.tablet} {
    display: block;
  }
`;

const BurgerButton = styled.button<{isOpen: boolean}>`
  cursor: pointer;
  position: relative;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: block;
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: black;

    ${props => props.isOpen && css`
      background-color: rgba(255, 255, 255, 0);
      width: 25px;
    `};

    &::before, &::after {
      position: absolute;
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background-color: black;
      ${props => props.isOpen && css`
        background-color: ${theme.colors.brand};
      `};
    };

    &::before {
      transform: translateY(-6px);

      ${props => props.isOpen && css`
        transform: translateY(0) rotate(45deg);
      `};
    }

    &::after {
      transform: translateY(6px);

      ${props => props.isOpen && css`
        transform: translateY(0) rotate(-45deg);
      `};
    }
  }
`;

const MobileMenuPopup = styled.ul<{isOpen: boolean}>`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(31, 31, 32, 0.9);

  ${props => props.isOpen && css`
    display: flex;
    justify-content: center;
    align-items: center;
  `}

  ul {
    display: flex;
    gap: 48px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${props => props.isOpen && css`
      a {
        color: white;
      }
    `};
  }
`;

const ListItem = styled.li``;

const ListItemLink = styled.a`
  font-family: Raleway, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
`;
