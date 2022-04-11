import style from './Lista.module.scss'
import '../../assets/img/check-mark.svg'
import { Item } from './item'   
import { useState } from 'react'
interface ITarefa{
    tarefa:string
    tempo:string
}
function Lista({tarefas}:{tarefas:ITarefa[]}){   
   
    return( 
        <aside className={style.listaTarefas}>
            <h2>Estudos de Dia</h2>
            <ul>
            {tarefas.map((item,index)=>(
              <Item  
                 key={index}
                tarefa={item.tarefa}
                tempo={item.tempo}
              />
            ))}
    
            </ul>
        </aside>
    )
}
export default Lista