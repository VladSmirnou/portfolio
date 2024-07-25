import React from 'react';
import { S } from '../DesktopMenu_Styles';


type MenuPropsType = {
  menuLinks: string[];
}

export const DesktopMenuLinks = (props: MenuPropsType) => {
  return (
    <ul>
      {props.menuLinks.map((el, i) => {
        return (
          <S.ListItem key={i}>
            <S.ListItemLink to={el.toLowerCase()} offset={-50} smooth >{el}</S.ListItemLink>
          </S.ListItem>
        )
      })}
    </ul>
  )
}
