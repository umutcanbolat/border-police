import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/Layout';
import Map from '../components/Map';

const HomePage: NextPage = () => {
  return (
    <>
      <Layout title="Home">
        <Map />
      </Layout>
    </>
  );
};

export default HomePage;
