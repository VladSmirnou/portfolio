import React from 'react';
import styled from 'styled-components';
import MainPhoto from '../../../assets/images/main-image-compressed.webp';
import photoMask from '../../../assets/images/yellow-bg-full.svg';
import { SectionHeading } from '../../../components/SectionHeading';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';


export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <Intro>
          <MainHeading>Software Developer</MainHeading>
          <HeadingSeparator>
            <SectionHeading textAlign={"left"} noDecorate>Hello, my name is Vahid Navazan</SectionHeading>
            <Text>
              Short text with details about you, what you do or your professional career. You can add more information on the about page.
            </Text>
            <FlexWrapper>
              <LinkProj href={"#"}>Projects</LinkProj>
              <LinkLinkedin href={"#"}>LinkedIn</LinkLinkedin>
            </FlexWrapper>
          </HeadingSeparator>
        </Intro>
        <Photo src={MainPhoto} alt={"Автор портфолио на нейтральном фоне"}/>
      </Container>
    </StyledMain>
  )
}


const HeadingSeparator = styled.div``;

const Text = styled.p `
  font-family: Nunito, sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: ${theme.colors.font.minor};
  margin: 32px 0;
`;

const Intro = styled.div`
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
`;

const Photo = styled.img`
  object-fit: cover;

  padding: 25px 30px 0 30px;
  object-position: 50px;
  width: 720px;
  height: 629px;
  mask-image: url(${photoMask});
  mask-position: left bottom;

  position: absolute;
  left: 50%;
  top: 0;
`;

const StyledMain = styled.section`
  position: relative;
  padding-top: 110px;

  &::before {
    content: url(${photoMask});
    position: absolute;
    left: 50%;
    top: -248px;
    z-index: -1;
  }
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
