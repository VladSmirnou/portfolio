import styled from 'styled-components';
import photoMask from '../../../assets/images/yellow-bg-full.svg';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';
import { SectionHeading } from '../../../components/SectionHeading';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';


const Main = styled.section`
  padding-top: 111px;
  margin: auto;

  @media (width <= 1250px) {
    & > ${Container} > ${FlexWrapper} {
      flex-direction: column-reverse;
    }

    & {
      padding-top: 679px;
    }
  }

  @media (width <= 777px) {
    /* height is smaller than width, so 679 height / 777 width ~ 0.874.
    It means that height (which is represented by the padding top) is always
    equal to 87.4% of the current width.
     */
    padding-top: clamp(463px, 87.4%, 679px);
  }
`;

const Mask = styled.div`
  position: absolute;
  width: 777px;
  height: 877px;
  left: 50%;
  bottom: -315px;
  background-color: ${theme.colors.brand};
  mask-image: url(${photoMask});
  mask-size: 100% 100%;
  display: flex;
  align-items: flex-end;
  
  @media (width <= 1440px) {
    left: auto;
    right: -66px;
  }

  @media (width <= 1250px) {
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
  }

  @media (width <= 777px) {
    position: static;
    transform: none;
    height: auto;
    width: auto;
  
    min-height: 550px;
    aspect-ratio: 777 / 877;
    margin-top: clamp(
      -248px,
      calc(
        -137px - (-137 - -248) * (100vw - 375px) / (777 - 375)
      ),
      -137px
    )
  }
`;

const MaskPhoto = styled.img`

  padding: 25px 30px 0 30px;
  width: 720px;
  height: 629px;
  object-fit: cover;
  object-position: 50px;
  /* Не знаю почему, хоть
  конечные размеры бокса имеджа и маски совпадают пиксель в пиксель
  по макету, у меня имэдж получается чуть меньше именно внутри своего 
  бокса.
   */
  
  @media (width <= 777px) {
    object-position: 0;
    height: auto;
    width: calc(100% - calc(
      36px + (57 - 36) * (100% - 486px) / (777 - 486)
      )
    );
    aspect-ratio: 720 / 629;
    min-width: 450px;
    min-height: 395px;
    transform: translate(
      calc(
          30px + (50 - 30) * (100vw - 375px) / (777 - 375)
        )
      );
    }

  @media (width <= 375px) {
    transform: translate(30px);
  }
`;

const Window = styled.div`
  overflow: clip visible;
  position: absolute;
  z-index: -1;
  right: 0;
  left: 0;

  @media (width <= 1250px) {
    height: 629px;
    top: 0;
  }
`;

const HeadingSeparator = styled.div``;

const Text = styled.p `
  font-family: Nunito, sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: ${theme.colors.font.minor};
  margin: 32px 0;
`;

const Intro = styled.div`
  max-width: 508px;

  ${SectionHeading} {
    ${font({
      family: "Roboto, sans-serif",
      weight: 700,
      lineHeight: 77,
      color: theme.colors.font.major,
      Fmin: 42,
      Fmax: 64,
      LHmin: 50,
      LHmax: 77
    })}
    margin-top: 12px;
  }

  @media (width >= 1440px) {
    & ${SectionHeading} {
      line-height: 77px;
      font-size: 64px;
    }
  }

  @media (width <= 1250px) {
    max-width: none;
  }
`;

const MainHeading = styled.h1`
  font-family: Nunito, sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: ${theme.colors.brand};
  text-transform: uppercase;
`;

const LinkProj = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 115px;
  background-color: ${theme.colors.brand};
  border-radius: 8px;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;

const LinkLinkedin = styled(LinkProj)`
  background-color: transparent;
  border-style: solid;
  border-width: 2px;
  margin-left: 12px;
`;

export const S = {
  Main,
  Mask,
  MaskPhoto,
  Intro,
  MainHeading,
  HeadingSeparator,
  Text,
  LinkProj,
  LinkLinkedin,
  Window,
}
