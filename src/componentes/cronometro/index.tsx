import Botao from "../Botao";
import Relogio from "./relogio";
import style from "./Cronometro.module.scss"

export function Cronometro(){
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card para iniciar o cronomêtro</p>
            <div className={style.relogioWrapper}>
            <Relogio/>
            </div>
         
                <Botao>
                    Iniciar
                </Botao>
        </div>

    )
}