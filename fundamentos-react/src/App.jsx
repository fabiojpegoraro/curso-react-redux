import React from "react";
import './App.css';
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
  
// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <div className="App">
    <h1>Fumdametos React</h1>
    <div className='Cards'>
    <Card titulo='#12 - Contador' color="#888">
      <Contador numeroInicial={10}/>
    </Card>
    <Card titulo='#11 - Componente controlado' color="#088">
      <Input/>
    </Card>
    <Card titulo='#10 - Comunicação Indireta' color="#990">
      <IndiretaPai/>
    </Card>
    <Card titulo='#9 - Comunicação Direta' color="#990">
      <DiretaPai/>
    </Card>
    <Card titulo='#8 - Par ou Ímpar' color="#950">
      <ParOuImpar numeros={[1, 4, 10, 20, 5, 7]}/>
    </Card>
    <Card titulo='#7 - Tabela de Produtos' color="#900">
      <TabelaProdutos/>
    </Card>
    <Card titulo='#6 - Repetição' color="#998">
      <ListaAlunos/>
    </Card>
    <Card titulo='#5 - Componente com Filhos' color='#327'>
        <Familia sobrenome='Ferreira'>
          <FamiliaMembro nome='Pedro'></FamiliaMembro>
          <FamiliaMembro nome='Ana'></FamiliaMembro>
          <FamiliaMembro nome='Gustavo'></FamiliaMembro>
        </Familia>
      </Card>
      <Card titulo='#4 - Desafio Aleatório' color='#080'>
        <Aleatorio min={1} max={100} />
      </Card>
      <Card titulo='#3 - Fragmento' color='#008'>
        <Fragmento />
      </Card>
      <Card titulo='#2 - Com Parâmetro' color='#500'>
        <ComParametro titulo="Situação do aluno" aluno="Aluno 1" nota={7} />
      </Card>
      <Card titulo='#1 - Primeiro Componente' color='#970'>
        <Primeiro/>
      </Card>    
    </div>
  </div>
);
