import React from 'react';
import styled from 'styled-components';

import { SectionHeading } from '../../../components/SectionHeading';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';
import { Container } from '../../../components/Container';


const iconIds = [
  'instagram',
  'linkedin',
  'envelope'
]

export const Contact = () => {
  return (
    <StyledContact>
      <Container maxWidth={400}>
        <SectionHeading>Contact me</SectionHeading>
        <FlexWrapper direction={"column"}>
          <Form>
            <label htmlFor={"text"}>Name</label>
            <Field id={"text"} />
            <label htmlFor={"email"}>Email</label>
            <Field id={"email"} type={"email"} />
            <Field as={"textarea"} aria-label='your message'/>
            <Button type={"submit"}>Send</Button>
          </Form>
          <SocialList>
            {iconIds.map((el, i) => {
              return (
                <SocialItem key={i} >
                  <SocialLink href="#" aria-label={el}>
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
        <SmallText>Madelyn Torff 2021</SmallText>
      </Container>
    </StyledContact>
  )
}

const SmallText = styled.small`
  display: block;
  text-align: center;
`

const StyledContact = styled.section`
  margin-top: 144px;
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
  align-self: flex-end;
  background-color: #FDC435;
  border-radius: 8px;
  cursor: pointer;
`;

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a``;
