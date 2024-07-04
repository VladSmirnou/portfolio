import React from 'react';
import { SectionHeading } from '../../../components/SectionHeading';
import { Container } from '../../../components/Container';
import { S } from './Contact_Styles';


export const Contact: React.FC = () => {
  return (
    <S.Contact>
      <Container>
        <SectionHeading>Contact me</SectionHeading>
        <S.Form>
          <label htmlFor={"text"}>Name</label>
          <S.Field id={"text"} />
          <label htmlFor={"email"}>Email</label>
          <S.Field id={"email"} type={"email"} />
          <label htmlFor={"message"}>Message</label>
          <S.Field as={"textarea"} id={"message"} />
          <S.Button type={"submit"}>Send</S.Button>
        </S.Form>
      </Container>
    </S.Contact>
  )
}
