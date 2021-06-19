import React from 'react';
import styled from '@emotion/styled';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout'


const Home = () => {

  const Flex = styled.div`
    display: flex;
  `;


  return ( 
    <>
    <Flex>
      <Navbar/>
      <Layout />
      
    </Flex>

      

    </>
   );
}
 
export default Home;