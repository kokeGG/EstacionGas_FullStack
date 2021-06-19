import React from 'react'
import styled from '@emotion/styled';
import Link from 'next/link';

const Navbar = () => {

    const Nav = styled.nav`
        width: 12%;
        height: 60.57rem;
        background-color: rgb(34, 43, 54);
    `;

    const DivGeneral = styled.div`
        padding: 5px;
        padding-top: 4rem;
        padding-left: 15px;
        
    `;

    const DivGeneralTxt = styled.p`
        color: white;
        font-weight: bold;
        font-size: 12px;
        
    `;

    const DivServicios = styled.div`
        
    `;

    const DivNombres = styled.p`
        font-size: 12px;
        font-weight: bold;
        color: gray;
        padding: 15px;
        cursor: pointer;
        width: 100%;
        padding-left: 20px;

        &:hover {
            color: rgb(104, 142, 255);
        }
    `;

    const DivServiciosTxt = styled.p`
        font-size: 12px;
        font-weight: bold;
        color: gray;
        padding: 15px;
        cursor: pointer;
        width: 40%;
        padding-left: 20px;

        &:hover {
            color: rgb(104, 142, 255);
        }

    `;

    return ( 
        <>
            <Nav className="sticky-top">
                <DivGeneral>
                    <DivGeneralTxt>
                        General
                    </DivGeneralTxt>
                </DivGeneral>
                <DivServicios>
                    <Link href="/estacion">
                        <DivServiciosTxt>
                            Estación
                        </DivServiciosTxt>
                    </Link>
                </DivServicios>
                <DivServicios>
                    <Link href="/pedidos">
                        <DivServiciosTxt>
                            Pedidos
                        </DivServiciosTxt>
                    </Link>
                </DivServicios>
                <DivServicios>
                    <DivServiciosTxt>
                        Alta
                    </DivServiciosTxt>
                </DivServicios>
                <DivServicios>
                    <DivServiciosTxt>
                        Estación
                    </DivServiciosTxt>
                </DivServicios>
                <DivServicios>
                    <DivServiciosTxt>
                        Ventas
                    </DivServiciosTxt>
                </DivServicios>
                <DivGeneral>
                    <DivGeneralTxt>
                        Desarrolladores
                    </DivGeneralTxt>
                </DivGeneral>
                <DivServicios>
                    <DivNombres>
                        Hernandez Ríos Jorge Roberto
                    </DivNombres>
                </DivServicios>
                <DivServicios>
                    <DivNombres>
                        Avendaño Huerta Erick Daniel
                    </DivNombres>
                </DivServicios>
                <DivServicios>
                    <DivNombres>
                        Fuentes Rubio Ramón Alejandro
                    </DivNombres>
                </DivServicios>
                <DivServicios>
                    <DivNombres>
                        Villegas Rivera Karla Anayancin
                    </DivNombres>
                </DivServicios>
            </Nav>
        </>
     );
}
 
export default Navbar;