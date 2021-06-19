import React from 'react';


const Error = ({mensaje}) => {
    return ( 
        <p className="alert alert-danger text-center p-2 mt-4 col-md-6 al" role="alert">{mensaje}</p>
     );
}
 
export default Error;