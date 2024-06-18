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

  div:nth-child(even) > img {
    order: -1;
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
