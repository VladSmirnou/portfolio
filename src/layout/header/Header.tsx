import React, { useEffect, useState } from 'react';
import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu';
import { MobileMenu } from './headerMenu/mobileMenu/MobileMenu';
import { Container } from '../../components/Container';
import { S } from './Header_Styles';


const menuLinks = [
  'About',
  'Projects',
  'Contacts',
]

export type currentColorType = 'transparent' | 'rgba(163, 163, 163, 0.5)';

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 769;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [])

  const [currentColor, setColor] = useState<currentColorType>('transparent');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setColor('rgba(163, 163, 163, 0.5)') : setColor('transparent');
    })
  }, []);

  return (
    <S.Header backgroundColor={currentColor}>
      <Container>
        <S.Logo>
          <S.Name to={"about"} smooth >Vahid Navazan</S.Name>
        </S.Logo>
        { width < breakpoint ? <MobileMenu menuLinks={menuLinks} />
          : <DesktopMenu menuLinks={menuLinks} />
        }
      </Container>
    </S.Header>
  )
}
