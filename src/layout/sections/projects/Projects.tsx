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
      <Container maxWidth={992}>
        <SectionHeading>Projects</SectionHeading>
        <FlexWrapper direction={"column"}>
          {Object.values(data).map(
            ({ image, alt, headingText, text }, idx) => {
              return (
                <Project
                  image={image}
                  alt={alt}
                  idx={idx}
                  headingText={headingText}
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
  background-color: lightgrey;
  margin: 144px auto 0 auto;

  div:nth-child(even) > img {
    order: -1;
  }
`;
