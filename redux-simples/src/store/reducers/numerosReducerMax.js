import { NUM_MAX_ALTERADO } from '../actions/actioTypes';

const initialState = {
    max: 10
}

export const numerosReducerMax = (state = initialState, action) => {
    switch (action.type) {
        case NUM_MAX_ALTERADO:
            return {
                ...state,
                max: action.payload
            }

        default:
            return state
    }
}