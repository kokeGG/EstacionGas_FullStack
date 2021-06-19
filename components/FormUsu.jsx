import React, {useState} from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import { TextField, Button } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import Tabla from '../components/tablas/TablaEstacion';
import Error from '../components/ErrorMensaje';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormUsu = () => {

    const DivGeneral = styled.div`
        width: 100%;
        background-color: rgb(23, 28, 36) !important;
        min-height: 90rem;
    `;

    const DivForm = styled.div`
        width: 100%;
        
    `;

const DivTi = styled.div`
text-align: center;
padding-top: 5rem;
//border: 1px solid black;
`;

const Titu = styled.h1`
letter-spacing: 2px;
margin-top: 3rem;
color: white;
`;

const DivBoton = styled.div`
text-align: center !important;

`;

const TextDi = styled.div`
width: 100%;
padding-bottom: 1rem;

`;

const Text = styled.p`
color: white;
text-align: center;
font-size: 19px;
cursor: pointer;
`;

const [ error, guardarError] = useState(false);

const [errorVacio, guardarErrorVacio] = useState(false);

const [ registro, cambiarRegistro ] = useState({
estacion: '',
email: '',
encargado: '',
phone: '',
nombre: '',
eNombre: '',
direccion: ''
});


const leerForm = e => {
cambiarRegistro({
    ...registro,
    [e.target.name] : e.target.value
});
}

const { estacion, email, encargado, phone, nombre, eNombre, direccion } = registro;



const crearCuenta = async (e) => {
e.preventDefault();

if(estacion.trim() === '' || email.trim() === '' || encargado.trim() === '' || phone.trim() === '' || 
    nombre.trim() === '', eNombre.trim() === '' || direccion.trim() === '') {
    guardarErrorVacio(true);
    setTimeout(() => {
        guardarErrorVacio(false);
    }, 5000);
    return
}

}
    return ( 
        <div className="xd">
            
                <Header/>
                
                <div className="primero">
                <div className="circulo">
                    <CreateIcon  style={{ color: 'white', fontSize: 60}}/>
                </div>
                <div className="fondo">
                    <DivTi>
                        <Titu>Nueva Estación</Titu>
                    </DivTi>
                    {errorVacio ? <Error mensaje="Todos los campos son obligatorios" /> : null}
                <form className="campos" autoComplete="off" onSubmit={crearCuenta}>
                        <TextField 
                            className="filled-basic" 
                            label="Estación" 
                            type="text" 
                            name="estacion" 
                            value={estacion}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <TextField 
                            className="filled-basic" 
                            label="Correo" 
                            type="email" 
                            name="email" 
                            value={email}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <TextField 
                            className="filled-basic" 
                            label="Encargado" 
                            type="email" 
                            name="encargado" 
                            value={encargado}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <TextField 
                            className="filled-basic" 
                            label="Teléfono" 
                            type="phone" 
                            name="phone" 
                            value={phone}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <TextField 
                            className="filled-basic" 
                            label="Nombre" 
                            type="email" 
                            name="nombre" 
                            value={nombre}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <TextField 
                            className="filled-basic" 
                            label="Nombre Estación" 
                            type="email" 
                            name="eNombre" 
                            value={eNombre}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <TextField 
                            className="filled-basic" 
                            label="Dirección" 
                            type="email" 
                            name="direccion" 
                            value={direccion}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <DivBoton>
                            <Button type="submit" variant="contained" color="primary" style={{ width: 500, marginTop: 45, marginBottom: 45 }}>
                                Guardar
                            </Button>
                        </DivBoton>
                </form>
                </div>
            </div>

                <Tabla />
                
            </div>
    
     );
}
 
export default FormUsu;