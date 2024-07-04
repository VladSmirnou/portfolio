import React from 'react';
import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu';
import { MobileMenu } from './headerMenu/mobileMenu/MobileMenu';
import { Container } from '../../components/Container';
import { S } from './Header_Styles';


const menuLinks = [
  'About',
  'Projects',
  'Contacts',
]

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 769;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [])

  return (
    <S.Header>
      <Container>
        <S.Logo>
          <S.Name href={"#"}>Vahid Navazan</S.Name>
        </S.Logo>
        { width < breakpoint ? <MobileMenu menuLinks={menuLinks} />
          : <DesktopMenu menuLinks={menuLinks} />
        }
      </Container>
    </S.Header>
  )
}
