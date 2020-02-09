import React from 'react';
import styled from 'styled-components';
import Cap from '../assets/police-cap.svg';

const StyledSidePanel = styled.div`
  z-index: 99;
  height: 80%;
  width: 19rem;
  display: flex;
  position: absolute;
  margin-top: 6rem;
  margin-left: 1.5rem;
  background: white;

  svg {
    width: 9rem;
    height: 9rem;
    margin: 0 auto;
    margin-top: 2rem;
  }
`;

const SidePanel: React.FC<{}> = () => {
  return (
    <>
      <StyledSidePanel>
        {/* <img alt="police-cap" id="cap" src={Cap} /> */}
        <Cap />
      </StyledSidePanel>
    </>
  );
};

export default SidePanel;
