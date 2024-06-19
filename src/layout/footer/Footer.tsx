import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { theme } from '../../styles/Theme';
import foogerSvg from '../../assets/images/footerSvg.svg';


const iconIds = [
  'instagram',
  'linkedin',
  'envelope'
]

export const Footer = () => {
  return (
    <StyledFooter>
      <SocialList>
        {iconIds.map((el, i) => {
          return (
            <SocialItem key={i} >
              <SocialLink href="#" aria-label={el}>
                <Icon iconId={el}
                      boxConf={"0 0 48 48"}
                      width={48}
                      height={48}/>
              </SocialLink>
            </SocialItem>
          )
        })}
      </SocialList>
      <SmallText>Madelyn Torff 2021</SmallText>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  min-height: calc(100vw / 4.1860465116279069767441860465116);
  background-image: url(${foogerSvg});
  background-position: bottom;
  background-size: 100%;
  background-repeat: no-repeat;
  padding-bottom: calc(100vw / 6);
`;

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 24px;
  margin-bottom: 32px;
`;

const SocialItem = styled.li`
  height: 48px;
`;

const SocialLink = styled.a`
  display: inline-block;
  height: 100%;
`;

const SmallText = styled.small`
  display: block;
  text-align: center;

  font-family: Nunito, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: ${theme.colors.font.minor};
`
