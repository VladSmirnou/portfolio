import React from 'react';
import { S } from '../MobileMenu_Styles';
import { Dispatch } from 'react';


type MenuPropsType = {
  menuLinks: string[];
  callBack: Dispatch<React.SetStateAction<boolean>>
  state: boolean;
}

export const MobileMenuLinks = (props: MenuPropsType) => {
  return (
    <ul>
      {props.menuLinks.map((el, i) => {
        return (
          <S.ListItem key={i}>
            <S.ListItemLink to={el.toLowerCase()}
                            offset={-50}
                            onClick={ () => props.callBack(!props.state) }
                            smooth >{el}</S.ListItemLink>
          </S.ListItem>
        )
      })}
    </ul>
  )
}
