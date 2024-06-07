import React from 'react';
import styled from 'styled-components';

import { SectionHeading } from '../../../components/SectionHeading';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';


const iconIDs = [
  'vscode',
  'js',
  'css',
  'html',
  'greensock',
  'spiral',
  'github',
  'git',
  'react',
  'sass',
  'boostrap',
  'tailwind',
];

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionHeading>Skills</SectionHeading>
        <FlexWrapper wrap={'wrap'} justify={"space-between"}>
          {iconIDs.map(
            el => <Icon width={"112"}
                        height={"112"}
                        boxConf={"0 0 120 120"}
                        iconId={el}
                        desc={el}/>
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
