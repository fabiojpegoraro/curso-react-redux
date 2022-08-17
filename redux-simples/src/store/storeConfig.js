import { createStore, combineReducers } from 'redux';
import { numerosReducerMin } from './reducers/numerosReducerMin';
import { numerosReducerMax } from './reducers/numerosReducerMax';

const reducers = combineReducers({
    numerosMin: numerosReducerMin,
    numerosMax: numerosReducerMax
})

function storeConfig() {
    return createStore(reducers);
}

export default storeConfig;