import React from 'react';
import styled from 'styled-components';

import { TextWrapper } from '../../../../components/textwrapper/TextWrapper';


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


function imgLeft(props: ProjectPropsType) {
  const [
    projectName,
    projectId,
    linkId,
    labelledBy
  ]: Array<string> = getProjectData(props);
  return (
    <>
      <Image src={props.image} alt={props.alt}/>
      <Info>
        <Heading id={projectId}>{projectName}</Heading>
        <TextWrapper tag={"p"} text={props.text}/>
        <Link href={"#"} id={linkId} aria-labelledby={labelledBy}>View Project</Link>
      </Info>
    </>
  )
}


function imgRight(props: ProjectPropsType) {
  const [
    projectName,
    projectId,
    linkId,
    labelledBy
  ]: Array<string> = getProjectData(props);
  return (
    <>
      <Info>
        <Heading id={projectId}>{projectName}</Heading>
        <TextWrapper tag={"p"} text={props.text}/>
        <Link href={"#"} id={linkId} aria-labelledby={labelledBy}>View Project</Link>
      </Info>
      <Image src={props.image} alt={props.alt}/>
    </>
  )
}


export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      {props.idx % 2 === 0 ? imgRight(props) : imgLeft(props)}
    </StyledProject>
  )
}


const StyledProject = styled.div`
  height: 526px;
  display: flex;
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
  width: calc(100% / 2);
`;

const Info = styled.div`
  padding: 146px 39px 147px 50px;
  width: calc(100% / 2);
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
`;

const Heading = styled.h3``;
