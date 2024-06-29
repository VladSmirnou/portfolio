import React from 'react';
import styled from 'styled-components';
import MainPhoto from '../../../assets/images/main-image-compressed.webp';
import photoMask from '../../../assets/images/yellow-bg-full.svg';
import { SectionHeading } from '../../../components/SectionHeading';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';


export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"}>
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
          <Window>
            <Photo src={MainPhoto} alt={"Автор портфолио на нейтральном фоне"}/>
          </Window>
        </FlexWrapper>
      </Container>
    </StyledMain>
  )
}

const Photo = styled.img`
  position: absolute;
  object-fit: cover;
  left: 50%;
  top: 50%;
  transform: translateY(-50%);
  padding: 25px 30px 0 30px;
  object-position: 50px;

  width: 720px;
  height: 629px;
  mask-image: url(${photoMask});
  mask-position: left bottom;
`;

const Window = styled.div`
  overflow: hidden;
  position: absolute;
  z-index: -1;
  right: 0;
  left: 0;
  height: 1130px;

  &::before {
    content: url(${photoMask});
    position: absolute;
    left: 50%;
    height: 877px;
    top: calc(50% - 124px);
    transform: translateY(-50%);
  }

  @media (max-width: 1440px) {
    ${Photo} {
      left: auto;
      right: -9px;
      /* right: 0 */
    }

    &::before {
      left: auto;
      right: -66px;
      /* right: -57px */
    }
  }

  @media (max-width: 1250px) {
    & {
      height: 629px;
      top: 0;
    }

    ${Photo} {
      left: calc(50% - 28px);
      transform: translateX(-50%);
      top: auto;
      bottom: 0;
    }
    
    &::before {
      top: auto;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
      right: auto;
    }
  }

  @media (max-width: 777px) {
    ${Photo}, &::before {
      left: 0;
      transform: none;
    }

    ${Photo} {
      height: 100%;
      width: 100%;
      min-width: 450px;
      max-width: 720px;
    } 

    &::before {
      width: 100%;
    }

    & {
      height: calc(
        413px + (629 - 413) * (100vw - 375px) / (777 - 375)
      );
    }
  }
`;

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

  ${SectionHeading} {
    ${font({
      family: "Roboto, sans-serif",
      weight: 700,
      lineHeight: 77,
      color: theme.colors.font.major,
      Fmin: 42,
      Fmax: 64,
      LHmin: 50,
      LHmax: 77
    })}
    margin-top: 12px;
  }

  @media (min-width: 1440px) {
    & ${SectionHeading} {
      line-height: 77px;
      font-size: 64px;
    }
  }

  @media (width <= 1250px) {
    max-width: 100%;
  }
`;

const StyledMain = styled.section`
  padding-top: 111px;
  margin: auto;

  @media (width <= 1250px) {
    & > ${Container} > ${FlexWrapper} {
      flex-direction: column-reverse;
    }

    & {
      padding-top: 679px;
    }
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
