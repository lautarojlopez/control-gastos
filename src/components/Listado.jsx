import React from 'react';
import Gasto from './Gasto';
import ControlPresupuesto from './ControlPresupuesto';

const Listado = ({gastos, presupuesto, restante}) => {
    return ( 
        <div className="p-5 bg-white rounded-lg shadow-2xl my-1">
            <h2 className='text-center text-emerald-800 font-bold text-xl'>Listado de gastos <i class="fas fa-receipt"></i></h2>
            <ControlPresupuesto
                presupuesto = {presupuesto}
                restante = {restante}
            />
            {gastos.length <= 0 ? <p className='text-center text-gray-400 py-2'>No has añadido gastos aún</p> : 
             gastos.map( gasto => (
                <Gasto
                    key = {gasto.id}
                    gasto = {gasto}
                />
            ) )}
        </div>
     );
}
 
export default Listado;