import styled, { css } from "styled-components";
import { theme } from "../styles/Theme";


type SectionHeading = {
  textAlign?: string;
  noDecorate?: boolean;
}

export const SectionHeading = styled.h2<SectionHeading>`
  text-align: ${props => props.textAlign || 'center'};
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;

  ${props => props.noDecorate ? '' : css`
    position: relative;
    
    &::before {
      content: "";
      display: inline-block;
      left: 50%;
      transform: translate(-50%);
      width: 100px;
      height: 4px;
      border-radius: 2px;
      bottom: -8px;
      background-color: ${theme.colors.brand};

      position: absolute;
    }
  `} 
`
