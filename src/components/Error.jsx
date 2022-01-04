import React from 'react';

const Error = ({mensaje}) => {
    return ( 
        <p className='text-center my-3 rounded p-3 border-2 border-red-500 text-red-500 bg-red-200'>{mensaje}</p>
     );
}
 
export default Error;