import { NUM_MIN_ALTERADO } from '../actions/actioTypes';

const initialState = {
    min: 0
}

export const numerosReducerMin = (state = initialState, action) => {
    switch (action.type) {
        case NUM_MIN_ALTERADO:
            return {
                ...state,
                min: action.payload
            }

        default:
            return state
    }
}