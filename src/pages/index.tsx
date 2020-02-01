import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
`;

const HomePage: React.FC<{}> = () => {
  return (
    <>
      <Title>Border Police</Title>;
    </>
  );
};

export default HomePage;
