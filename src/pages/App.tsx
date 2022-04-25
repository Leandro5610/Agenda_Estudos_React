import React, { useState } from 'react';
import { Cronometro } from '../componentes/cronometro';
import Fomulario from '../componentes/Formulario';
import Lista from '../componentes/Lista';
import { ITarefa } from '../types/Tarefas';
import style from './App.module.scss'

function App() {
  const [tarefas, setTarefas] =useState<ITarefa[]>([])
  const [selecionado, setSelecionado]= useState<ITarefa>()
  const[completado, setCompletado] = useState<ITarefa>()
  function selecionaTarefa(tarefaSelecionada:ITarefa){
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores =>tarefasAnteriores.map(tarefa =>({
      ...tarefa, 
      selecionado:tarefa.id === tarefaSelecionada.id ? true: false
    })))
  }
  return (
    <div className= {style.AppStyle}>
     <Fomulario setTarefas={setTarefas}/>
     <Lista tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}

     />
     <Cronometro
     selecionado={selecionado}
     />
     
    </div>
  );
}

export default App;
