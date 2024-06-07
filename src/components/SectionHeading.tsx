import styled from "styled-components";


type SectionHeading = {
  textAlign?: string;
}

export const SectionHeading = styled.h2<SectionHeading>`
  text-align: ${props => props.textAlign || 'center'};
`;
