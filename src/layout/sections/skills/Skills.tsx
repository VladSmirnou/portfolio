import React from 'react';
import styled from 'styled-components';

import { SectionHeading } from '../../../components/SectionHeading';
import { Container } from '../../../components/Container';
import { skillData } from '../../../assets/images/relay';
import { theme } from '../../../styles/Theme';


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
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-auto-rows: 120px;

  gap: 74px 90px;

  @media ${theme.media.skillGrid} {
    padding: 0 20px;
    gap: 50px 65px;
  }
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

    @media ${theme.media.skillGrid} {
      margin-bottom: 58px;
    }
  }
`;
