import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionHeading } from '../../../components/SectionHeading';
import { Container } from '../../../components/Container';


const Projects = styled.section`
  ${FlexWrapper} > div:nth-child(even) div + div {
    order: -1;
    
    @media ${theme.media.mobile} {
      order: 0;
    }
  }

  ${FlexWrapper} > div:first-child img {
    position: absolute;
    width: 135%;
    height: 100%;
    right: 0;
  }
  
  ${SectionHeading} {
    margin-bottom: 88px;
    
    @media ${theme.media.mobile} {
      margin-bottom: 58px;
    }
  }
  
  ${Container} > ${FlexWrapper} {
    row-gap: 80px;
    max-width: 992px;
    margin: 0 auto;

    @media ${theme.media.mobile} {
      row-gap: 50px;
    }
  }
`;

const Text = styled.p`
    font-family: Nunito, sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    margin: 24px 0;
    color: ${theme.colors.font.minor};
`;

const Info = styled.div`
  width: 50%;
  min-height: 524px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 40px 60px 50px;
  background-color: ${theme.colors.secondaryBg};
  
  @media ${theme.media.mobile} {
    min-height: 524px;
    padding: 60px 27px 60px 35px;
  }
`;

const PhotoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 50%;
  aspect-ratio: 2;
`;

const Project = styled.div`
  border-radius: 24px;
  overflow: hidden;

  @media ${theme.media.mobile} {
    ${FlexWrapper} {
      flex-wrap: wrap-reverse;
    }

    ${PhotoWrapper}, ${Info} {
      width: 100%;
    }

    ${PhotoWrapper} {
      height: 524px;
    }
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  background-color: transparent;
  border-style: solid;
  border-width: 1px;
  border-radius: 24px;

  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;

const Heading = styled.h3`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
`;

export const S = {
  Projects,
  Project,
  Text,
  Info,
  Heading,
  Link,
  PhotoWrapper,
  Image
}
