import React, { Fragment } from 'react';

const ControlPresupuesto = ({presupuesto, restante}) => {
    
    const porcentaje = (restante * 100) / presupuesto
    const colorResultante = (porcentaje) => {
        
        if(porcentaje >= 75){
            return 'border-green-500 bg-green-100 text-green-500'
        }
        else if(porcentaje >= 50){
            return 'border-yellow-500 bg-yellow-100 text-yellow-500'
        }
        else if(porcentaje >= 25){
            return 'border-orange-500 bg-orange-100 text-orange-500'
        }
        else{
            return 'border-red-500 bg-red-100 text-red-500'
        }
    }

    return ( 
        <Fragment>
            <div className="presupuesto p-3 my-2 border-2 border-green-500 bg-green-100 text-green-500">
                <p><i class="far fa-money-bill-alt"></i> Presupuesto: ${presupuesto}</p>
            </div>
            <div className={`restante p-3 my-2 border-2 ${colorResultante(porcentaje)}`}>
                <p><i class="far fa-money-bill-alt"></i> Restante: ${restante}</p>
            </div>
            {porcentaje < 0 ? 
                <p className='p-2 font-bold text-center text-red-500 uppercase'>ATENCIÓN: Presupuesto excedido</p>
                :
                ''
            }
        </Fragment>
     );
}
 
export default ControlPresupuesto;