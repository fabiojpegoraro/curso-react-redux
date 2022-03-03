import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer} from '../../store'

import * as actions from '../../store/actions'

function retornaNome(){
    const nome = document.querySelector('#login');
    if(nome.value) {
        return nome.value;
    }
    return 'Sem usuário';
}

function retornaValor(){
    const valor = document.querySelector('#valor');
    if (valor.value){
        return parseInt(valor.value)

    }
    return null;
}

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(reducer);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                <div>
                    {state.user ?
                        <span className="text">{state.user.name}</span>
                        : <span className="text">Sem usuário</span>
                    }
                </div>
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                        onClick={() => actions.login(dispatch, retornaNome())}>Login</button>
                    <button className="btn"
                        onClick={() => actions.numberAdd2(dispatch)}>+2</button>
                    <button className="btn"
                        onClick={() => actions.numberMult7(dispatch)}>*7</button>
                    <button className="btn"
                        onClick={() => actions.numberDiv25(dispatch)}>/25</button>
                    <button className="btn"
                        onClick={() => actions.numberParseInt(dispatch)}>Int</button>
                    <button className="btn"
                        onClick={() => actions.addValor(dispatch, retornaValor())}>Add Valor</button>
                </div>
                <div>
                    <label>Nome:</label>
                    <input type="text" className="input" id="login"/>
                    <label>Valor:</label>
                    <input type="number" className="input" id="valor"/>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
