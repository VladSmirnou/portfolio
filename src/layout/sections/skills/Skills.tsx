import React from 'react';
import styled from 'styled-components';

import { SectionHeading } from '../../../components/SectionHeading';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';
import { Container } from '../../../components/Container';


const iconIDs = [
  'vscode',
  'js',
  'css',
  'html',
  'greensock',
  'vector',
  'github',
  'git',
  'react',
  'sass',
  'bootstrap',
  'tailwind',
];

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionHeading>Skills</SectionHeading>
        <FlexWrapper wrap={'wrap'} justify={"space-between"}>
          {iconIDs.map(
            el => <Icon width={112}
                        height={112}
                        iconId={el}
                        desc={el}
                        scale/>
            )
          }
        </FlexWrapper>
      </Container>
    </StyledSkills>
  )
}


const StyledSkills = styled.section`
  margin-top: 144px;

  ${FlexWrapper} {
    row-gap: 74px;
    column-gap: 96px;
    padding: 10px;
  }

  ${SectionHeading} {
    margin-bottom: 82px;
  }
`;
