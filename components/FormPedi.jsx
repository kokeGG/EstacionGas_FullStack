import React, {useState} from 'react';
import 'date-fns';
import styled from '@emotion/styled';
import Header from '../components/Header';
import { TextField, Button, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import Error from '../components/ErrorMensaje';
import 'bootstrap/dist/css/bootstrap.min.css';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const FormUsu = () => {

    const DivGeneral = styled.div`
        width: 100%;
        background-color: rgb(23, 28, 36) !important;
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

const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

const handleDateChange = (date) => {
    setSelectedDate(date);
  };


const [ registro, cambiarRegistro ] = useState({
nombre: '',
email: '',
phone: ''
});


const leerForm = e => {
cambiarRegistro({
    ...registro,
    [e.target.name] : e.target.value
});
}

const { nombre, email, phone } = registro;



const crearCuenta = async (e) => {
e.preventDefault();

if(nombre.trim() === '' || email.trim() === '' || phone === '') {
    guardarErrorVacio(true);
    setTimeout(() => {
        guardarErrorVacio(false);
    }, 5000);
    return
}

}
    return ( 
        
            <DivGeneral>
                <Header/>
            <div className="primero">
            <div className="circulo">
                        <CreateIcon  style={{ color: 'white', fontSize: 60}}/>
            </div>
                <div className="fondo">
                    <DivTi>
                        <Titu>Alta de Pedidos</Titu>
                    </DivTi>
                    {errorVacio ? <Error mensaje="Todos los campos son obligatorios" /> : null}
                <form className="campos" autoComplete="off" onSubmit={crearCuenta}>
                        <TextField 
                            className="filled-basic" 
                            label="Nombre del Cliente" 
                            type="text" 
                            name="nombre" 
                            value={nombre}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <TextField 
                            className="filled-basic" 
                            label="Cantidad Solicitada en Litros" 
                            type="email" 
                            name="email" 
                            value={email}
                            variant="filled" 
                            style={{ width: 500, marginTop: 45 }}
                            onChange={leerForm}
                        />
                        <FormControl>
                            <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                >
                                <MenuItem>Premium</MenuItem>
                                <MenuItem>Regular</MenuItem>
                                </Select>
                        </FormControl>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                            <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                            </MuiPickersUtilsProvider>
                        <DivBoton>
                            <Button type="submit" variant="contained" color="primary" style={{ width: 500, marginTop: 45, marginBottom: 45 }}>
                                Agregar Cliente
                            </Button>
                        </DivBoton>
                        
                </form>
                </div>
            </div>
            </DivGeneral>
    
     );
}
 
export default FormUsu;