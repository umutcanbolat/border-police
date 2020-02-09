import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/Layout';
import Map from '../components/Map';
import SidePanel from '../components/SidePanel';

const HomePage: NextPage = () => {
  return (
    <>
      <Layout title="Home">
        <Map />
        <SidePanel />
      </Layout>
    </>
  );
};

export default HomePage;
