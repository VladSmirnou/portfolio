import React from 'react';
import styled from 'styled-components';

import { SectionHeading } from '../../../components/SectionHeading';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';


export const Contact = () => {
  return (
    <StyledContact>
      <Container>
        <SectionHeading>Contact me</SectionHeading>
        <Form>
          <label htmlFor={"text"}>Name</label>
          <Field id={"text"} />
          <label htmlFor={"email"}>Email</label>
          <Field id={"email"} type={"email"} />
          <label htmlFor={"message"}>Message</label>
          <Field as={"textarea"} id={"message"} />
          <Button type={"submit"}>Send</Button>
        </Form>
      </Container>
    </StyledContact>
  )
}


const StyledContact = styled.section`
  max-width: 1440px;
  margin: 144px auto 56px;

  ${SectionHeading} {
    margin-bottom: 88px;
  }
`;

const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  label {
    font-family: Nunito, sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 8px;
  }

  textarea {
    resize: none;
    height: 160px;
  }

  margin-bottom: 56px;
`;

const Field = styled.input`
  padding: 7px 11px;
  width: 100%;
  margin-bottom: 24px;

  line-height: 24px;
  font-size: 16px;
  font-family: Nunito, sans-serif;
  font-weight: 400;

  border-radius: 8px;
  border: 1px solid ${theme.colors.formFieldBorder};
  
  background-color: ${theme.colors.secondaryBg};
  
  &:focus-visible {
    outline-offset: -1px;
    outline: 1px solid ${theme.colors.brand};
  }
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
