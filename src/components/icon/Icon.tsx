import React from 'react';
import sprite from '../../assets/images/icons-sprite.svg';


type IconPropsType = {
  width: string;
  height: string;
  boxConf: string;
  iconId: string;
  desc?: string;
}


export const Icon = (props: IconPropsType) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox={props.boxConf}
      xmlns="http://www.w3.org/2000/svg">
        <use href={`${sprite}#${props.iconId}`}/>
        <desc>{props.desc}</desc>
    </svg>
  )
}
