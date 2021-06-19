import React from 'react';
import styled from '@emotion/styled';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import FormUsu from '../components/FormUsu';

const RegistroUsu = () => {

    const Flex = styled.div`
        display: flex;
    `;



    return ( 
        <>
            <Flex>
            <Navbar/>

            <FormUsu />
            

            </Flex>

            
            
            

            
            
            
        </>
     );
}
 
export default RegistroUsu;