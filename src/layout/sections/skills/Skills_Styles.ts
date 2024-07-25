import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { SectionHeading } from '../../../components/SectionHeading';


const GridWrapper = styled.div`
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-auto-rows: 120px;

  gap: 74px 90px;

  @media ${theme.media.mobile} {
    padding: 0 20px;
    gap: 50px 65px;

    grid-template-columns: 1fr 1fr;
  }
`;

const SkillImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: none;
`;

const Skills = styled.section`
  margin-top: 254px;
  
  @media (width <= 1250px) {
    margin-top: 144px;
  }

  @media ${theme.media.mobile} {
    margin-top: 90px;
  }

  ${SectionHeading} {
    margin-bottom: 82px;

    @media ${theme.media.mobile} {
      margin-bottom: 58px;
    }
  }
`;

export const S = {
  GridWrapper,
  SkillImg,
  Skills
}
