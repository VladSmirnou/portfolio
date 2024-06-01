import React from 'react';
import styled from 'styled-components';

import { SectionHeading } from '../../../components/SectionHeading';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';


const iconIDs = [
  'vscode',
  'js',
  'css',
  'html',
  'greensock',
  'spiral',
  'boostrap',
  'github',
  'git',
  'react',
  'sass',
  'tailwind',
];

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionHeading>Skills</SectionHeading>
      <FlexWrapper wrap={'wrap'}>
        {iconIDs.map(
          el => <Icon width={"130"}
                      height={"130"}
                      boxConf={"0 0 130 130"}
                      iconId={el}
                      desc={el}/>
          )
        }
      </FlexWrapper>
    </StyledSkills>
  )
}


const StyledSkills = styled.section`
  background-color: lightgreen;
`;
