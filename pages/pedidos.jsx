import React from 'react';
import styled from '@emotion/styled';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import FormPedi from '../components/FormPedi'

const Pedidos = () => {

    const Flex = styled.div`
        display: flex;
    `;



    return ( 
        <>
            <Flex>
            <Navbar/>

            <FormPedi />
            
            

            </Flex>

            
            
            

            
            
            
        </>
     );
}
 
export default Pedidos;