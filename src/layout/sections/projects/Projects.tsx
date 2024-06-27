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
