import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
  }
  @media (min-width: 768px) {
    width: 85%;
  }
  @media (min-width: 992px) {
    width: 80%;
  }
  @media (min-width: 1200px) {
    width: 70%;
  }
`;
