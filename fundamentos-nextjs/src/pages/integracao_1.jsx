import { useState } from 'react';
import Layout from '../components/Layout';

export default function integracao1(){

    const [codigo, setCodigo]  = useState(0);
    const [cliente, setCliente] = useState({});

    async function obterCliente(){
        const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`);
        const dados = await resp.json();
        setCliente(dados);
        // fetch(`http://localhost:3000/api/clientes/${codigo}`)
        // .then(resp => resp.json())
        // .then(data => setCliente(data));
    }

    return(
        <Layout>
            <input type='number' value={codigo} onChange={e => setCodigo(e.target.value)}/>
            <button onClick={obterCliente}>Obter Cliente</button>
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>E-mail: {cliente.email}</li>
            </ul>
        </Layout>
    )
}