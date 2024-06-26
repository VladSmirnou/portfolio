import React from 'react';
import styled from 'styled-components';

import { data } from '../../../assets/images/relay';

import { FlexWrapper } from '../../../components/FlexWrapper';
import { Project } from './project/Project';
import { SectionHeading } from '../../../components/SectionHeading';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';


export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionHeading>Projects</SectionHeading>
        <FlexWrapper direction={"column"}>
          {Object.values(data).map(
            ({ image, alt, projectName, text }, idx) => {
              return (
                <Project
                  image={image}
                  alt={alt}
                  idx={idx}
                  projectName={projectName}
                  text={text}
                />
              )
            }
          )}
        </FlexWrapper>
      </Container>
    </StyledProjects>
  )
}


const StyledProjects = styled.section`
  ${FlexWrapper} > div:nth-child(even) div + div {
    order: -1;
    
    @media ${theme.media.mobile} {
      order: 0;
    }
  }

  ${FlexWrapper} > div:first-child img {
    transform: translate(-70px, -75px) scale(1.3);

    @media (max-width: 1000px) {
      transform: translate(-50px, -75px) scale(1.3);
      object-position: right;
    }

    @media (max-width: 800px) {
      transform: translate(calc(
        40px - (40 - -50) * (100vw - 577px) / (800 - 577)
      ), -75px) scale(1.3);
    }

    @media ${theme.media.mobile} {
      transform: translate(calc(
        -50px - (-50 - -70) * (100vw - 375px) / (577 - 375)
      ), -75px) scale(1.3);
    } 
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
