import React from 'react';
import styled from 'styled-components';

import { FlexWrapper } from '../../../../components/FlexWrapper';
import { TextWrapper } from '../../../../components/textwrapper/TextWrapper';


type ProjectPropsType = {
  image: string;
  headingText: string;
  text: string;
  idx: number;
}


function imgLeft(props: ProjectPropsType) {
  return (
    <FlexWrapper>
      <Image src={props.image} alt={""}/>
      <Info>
        <Heading>{props.headingText}</Heading>
        <TextWrapper tag={"p"} text={props.text}/>
        <Link href={"#"}>View Project</Link>
      </Info>
    </FlexWrapper>
  )
}


function imgRight(props: ProjectPropsType) {
  return (
    <FlexWrapper>
      <Info>
        <Heading>{props.headingText}</Heading>
        <TextWrapper tag={"p"} text={props.text}/>
        <Link href={"#"}>View Project</Link>
      </Info>
      <Image src={props.image} alt={""}/>
    </FlexWrapper>
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
  width: 992px;
  height: 524px;
  overflow: hidden;
`;

const Link = styled.a`
  display: inline-block;
  line-height: 43px;
  width: 150px;
  text-align: center;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 24px;
`;

const Info = styled.div`
  flex: 1;
`;

const Heading = styled.h3``;

const Image = styled.img`
  flex: 1;
  object-fit: cover;
  width: 496px;
  height: 524px;
`;
