import React from 'react';
import styled from 'styled-components';
import MainPhoto from '../../../assets/images/main-image-compressed.webp';

import { SectionHeading } from '../../../components/SectionHeading';
import { TextWrapper } from '../../../components/textwrapper/TextWrapper';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';


export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-between"}>
          <Intro>
            <MainHeading>Software Developer</MainHeading>
            <div>
              <SectionHeading textAlign={"left"}>Hello, my name is Vahid Navazan</SectionHeading>
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
            </div>
          </Intro>
          <Photo src={MainPhoto} alt={"Автор портфолио на нейтральном фоне"}/>
        </FlexWrapper>
      </Container>
    </StyledMain>
  )
}


const Intro = styled.div`
  border: 2px solid black;
  max-width: 508px;
  min-height: 408px;

  ${SectionHeading} {
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 64px;
    line-height: 77px;
    color: ${theme.colors.font.medium};
    margin-top: 12px;
  }

  p {
    font-family: Nunito, sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color: ${theme.colors.font.minor};
    margin: 32px 0;
  }
`;

const Photo = styled.img`
  object-fit: cover;
  width: 50%;
  max-height: 629px;
`;

const StyledMain = styled.section`
  margin: 0 auto;
`;

const MainHeading = styled.h1`
  font-family: Nunito, sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: ${theme.colors.brand};
  text-transform: uppercase;
`;

const LinkProj = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 115px;
  background-color: ${theme.colors.brand};
  border-radius: 8px;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;

const LinkLinkedin = styled(LinkProj)`
  background-color: transparent;
  border-style: solid;
  border-width: 2px;
  margin-left: 10px;
`;
