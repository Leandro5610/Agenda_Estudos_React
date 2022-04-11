import React, { useState } from 'react';
import { Cronometro } from '../componentes/cronometro';
import Fomulario from '../componentes/Formulario';
import Lista from '../componentes/Lista';
import style from './App.module.scss'

function App() {
  let [tarefas, setTarefas] =useState(
    [
        {
            tarefa:"JavaScript",
            tempo:"01:30:00"
        },
        {
            tarefa:"React",
            tempo:"02:00:00"
        },
        {
            tarefa:"Phyton",
            tempo:"03:00:00"
        }
       
    ]
    
)
  return (
    <div className= {style.AppStyle}>
     <Fomulario setTarefas={setTarefas}/>
     <Lista tarefas={tarefas}/>
     <Cronometro/>
     
    </div>
  );
}

export default App;
