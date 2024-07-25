import styled from "styled-components";
import { Link } from "react-scroll";

// Menu
const ListItem = styled.li``;

const ListItemLink = styled(Link)`
  font-family: Raleway, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  cursor: pointer;
`;

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 48px;
  }
`;

export const S = {
  ListItem,
  ListItemLink,
  DesktopMenu
}
