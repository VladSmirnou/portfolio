import styled from "styled-components";
import { theme } from '../../../styles/Theme';
import { SectionHeading } from '../../../components/SectionHeading';


const Contact = styled.section`
  margin: 144px auto 56px;

  @media ${theme.media.mobile} {
    margin: 80px auto 56px;
  }

  ${SectionHeading} {
    margin-bottom: 88px;

    @media ${theme.media.mobile} {
      margin-bottom: 58px;
    }
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

export const S = {
  Contact,
  Form,
  Field,
  Button
}
