import React from 'react';
import styled from 'styled-components';

import { FlexWrapper } from '../../components/FlexWrapper';
import { Container } from '../../components/Container';
import { HeaderMenu } from './headerMenu/HeaderMenu';


const menuLinks = [
  'About',
  'Projects',
  'Contacts',
]

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify='space-between'>
          <Logo>
            <a href={"#"}>Vahid Navazan</a>
          </Logo>
          <HeaderMenu menuLinks={menuLinks}/>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  )
}


const StyledHeader = styled.header`
  height: 56px;
  background-color: lightyellow;
  max-width: 1440px;
  margin: 0 auto;

  ${Container} {
    display: flex;
    align-items: center;

    ${FlexWrapper} {
      flex-grow: 1;
    }
  }
`;

const Logo = styled.span``;
