 import React from "react";
import { ITarefa } from "../../types/Tarefas";
import Botao from "../Botao";
import style from './Form.module.scss'
import {v4 as uuid} from 'uuid'

 class Fomulario extends React. Component<{ setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>}>{
     state ={
         tarefa :"",
         tempo:"00:00"          
     }
     adicionarTarefa(evento : React.FormEvent){
         evento.preventDefault()
         this.props.setTarefas(tarefasAntigas=>[...tarefasAntigas,{...this.state,
            selecionado :false,
            completado:false, 
            id:uuid()}])
         this.setState({
            tarefa:"",
            tempo:"00:00"
         })
        console.log('state', this.state)
     }
     render(){
         return(
            <form action="" className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adiciona o Estudo</label>
                    <input type="text" 
                    name="tarefa" 
                    id="tarefa" value={this.state.tarefa}
                    onChange={evento => this.setState({...this.state,tarefa:evento.target.value})}
                    placeholder="Adicione um Estudo" required/>
                    </div>
                    <div className={style.inputContainer}>
                    <label htmlFor="tempo">Determine o Tempo</label>
                    <input type="time" name="tempo" id="tempo" required step="1" onChange={evento => this.setState({...this.state,tempo:evento.target.value})} 
                    value={this.state.tempo} min="00:00:00" max="02:00:00"/>
                    </div>
                        <Botao type="submit" >
                            Agendar
                        </Botao>
            </form>
         )
     }
 }
 export default Fomulario