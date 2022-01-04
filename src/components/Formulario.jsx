import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({agregarNuevoGasto}) => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [error, setError] = useState(false)

    const agregarGasto = (e) => {
        e.preventDefault()

        //Validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            setError(true)
            return
        }
        else{
            setError(false)
        }

        //Gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        //Agregar al arreglo de gastos
        agregarNuevoGasto(gasto)

        //Reiniciar formulario
        setNombre('')
        setCantidad('')
    }

    return ( 
        <div className="p-5 bg-white rounded-lg shadow-2xl my-1">
            <form
                onSubmit={agregarGasto}
            >
                <h2 className='text-center text-emerald-800 font-bold text-xl'>Agrega tus gastos <i class="fas fa-money-check-alt"></i></h2>
                { error ? <Error mensaje="Ingresa un gasto válido."/> : '' }
                <label htmlFor="">Gasto</label>
                <input
                    type="text"
                    placeholder='Ej. Transporte, Comida, Ropa'
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    className='w-full p-2 rounded-lg border-2 border-emerald-500 my-1 focus:outline-none focus:ring focus:ring-emerald-200'
                />

                <label htmlFor="">Cantidad</label>
                <input
                    type="number"
                    placeholder='$'
                    value={cantidad}
                    onChange={e => setCantidad( parseInt(e.target.value) )}
                    className='w-full p-2 rounded-lg border-2 border-emerald-500 my-1 focus:outline-none focus:ring focus:ring-emerald-200'
                />

                <button 
                    type="submit"
                    className='rounded text-white p-2 my-2 w-full bg-emerald-700 hover:bg-emerald-600 transition-all ease-linear duration-100'
                >Enviar <i class="fas fa-dollar-sign"></i></button>
            </form>
        </div>
     );
}
 
export default Formulario;