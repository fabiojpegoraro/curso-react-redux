import React from "react";

const aleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default (props) => {
    return (    
        <div>
            <p>
                <strong>Valor Mínimo é: {props.min}</strong>
            </p>
            <p>
                <strong>Valor Máximo é: {props.max}</strong>
            </p>
            <p>
            <strong>Valor Escolhido é: {aleatorio(props.min, props.max)}</strong>
            </p>
        </div>
    );
};
