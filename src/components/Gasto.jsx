import React from 'react';

const Gasto = ({gasto}) => {
    return ( 
        <div className="gasto flex justify-between p-2 border-b border-gray-400 w-full">
            <p className=''>{gasto.nombre}</p>
            <p className='text-green-600'>${gasto.cantidad}</p>
        </div>
     );
}
 
export default Gasto;