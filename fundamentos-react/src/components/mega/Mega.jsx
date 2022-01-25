import React, { useState } from "react";
import Numeros from "./Numeros";
import './Numeros.css';
import Botao from "./Botao";

export default (props) => {

 const gerarNumeroNaoContido = (min, max, array) => {
     const aleatorio = parseInt(Math.floor(Math.random() * (max - min)) + min);
     return array.includes(aleatorio) ?
     gerarNumeroNaoContido(min, max, array) :
     aleatorio;
 }

    const gerarNumeros = (quantidade) => {
        const numeros = Array(quantidade)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums);
                return [...nums, novoNumero];
            }, [])
    return numeros.sort((n1, n2) => n1 - n2);
    
        // let numeros = Array(quantidade);
        // let numeroSorteado;
    
        // for(let i = 1; i <= quantidade; i++){
        //     numeroSorteado = Math.floor(Math.random() * (61 - 0)) + 0;
    
        //     if(i === 1){
        //         numeros.push(numeroSorteado);
        //     }else if(numeros.some((numero) => numero === numeroSorteado)){
        //         i--;
        //     }else{
        //         numeros.push(numeroSorteado);
        //     };
        // }
    
        // return numeros.sort((n1, n2) => n1 - n2);
    };

    const[numeros, setNumeros] = useState(Array(6).fill(0));

    const acao = () => {
        setNumeros(gerarNumeros(6));
    }
    
    return(
        <div className="Mega">
            <h2>Mega</h2>
                <h3>
                    <Numeros numeros={numeros}/>
                </h3>
            <Botao acao={acao}/>
        </div>
    )
}