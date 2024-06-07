import React from 'react';
import styled from 'styled-components';

import { TextWrapper } from '../../../../components/textwrapper/TextWrapper';
import { theme } from '../../../../styles/Theme';


type ProjectPropsType = {
  image: string;
  alt: string;
  headingText: string;
  text: string;
  idx: number;
}

function getProjectData({ headingText: projectName }: { headingText: string }): Array<string> {
  const projectId: string = projectName.replace(/\s/g, '');
  const linkId: string = `${projectId}Link`;
  const labelledBy: string = `${linkId} ${projectId}`;
  return [projectName, projectId, linkId, labelledBy];
}


export const Project = (props: ProjectPropsType) => {
  const [
    projectName,
    projectId,
    linkId,
    labelledBy
  ]: Array<string> = getProjectData(props);
  return (
    <StyledProject>
      <Info>
        <Heading id={projectId}>{projectName}</Heading>
        <TextWrapper tag={"p"} text={props.text}/>
        <Link href={"#"} id={linkId} aria-labelledby={labelledBy}>View Project</Link>
      </Info>
      <Image src={props.image} alt={props.alt}/>
    </StyledProject>
  )
}


const StyledProject = styled.div`
  height: 526px;
  display: flex;
  border-radius: 24px;
  overflow: hidden;

  p {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    margin: 24px 0;
    color: ${theme.colors.font.minor};
  }
`;

// type I = {
//   img: string;
// }

// const BGwrapper = styled.div<I>`
//   width: calc(100% / 2);
//   background-image: url(${props => props.img});
//   background-repeat: no-repeat;
//   background-size: 130%;
//   background-position: right -295px;
// `;

const Image = styled.img`
  object-fit: cover;
  width: 50%;
`;

const Info = styled.div`
  padding: 146px 39px 147px 50px;
  width: 50%;
  background-color: ${theme.colors.secondaryBg};
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  background-color: transparent;
  border-style: solid;
  border-width: 1px;
  border-radius: 24px;
  color: black;

  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: ${theme.colors.font.major};
`;

const Heading = styled.h3`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: ${theme.colors.font.major}
`;
