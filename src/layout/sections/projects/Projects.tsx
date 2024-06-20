import React from 'react';
import styled from 'styled-components';

import { data } from '../../../assets/images/relay';

import { FlexWrapper } from '../../../components/FlexWrapper';
import { Project } from './project/Project';
import { SectionHeading } from '../../../components/SectionHeading';
import { Container } from '../../../components/Container';


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
  margin-top: 144px;

  ${FlexWrapper} > div:nth-child(even) div + div {
    order: -1;
  }

  ${FlexWrapper} > div:first-child img {
    transform: scale(1.3);
    object-position: -55px -170px;
  }

  ${SectionHeading} {
    margin-bottom: 88px;
  }
  
  ${FlexWrapper} {
    row-gap: 80px;
    max-width: 992px;
    margin: 0 auto;
  }
`;
