import { DesktopMenuLinks } from "./desktopMenuLinks/DesktopMenuLinks";
import React from "react";
import { S } from "./DesktopMenu_Styles";


export const DesktopMenu: React.FC<{menuLinks: string[]}> = (
  props: { menuLinks: string[] }
) => {
  return (
    <S.DesktopMenu>
      <DesktopMenuLinks menuLinks={props.menuLinks}/>
    </S.DesktopMenu>
  )
}


