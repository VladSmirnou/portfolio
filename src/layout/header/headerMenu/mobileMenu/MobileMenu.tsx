import React, { useState } from "react";
import { MobileMenuLinks } from "./mobileMenuLinks/MobileMenuLinks";
import { S } from "./MobileMenu_Styles";


export const MobileMenu: React.FC<{ menuLinks: string[] }> = (
  props: { menuLinks: string[] }
) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.MobileMenu>
      <S.MobileMenuPopup isOpen={isOpen} onClick={ () => setIsOpen(!isOpen) }>
        <MobileMenuLinks menuLinks={props.menuLinks} callBack={setIsOpen} state={isOpen} />
      </S.MobileMenuPopup>
      <S.BurgerButton isOpen={isOpen} onClick={ () => setIsOpen(!isOpen) }>
        <span></span>
      </S.BurgerButton>
    </S.MobileMenu>
  )
}

