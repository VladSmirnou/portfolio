import styled from "styled-components"
import { theme } from '../../../styles/Theme';


type HeaderMenuPropsType = {
  menuLinks: Array<string>;
}

export const HeaderMenu = (props: HeaderMenuPropsType) => {
  return (
    <StyledHeaderMenu>
      <MenuList>
        {props.menuLinks.map((el, i) => {
          return (
            <MenuListItem key={i}>
              <MenuListItemLink href={"#"}>{el}</MenuListItemLink>
            </MenuListItem>
          )
        })}
      </MenuList>
    </StyledHeaderMenu>
  )
}


const StyledHeaderMenu = styled.nav``;

const MenuList = styled.ul`
  display: flex;
  gap: 48px;
`;

const MenuListItem = styled.li``;

const MenuListItemLink = styled.a`
  font-family: Raleway, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
`;
