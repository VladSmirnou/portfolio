import React from 'react';
import { SectionHeading } from '../../../components/SectionHeading';
import { Container } from '../../../components/Container';
import { skillData } from '../../../assets/images/relay';
import { S } from './Skills_Styles';


export const Skills: React.FC = () => {
  return (
    <S.Skills>
      <Container>
        <SectionHeading>Skills</SectionHeading>
        <S.GridWrapper>
          {Object.entries(skillData).map(
              ([k, v], idx) => <S.SkillImg src={v} alt={k} key={idx} role='img'/>
            )
          }
        </S.GridWrapper>
      </Container>
    </S.Skills>
  )
}
