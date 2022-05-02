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

  function finalizarTarefa(){
      if(selecionado){
        setSelecionado(undefined)
          setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa =>{
                if(tarefa.id === selecionado.id){
                  return {...tarefa, selecionado:false,completado:true}
                }
                return tarefa
          }));
      }
  }
  return (
    <div className= {style.AppStyle}>
     <Fomulario setTarefas={setTarefas}/>
     <Lista tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}

     />
     <Cronometro
     selecionado={selecionado}
      finalizarTarefa={finalizarTarefa}
     
     />
     
    </div>
  );
}



export default App;
