import React from 'react';
import styled from 'styled-components';

import { FlexWrapper } from '../../components/FlexWrapper';
import { Container } from '../../components/Container';
import { HeaderMenu } from './headerMenu/HeaderMenu';
import { MobileMenu } from './MobileMenu/MobileMenu';

const menuLinks = [
  'About',
  'Projects',
  'Contacts',
]

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <Logo>
            <Name href={"#"}>Vahid Navazan</Name>
          </Logo>
          <HeaderMenu menuLinks={menuLinks} />
          <MobileMenu menuLinks={menuLinks} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  )
}


const StyledHeader = styled.header`
  height: 56px;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  ${Container} {
    display: flex;
    align-items: center;

    ${FlexWrapper} {
      flex-grow: 1;
    }
  }
`;

const Logo = styled.span``;

const Name = styled.a`
  font-family: Comfortaa, sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  white-space: nowrap;
`