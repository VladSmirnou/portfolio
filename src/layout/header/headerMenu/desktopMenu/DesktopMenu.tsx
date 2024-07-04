import { Menu } from "../menu/Menu";
import React from "react";
import { S } from "../HeaderMenu_Styles";


export const DesktopMenu: React.FC<{menuLinks: string[]}> = (
  props: { menuLinks: string[] }
) => {
  return (
    <S.DesktopMenu>
      <Menu menuLinks={props.menuLinks}/>
    </S.DesktopMenu>
  )
}


