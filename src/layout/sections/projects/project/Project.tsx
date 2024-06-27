import React from 'react';
import styled from 'styled-components';

import { theme } from '../../../../styles/Theme';
import { FlexWrapper } from '../../../../components/FlexWrapper';


type ProjectPropsType = {
  image: string;
  alt: string;
  projectName: string;
  text: string;
  idx: number;
}

function getProjectData({ projectName }: { projectName: string }): string[] {
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
  ]: string[] = getProjectData(props);
  return (
    <StyledProject>
      <FlexWrapper>
        <Info>
          <Heading id={projectId}>{props.projectName}</Heading>
          <Text>{props.text}</Text>
          <Link href={"#"} id={linkId} aria-labelledby={labelledBy}>View Project</Link>
        </Info>
        <PhotoWrapper>
          <Image src={props.image} alt={props.alt} />
        </PhotoWrapper>
      </FlexWrapper>
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

const Info = styled.div`
  padding: 160px 40px 159px 50px;
  width: 50%;
  background-color: ${theme.colors.secondaryBg};
  
  @media ${theme.media.mobile} {
    min-height: 524px;
    padding: 146px 27px 145px 35px;
  }
`;

const PhotoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 50%;
  aspect-ratio: 2;
`;

const StyledProject = styled.div`
  border-radius: 24px;
  overflow: hidden;

  @media ${theme.media.mobile} {
    ${FlexWrapper} {
      flex-wrap: wrap-reverse;
    }

    ${PhotoWrapper}, ${Info} {
      width: 100%;
    }

    ${PhotoWrapper} {
      height: 524px;
    }
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
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
