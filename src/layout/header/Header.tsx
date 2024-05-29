import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../components/FlexWrapper';


export const Header = () => {
  return (
    <StyledHeader>
      <FlexWrapper justify='space-between'>
        <Logo>
          <a href="#">Vahid Navazan</a>
        </Logo>
        <MainNav>
          <NavList>
            <NavListItem>
              <NavListItemLink href={"#"}>About</NavListItemLink>
            </NavListItem>
            <NavListItem>
              <NavListItemLink href={"#"}>Projects</NavListItemLink>
            </NavListItem>
            <NavListItem>
              <NavListItemLink href={"#"}>Contacts</NavListItemLink>
            </NavListItem>
          </NavList>
        </MainNav>
      </FlexWrapper>
    </StyledHeader>
  )
}


const StyledHeader = styled.header`
  height: 56px;
  background-color: lightyellow;
`;

const Logo = styled.span``;

const NavList = styled.ul``;

const MainNav = styled.nav`
  ${NavList} { 
    display: flex;
    gap: 30px;
  }
`;

const NavListItem = styled.li``;

const NavListItemLink = styled.a``;
