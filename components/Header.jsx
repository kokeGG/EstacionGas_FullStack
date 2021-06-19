import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';


const Header = () => {

    const HeaderA = styled.header`
        width: 100%;
        height: 4rem;
        background-color: rgb(23, 28, 36) !important;
    `;

    const Godiv = styled.div`
        width: 100%;
    `;

    const DivPointer = styled.div`
        width: 15%;
        cursor: pointer;
        margin: auto;
    `;

    const Go = styled.h1`
        width: 100%;
        cursor: pointer !important;
        

    `;
    return ( 
        <>
            <HeaderA>
                <Godiv>
                    <Link href="/">
                        <DivPointer>
                            <h1 className="animated-shadow til">
                                GoGasoline
                            </h1>
                        </DivPointer>
                    </Link>
                </Godiv>
            </HeaderA>
        </>
     );
}
 
export default Header;