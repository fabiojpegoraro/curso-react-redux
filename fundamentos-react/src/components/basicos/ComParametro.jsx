import React from "react";

export default function ComParametro(props){
    
    const resultado = props.nota >= 7.00 ? 'Aprovado(a)' : 'Reprovado(a)';

    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong>{ props.aluno } </strong>
                tem nota 
                <strong> { props.nota } </strong>
                e está!
                <strong> { resultado }</strong>
            </p>
        </div>
    );
}