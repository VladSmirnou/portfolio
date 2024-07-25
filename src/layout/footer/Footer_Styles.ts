import styled from 'styled-components';
import foogerSvg from '../../assets/images/footerSvg.svg';
import { theme } from '../../styles/Theme';


const Footer = styled.footer`
  height: calc(100vw / 4.1860465116279069767441860465116);
  /* (1440 / 344 = 4.1860...) => width is 4.18600 times bigger than height,
  so in order to calculate height I need to divide width at 4.1860...
  */
  background-image: url(${foogerSvg});

  background-position: bottom;
  background-size: 100%;
  background-repeat: no-repeat;

  @media (width <= 1440px) {
    height: auto;
    padding-bottom: calc(
      (100vw - 375px) / (1440 - 375) * (240 - 180) + 180px
    );
  }
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

export const S = {
  Footer,
  SocialList,
  SocialItem,
  SocialLink,
  SmallText
}
