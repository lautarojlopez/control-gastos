import React, { Fragment, useState } from 'react';
import Error from './Error'

const Pregunta = ({setPresupuesto, setRestante, setMostrarFormInicio}) => {

    //States
    const [cantidad, guardarCantidad] = useState(0)
    const [error, setError] = useState(false)

    //Leer presupuesto
    const definirPresupuesto = (e) => {
        guardarCantidad(parseInt(e.target.value))
    }

    const agregarPresupuesto = (e) => {
        e.preventDefault()
        //Validar cantidad
        if(cantidad < 1 || isNaN(cantidad)){
            setError(true)
            return
        }

        //Si pasa la validación
        setError(false)
        setPresupuesto(cantidad)
        setRestante(cantidad)
        setMostrarFormInicio(false)
    }

    return ( 
        <Fragment>
                <div className="p-5 bg-white rounded-lg shadow-2xl">
                    <h2>Escribe tu presupuesto</h2>
                    { error ? <Error mensaje="Ingresa un presupuesto válido"/> : '' }
                    <form action="" onSubmit={agregarPresupuesto}>
                        <input
                            type="number"
                            name="presupuesto"
                            placeholder='Tu Presupuesto'
                            onChange={definirPresupuesto}
                            className='w-full p-2 rounded-lg border-2 border-emerald-500 my-3 focus:outline-none focus:ring focus:ring-emerald-200'
                        />
                        <button
                            type="submit"
                            className='w-full p-2 text-xl bg-emerald-700 text-white rounded hover:bg-emerald-600 transition-all ease-linear duration-100'
                        >Enviar <i class="fas fa-dollar-sign"></i></button>
                    </form>
                </div>
        </Fragment>
     );
}
 
export default Pregunta;