import React from 'react';
import { Icon } from '../../components/icon/Icon';
import { S } from './Footer_Styles';


const iconIds = [
  'instagram',
  'linkedin',
  'envelope'
]

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <S.SocialList>
        {iconIds.map((el, i) => {
          return (
            <S.SocialItem key={i} >
              <S.SocialLink href="#" aria-label={el}>
                <Icon iconId={el}
                      boxConf={"0 0 48 48"}
                      width={48}
                      height={48}/>
              </S.SocialLink>
            </S.SocialItem>
          )
        })}
      </S.SocialList>
      <S.SmallText>Madelyn Torff 2021</S.SmallText>
    </S.Footer>
  )
}
