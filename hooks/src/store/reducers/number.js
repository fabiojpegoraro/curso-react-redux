export default function NumberReducer(state, action){
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
        default:
            return state;
    }
}