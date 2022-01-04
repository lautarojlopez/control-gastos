import React, { useState } from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario';
import Listado from './components/Listado';

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [restante, setRestante] = useState(0)
  const [mostrarFormInicio, setMostrarFormInicio] = useState(true)
  const [gastos, setGastos] = useState([])

  const agregarNuevoGasto = gasto => {
    setGastos([
      ...gastos,
      gasto
    ])

    setRestante(restante - gasto.cantidad)

  }

  return (
    <div className="App">
      <div className="w-11/12 lg:w-8/12 m-auto">
        <h1 
          className="text-center text-white font-bold text-4xl p-5"
        >Control de Gastos <i class="fas fa-wallet"></i></h1>
        {
          mostrarFormInicio ? 
            <Pregunta
              setPresupuesto = {setPresupuesto}
              setRestante = {setRestante}
              setMostrarFormInicio = {setMostrarFormInicio}
            />
            :
            <div className='flex w-full flex-col md:flex-row'>
              <div className='w-full md:w-3/6 md:mr-3'>
                <Formulario
                  agregarNuevoGasto = {agregarNuevoGasto}
                />
              </div>
              <div className='w-full md:w-3/6 md:ml-3'>
                <Listado
                  gastos = {gastos}
                  presupuesto = {presupuesto}
                  restante = {restante}
                />
              </div>
            </div>
        }
        
      </div>
    </div>
  );
}

export default App;
