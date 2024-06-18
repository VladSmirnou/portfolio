import React from 'react';
import styled from 'styled-components';

import { SectionHeading } from '../../../components/SectionHeading';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { skillData } from '../../../assets/images/relay';


export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionHeading>Skills</SectionHeading>
        <FlexWrapper wrap={'wrap'} justify={"space-between"}>
          {Object.entries(skillData).map(
              ([k, v]) => <SkillImg src={v} alt={k} />
            )
          }
        </FlexWrapper>
      </Container>
    </StyledSkills>
  )
}

const SkillImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: none;
`

const StyledSkills = styled.section`
  margin-top: 144px;

  ${FlexWrapper} {
    row-gap: 74px;
    column-gap: 90px;
    padding: 10px;
  }

  ${SectionHeading} {
    margin-bottom: 82px;
  }
`;
