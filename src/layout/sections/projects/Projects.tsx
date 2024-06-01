import React from 'react';
import styled from 'styled-components';

import { data } from '../../../assets/images/relay';

import { FlexWrapper } from '../../../components/FlexWrapper';
import { Project } from './project/Project';
import { SectionHeading } from '../../../components/SectionHeading';


export const Projects = () => {
  return (
    <StyledProjects>
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
    </StyledProjects>
  )
}


const StyledProjects = styled.section`
  background-color: lightgrey;
  max-width: 992px;

  div:nth-child(even) > img {
    order: -1;
  }
`;
