import React from 'react';
import styled from 'styled-components';

import { SectionHeading } from '../../../components/SectionHeading';
import { Container } from '../../../components/Container';
import { skillData } from '../../../assets/images/relay';


export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionHeading>Skills</SectionHeading>
        <GridWrapper>
          {Object.entries(skillData).map(
              ([k, v]) => <SkillImg src={v} alt={k} />
            )
          }
        </GridWrapper>
      </Container>
    </StyledSkills>
  )
}


const GridWrapper = styled.div`
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(auto-fill, 120px);
  gap: 74px 90px;
  justify-content: space-between;
`;

const SkillImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: none;
`;

const StyledSkills = styled.section`
  margin-top: 144px;

  ${SectionHeading} {
    margin-bottom: 82px;
  }
`;
