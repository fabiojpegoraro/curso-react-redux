import {NUM_MIN_ALTERADO, NUM_MAX_ALTERADO} from './actioTypes';

//Action creator
export const alterarNumeroMinimo = (novoNumero) => {
    return{
        type: NUM_MIN_ALTERADO,
        payload: novoNumero
    }
}

//Action creator
export const alterarNumeroMaximo = (novoNumero) => {
    return{
        type: NUM_MAX_ALTERADO,
        payload: novoNumero
    }
}