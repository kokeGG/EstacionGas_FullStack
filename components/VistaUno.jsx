import React from 'react';
import styled from '@emotion/styled';

const VistaUno = () => {

    const Godiv = styled.div`
        background-color: rgb(23, 28, 36) !important;
        width: 100%;
        display: grid;
        align-items: center;
    `;




    return ( 
        <>
            <Godiv>
                <h1 className="animated">
                    GoGasoline
                </h1>
            </Godiv>
        </>
     );
}
 
export default VistaUno;