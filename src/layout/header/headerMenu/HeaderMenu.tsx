import styled from "styled-components"


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
  gap: 30px;
`;

const MenuListItem = styled.li``;

const MenuListItemLink = styled.a``;
