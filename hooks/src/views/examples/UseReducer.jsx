import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

function reducer(state, action){
    switch(action.type){
        case 'numberAdd2':
            return {...state, number: state.number + 2};
        case 'numberMult7':
            return {...state, number: state.number * 7};
        case 'numberDiv25':
            return {...state, number: state.number / 25};
        case 'numberParseInt':
            return {...state, number: parseInt(state.number)};
        case 'addValor':
            return{...state, number: state.number + action.payload};
        case 'login':
            return {...state, user: {name: action.payload}};
        default:
            return state;
    }
}

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
                        onClick={() => {dispatch({type: 'login', payload: retornaNome()})}}>Login</button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'numberAdd2'})}>+2</button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'numberMult7'})}>*7</button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'numberDiv25'})}>/25</button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'numberParseInt'})}>Int</button>
                    <button className="btn"
                        onClick={() => dispatch({type: 'addValor', payload: retornaValor()})}>Add Valor</button>
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
