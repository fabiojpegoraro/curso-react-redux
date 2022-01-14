import React from "react";
import produtos from '../../data/produtos';
import './TabelaProdutos.css';

export default (props) => {

    const tabelaProdutos = produtos.map((produto, i) => {
        return(
            <tr key={produto.id}
                className={ i % 2 === 0 ? 'par' : ''}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco.toFixed(2)}</td>
            </tr>
        );
    });

    return(
            <div>
                <table className='tabela'>
                    <thead>
                    <tr>
                        <th><strong>Id</strong></th>
                        <th><strong>Nome</strong></th>
                        <th><strong>Preço</strong></th>
                    </tr>
                    </thead>
                    <tbody>
                        {tabelaProdutos}
                    </tbody>
                </table>
                </div>    
            )
}