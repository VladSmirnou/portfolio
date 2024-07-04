import React from "react";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";


export const MobileMenu: React.FC<{ menuLinks: string[] }> = (
  props: { menuLinks: string[] }
) => {
  return (
    <S.MobileMenu>
      <S.MobileMenuPopup isOpen={false}>
        <Menu menuLinks={props.menuLinks} />
      </S.MobileMenuPopup>
      <S.BurgerButton isOpen={false}>
        <span></span>
      </S.BurgerButton>
    </S.MobileMenu>
  )
}

