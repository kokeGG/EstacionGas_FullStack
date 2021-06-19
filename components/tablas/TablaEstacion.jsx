import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Table } from 'react-bootstrap';


const Tabla = () => {

    const DivGeneral = styled.div`
        margin-top: 18rem;
    `;

    const DivSegundo = styled.div`
        width: 60%;
        margin: auto;
    `;

    const [ resultado, guardarResultado ] = useState({});


    useEffect(() => {
            
        const consumoDatos = async () => {
            const url = `http://localhost:4000/api/delivery`;
            const resultado = await axios.get(url);

            guardarResultado(resultado.data.[2]);
            console.log(resultado.data);
        }
        consumoDatos();
    }, [])

   
  

    return ( 
        <>
        <DivGeneral>
            <DivSegundo>
            <Table striped bordered>
                <thead className="p">
                    <tr>
                    <th>Número de Pedido</th>
                    <th>Estación</th>
                    <th>Fecha de Entrega</th>
                    <th>Hora de Entrega</th>
                    <th>Nombre del Operador</th>
                    <th>Nota</th>
                    <th>Número de Pedido</th>
                    <th>Tipo</th>
                    </tr>
                </thead>
                <tbody className="p">
                    <tr>
                    <td>{resultado.NumPedido}</td>
                    <td>{resultado.ES}</td>
                    <td>{resultado.FechaEntrega}</td>
                    <td>{resultado.HoraEntrega}</td>
                    <td>{resultado.NombreOperador}</td>
                    <td>{resultado.Nota}</td>
                    <td>{resultado.NumPedido}</td>
                    <td>{resultado.Tipo}</td>
                    </tr>
                </tbody>
            </Table>
            </DivSegundo>
        </DivGeneral>
        </>
     );
} 
 
export default Tabla;