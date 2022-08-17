import './Intervalo.css';
import React from 'react';
import { connect } from 'react-redux';
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numerosAction';
import Card from './Card';

const Intervalo = props => {

    const {min, max} = props;
    const alterarMinimo = props.alterarMinimo;
    const alterarMaximo = props.alterarMaximo;

    return (
        <Card title='Intervalor de Números' red>
            <div className='Intervalo'>
            <span>
                <strong>Mínimo:</strong>
                <input type='number' value={min} onChange={e => alterarMinimo(+e.target.value)}></input>
            </span>
            <span>
                <strong>Máximo:</strong>
                <input type='number' value={max} onChange={e => alterarMaximo(+e.target.value)}></input>
            </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return{
        min: state.numerosMin.min,
        max: state.numerosMax.max
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        alterarMinimo(novoNumero){
            //action creator -> retorna uma action
            const action = alterarNumeroMinimo(novoNumero);
            dispatch(action);
        },
        alterarMaximo(novoNumero){
            //action creator -> retorna uma action
            const action = alterarNumeroMaximo(novoNumero);
            dispatch(action);
        }
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Intervalo);