 import React from "react";
import Botao from "../Botao";
import style from './Form.module.scss'

 class Fomulario extends React. Component{
     state ={
         tarefa :"",
         tempo:"00:00"          
     }
     adicionarTarefa(evento : React.FormEvent){
         evento.preventDefault()
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
                        <Botao type="submit">
                            Agendar
                        </Botao>
            </form>
         )
     }
 }
 export default Fomulario