import React from 'react';
import styled from 'styled-components';
import MainPhoto from '../../../assets/images/main-image-compressed.webp';

import { SectionHeading } from '../../../components/SectionHeading';
import { TextWrapper } from '../../../components/textwrapper/TextWrapper';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';


export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <MainHeading>Software Developer</MainHeading>
        <FlexWrapper>
          <Intro>
            <SectionHeading>Hello, my name is Vahid Navazan</SectionHeading>
            <TextWrapper
              tag={"p"}
              text={
                "Short text with details about you, what you do or your professional career. You can add more information on the about page."
              }
            />
            <FlexWrapper>
              <LinkProj href={"#"}>Projects</LinkProj>
              <LinkLinkedin href={"#"}>LinkedIn</LinkLinkedin>
            </FlexWrapper>
          </Intro>
          <Photo src={MainPhoto} alt={"Автор портфолио на нейтральном фоне анфас"}/>
        </FlexWrapper>
      </Container>
    </StyledMain>
  )
}


const StyledMain = styled.section`
  background-color: lightpink;
  max-width: 1440px;
  margin: 0 auto;
`;

const Intro = styled.section``;

const MainHeading = styled.h1``;

const Photo = styled.img``;

const LinkProj = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 115px;
  background-color: #FDC435;
  border-radius: 8px;
  color: black;
`;

const LinkLinkedin = styled(LinkProj)`
  background-color: transparent;
  border-style: solid;
  border-width: 2px;
  margin-left: 10px;
`;
