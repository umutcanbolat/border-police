import styled from 'styled-components';

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
  }

  p {
    text-align: center;
    font-size: initial;
  }
`;

export default StyledSidePanel;
