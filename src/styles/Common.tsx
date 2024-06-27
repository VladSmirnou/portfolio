import { theme } from '../styles/Theme';


type FontPropsType = {
  family?: string;
  weight?: number;
  lineHeight?: number;
  color?: string;
  Fmin: number;
  Fmax: number;
  LHmin?: number;
  LHmax?: number;
}

export const font = ({
  family = 'Nunito, sans-serif',
  weight = 400,
  lineHeight = 1.2,
  color = theme.colors.font.major,
  Fmin,
  Fmax,
  LHmin,
  LHmax
}: FontPropsType) => `
  font-family: ${family};
  font-weight: ${weight};
  line-height: ${lineHeight % 1 === 0 ? `calc(
    (100vw - 375px) / (1440 - 375) * (${LHmax} - ${LHmin}) + ${LHmin}px
  )` : lineHeight};
  color: ${color};
  font-size: calc(
    (100vw - 375px) / (1440 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px
  );
`
