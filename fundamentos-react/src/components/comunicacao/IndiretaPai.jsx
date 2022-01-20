import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {

    const [nome, setNome] = useState(null);
    const [idade, setIdade] = useState(null);
    const [nerd, setNerd] = useState(null);


    //nome idade nerd
const receberDados = (nome, idade, nerd) => {
        setNome(nome);
        setIdade(idade);
        setNerd(nerd);
};

    return(
        <div>
            <dvi>
                <span> {nome} </span>
                <span>{idade} </span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'} </span>
            </dvi>
            <IndiretaFilho quandoClicar={receberDados}></IndiretaFilho>
        </div>
    )
}