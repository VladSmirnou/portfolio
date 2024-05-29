import React from 'react';
import styled from 'styled-components';
import MainPhoto from '../../../assets/images/main-image-compressed.webp';

import { SectionHeading } from '../../../components/SectionHeading';
import { TextWrapper } from '../../../components/textwrapper/TextWrapper';
import { FlexWrapper } from '../../../components/FlexWrapper';


export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper>
        <Info>
          <MainHeading>Software Developer</MainHeading>
          <SectionHeading>Hello, my name is Vahid Navazan</SectionHeading>
          <TextWrapper
            tag={"p"}
            text={
              "Short text with details about you, what you do or your professional career. You can add more information on the about page."
            }
          />
          <LinkProj href={"#"}>Projects</LinkProj>
          <LinkLinkedin href={"#"}>LinkedIn</LinkLinkedin>
        </Info>
        <Photo src={MainPhoto} alt={"Автор портфолио на нейтральном фоне анфас"}/>
      </FlexWrapper>
    </StyledMain>
  )
}


const StyledMain = styled.div`
  background-color: lightpink;
`;

const Info = styled.div``;

const MainHeading = styled.h1``;

const Photo = styled.img``;

const LinkProj = styled.a`
  display: inline-block;
  width: 115px;
  line-height: 43px;
  text-align: center;
  text-decoration: none;
  background-color: #FDC435;
  border-radius: 8px;
`;

const LinkLinkedin = styled(LinkProj)`
  background-color: transparent;
  border: 2px solid black;
  margin-left: 10px;
`;