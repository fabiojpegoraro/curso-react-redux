const INITIAL_STATE = { description: '', list: [] };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGED_DESCRIPTION':
            return {...state, description: action.payload };
        case 'TODO_SEARCHED':
            return {...state, list: action.payload };
        case 'TODO_CLEAR':
            return {...state, description: '' };
        default:
            return state;
    }
}