import React from 'react';
import styled from 'styled-components';

import { theme } from '../../../../styles/Theme';


type ProjectPropsType = {
  image: string;
  alt: string;
  projectName: string;
  text: string;
  idx: number;
}

function getProjectData({ projectName }: { projectName: string }): Array<string> {
  const projectId: string = projectName.replace(/\s/g, '');
  const linkId: string = `${projectId}Link`;
  const labelledBy: string = `${linkId} ${projectId}`;
  return [projectId, linkId, labelledBy];
}


export const Project = (props: ProjectPropsType) => {
  const [
    projectId,
    linkId,
    labelledBy
  ]: Array<string> = getProjectData(props);
  return (
    <StyledProject>
      <Info>
        <Heading id={projectId}>{props.projectName}</Heading>
        <Text>{props.text}</Text>
        <Link href={"#"} id={linkId} aria-labelledby={labelledBy}>View Project</Link>
      </Info>
      <Image src={props.image} alt={props.alt}/>
    </StyledProject>
  )
}


const Text = styled.p`
    font-family: Nunito, sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    margin: 24px 0;
    color: ${theme.colors.font.minor};
`;

const StyledProject = styled.div`
  height: 526px;
  display: flex;
  border-radius: 24px;
  overflow: hidden;
`;

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

  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;

const Heading = styled.h3`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
`;
