import React from 'react';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { S } from '../Projects_Styles';


type ProjectPropsType = {
  image: string;
  alt: string;
  projectName: string;
  text: string;
}

function getProjectData({ projectName }: { projectName: string }): string[] {
  const projectId: string = projectName.replace(/\s/g, '');
  const linkId: string = `${projectId}Link`;
  const labelledBy: string = `${linkId} ${projectId}`;
  return [projectId, linkId, labelledBy];
}


export const Project: React.FC<ProjectPropsType> = (
  props: ProjectPropsType
) => {
  const [
    projectId,
    linkId,
    labelledBy
  ]: string[] = getProjectData(props);
  return (
    <S.Project>
      <FlexWrapper>
        <S.Info>
          <S.Heading id={projectId}>{props.projectName}</S.Heading>
          <S.Text>{props.text}</S.Text>
          <S.Link href={"#"} id={linkId} aria-labelledby={labelledBy}>View Project</S.Link>
        </S.Info>
        <S.PhotoWrapper>
          <S.Image src={props.image} alt={props.alt} />
        </S.PhotoWrapper>
      </FlexWrapper>
    </S.Project>
  )
}
