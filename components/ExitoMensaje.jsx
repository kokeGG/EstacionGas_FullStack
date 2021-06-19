import React from 'react';

const Exito = ({mensaje}) => {
    return ( 
        <p className="alert alert-success text-center p-2" role="alert">{mensaje}</p>
     );
}
 
export default Exito;