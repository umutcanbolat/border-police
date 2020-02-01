import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Title = styled.h1`
  font-size: 50px;
`;

const HomePage: NextPage = () => {
  return (
    <>
      <Layout title="Home">
        <Title>Border Police</Title>
      </Layout>
    </>
  );
};

export default HomePage;
