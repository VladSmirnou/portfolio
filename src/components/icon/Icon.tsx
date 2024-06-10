import React from 'react';
import modSprite from '../../assets/images/modifiedSprite.svg';


type IconPropsType = {
  width: number;
  height: number;
  boxConf?: string;
  iconId: string;
  desc?: string;
  scale?: boolean;
}


export const Icon = (props: IconPropsType) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox={props.boxConf || 'none'}>
        <use
          href={`${modSprite}#${props.iconId}`}
          width={props.scale ? '100%' : 0}
          height={props.scale ? '100%' : 0}
          />
        <desc>{props.desc}</desc>
    </svg>
  )
}
