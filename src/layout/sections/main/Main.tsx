import React from 'react';
import MainPhoto from '../../../assets/images/main-image-compressed.webp';
import { SectionHeading } from '../../../components/SectionHeading';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { S } from './Main_Styles';


export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper align={"center"}>
          <S.Intro>
            <S.MainHeading>Software Developer</S.MainHeading>
            <S.HeadingSeparator>
              <SectionHeading textAlign={"left"} noDecorate>Hello, my name is Vahid Navazan</SectionHeading>
              <S.Text>
                Short text with details about you, what you do or your professional career. You can add more information on the about page.
              </S.Text>
              <FlexWrapper>
                <S.LinkProj href={"#"}>Projects</S.LinkProj>
                <S.LinkLinkedin href={"#"}>LinkedIn</S.LinkLinkedin>
              </FlexWrapper>
            </S.HeadingSeparator>
          </S.Intro>
          <S.Window>
            <S.Mask>
              <S.MaskPhoto src={MainPhoto} alt="Автор портфолио на нейтральном фоне" />
            </S.Mask>
          </S.Window>
        </FlexWrapper>
      </Container>
    </S.Main>
  )
}
