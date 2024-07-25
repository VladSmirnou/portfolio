import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { animateScroll as scroll } from 'react-scroll';


export const GoTopBtn = () => {

  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShowBtn(window.scrollY > 200);
    })
  }, []);

  return (
    <>
      {showBtn && <StyledGoTopBtn onClick={ scroll.scrollToTop }>
        <Icon iconId={'arrowGoTop'} width={16} height={15} boxConf='0 0 16 15'/>
      </StyledGoTopBtn>}
    </>
  )
}


const StyledGoTopBtn = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;

  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  use {
    fill: black;
  }
`;
