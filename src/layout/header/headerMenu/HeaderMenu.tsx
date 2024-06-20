import styled from "styled-components"


type HeaderMenuPropsType = {
  menuLinks: string[];
}

export const HeaderMenu = (props: HeaderMenuPropsType) => {
  return (
    <StyledHeaderMenu>
      <Menu>
        {props.menuLinks.map((el, i) => {
          return (
            <ListItem key={i}>
              <ListItemLink href={"#"}>{el}</ListItemLink>
            </ListItem>
          )
        })}
      </Menu>
    </StyledHeaderMenu>
  )
}


const StyledHeaderMenu = styled.nav``;

const Menu = styled.ul`
  display: flex;
  gap: 48px;
`;

const ListItem = styled.li``;

const ListItemLink = styled.a`
  font-family: Raleway, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
`;
