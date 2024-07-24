import React from 'react';
import { S } from '../HeaderMenu_Styles';


export const Menu: React.FC<{ menuLinks: string[] }> = (props: { menuLinks: string[] }) => {
  return (
    <ul>
      {props.menuLinks.map((el, i) => {
        return (
          <S.ListItem key={i}>
            <S.ListItemLink to={el.toLowerCase()} smooth offset={-50} >{el}</S.ListItemLink>
          </S.ListItem>
        )
      })}
    </ul>
  )
}
