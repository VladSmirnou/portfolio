import React from 'react';
import styled from 'styled-components';

import { SectionHeading } from '../../../components/SectionHeading';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';


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
            <label htmlFor={"message"}>Message</label>
            <Field as={"textarea"} id={"message"} height={160}/>
            <Button type={"submit"}>Send</Button>
          </Form>
          <SocialList>
            {iconIds.map((el, i) => {
              return (
                <SocialItem key={i} >
                  <SocialLink href="#" aria-label={el}>
                    <Icon iconId={el}
                          boxConf={"0 0 48 48"}
                          width={"48"}
                          height={"48"}/>
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

  ${SectionHeading} {
    margin-bottom: 88px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  
  label {
    font-family: Nunito, sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: ${theme.colors.font.major};

    margin-bottom: 8px;
  }

  margin-bottom: 56px;
`;

type FieldPropsType = {
  height?: number;
}

const Field = styled.input<FieldPropsType>`
  width: 100%;
  height: ${props => props.height || 40}px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.formFieldBorder};
  background-color: ${theme.colors.secondaryBg};
  margin-bottom: 24px;
`;

const Button = styled.button`
  width: 89px;
  align-self: flex-end;
  background-color: ${theme.colors.brand};
  border-radius: 8px;
  cursor: pointer;

  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 24px;
  margin-bottom: 32px;
`;

const SocialItem = styled.li`
  height: 48px;
`;

const SocialLink = styled.a`
  display: inline-block;
  height: 100%;
`;
