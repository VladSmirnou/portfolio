import styled from "styled-components";


type ContainerPropsType = {
  maxWidth?: number;
}
// 1230px

export const Container = styled.div<ContainerPropsType>`
  max-width: ${props => props.maxWidth || 1200}px ;
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  border: 1px solid red;
  
  @media screen and (max-width: 375px) {
    padding: 0 15px;
  }
`;
