import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <div id="app">
    <h1>Fumdametos React</h1>
    <Aleatorio min={1} max={100} /> 
    <Fragmento />
    <ComParametro titulo="Situação do aluno" aluno="Aluno 1" nota={7} />
    <ComParametro titulo="Situação do aluno" aluno="Aluno 2" nota={8.5} />
    <Primeiro></Primeiro>
  </div>
);
