import React from 'react';
import styled from 'styled-components';

import { SectionHeading } from '../../../components/SectionHeading';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { TextWrapper } from '../../../components/textwrapper/TextWrapper';
import { Icon } from '../../../components/icon/Icon';


const iconIds = [
  'instagram',
  'linkedin',
  'envelope'
]

export const Contact = () => {
  return (
    <StyledContact>
      <SectionHeading>Contact me</SectionHeading>
      <FlexWrapper direction={"column"}>
        <Form>
          <label htmlFor={"text"}>Name</label>
          <Field id={"text"} />
          <label htmlFor={"email"}>Email</label>
          <Field id={"email"} type={"email"} />
          <Field as={"textarea"} />
          <Button type={"submit"}>Send</Button>
        </Form>
        <SocialList>
          {iconIds.map((el, i) => {
            return (
              <SocialItem key={i}>
                <SocialLink>
                  <Icon iconId={el}
                        boxConf={"0 0 48 49"}
                        width={"48"}
                        height={"49"}/>
                </SocialLink>
              </SocialItem>
            )
          })}
        </SocialList>
      </FlexWrapper>
      <TextWrapper tag={"span"} text={"Madelyn Torff 2021 "}/>
    </StyledContact>
  )
}

const StyledContact = styled.section`
  background-color: lightblue;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Field = styled.input`
  width: 100%;
`;

const Button = styled.button`
  width: 89px;
  height: 43px;
  align-self: flex-end;
  background-color: #FDC435;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a``;
