import Botao from "../Botao";
import Relogio from "./relogio";
import style from "./Cronometro.module.scss"
import { tempoParaSegundo } from "../../common/utils/time";
import { ITarefa } from "../../types/Tarefas";
import { useEffect, useState } from "react";



interface Props{
    selecionado:ITarefa | undefined
    finalizarTarefa: () => void
}


export function Cronometro({selecionado, finalizarTarefa}:Props){
    const [tempo,setTempo]= useState<number>()
    useEffect(()=>{
        if(selecionado?.tempo){
        setTempo (tempoParaSegundo(String(selecionado?.tempo)))
    }
    }, [selecionado]   )

    function regressiva(contador: number = 0){
        setTimeout(()=>{
            if(contador > 0){
                    setTempo(contador - 1)
                    return regressiva(contador -1)
            }
            finalizarTarefa();
        },1000)
            
    }
   
//    console.log('conversao', tempoParaSegundo('01:01:01'))//
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card para iniciar o cronomêtro</p>
            tempo: {tempo}
            <div className={style.relogioWrapper}>
            <Relogio
                tempo={tempo}
            />
            </div>
         
                <Botao onClick= {()  => regressiva(tempo)}>
                    Iniciar
                </Botao>
        </div>

    )
    
}