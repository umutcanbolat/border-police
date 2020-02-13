import styled from 'styled-components';
import {
  VISA_FREE_FILL,
  VISA_FREE_OUTLINE,
  VISA_ON_ARRIVAL_FILL,
  VISA_ON_ARRIVAL_OUTLINE,
  E_VISA_FILL,
  E_VISA_OUTLINE,
} from './colors';

const StyledSidePanel = styled.div`
  z-index: 99;
  height: 80%;
  width: 19rem;
  display: flex;
  position: absolute;
  margin-top: 6rem;
  margin-left: 1.5rem;
  background: white;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;

  #cap {
    width: 8rem;
    height: 8rem;
    // margin: 0 auto;
    // margin-top: 2rem;
  }

  .ant-select {
    height: fit-content;
    margin-top: 2rem;
  }

  p {
    text-align: center;
    font-size: initial;
  }

  .box {
    width: 3rem;
    height: 1.4rem;
    border: solid;
    border-width: 0.1rem;
    border-radius: 0.2rem;
  }

  .palette {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .palette:not(:last-child) {
    margin-bottom: 1rem;
  }

  #visaFree {
    background: ${VISA_FREE_FILL};
    border-color: ${VISA_FREE_OUTLINE};
  }
  #visaOnArrival {
    background: ${VISA_ON_ARRIVAL_FILL};
    border-color: ${VISA_ON_ARRIVAL_OUTLINE};
  }
  #eVisa {
    background: ${E_VISA_FILL};
    border-color: ${E_VISA_OUTLINE};
  }

  .color-palette > .palette > span {
    margin-left: 1rem;
  }

  .color-palette {
    margin: auto 0;
  }
`;

export default StyledSidePanel;
