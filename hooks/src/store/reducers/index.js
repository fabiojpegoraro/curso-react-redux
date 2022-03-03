import NumberReducer from './number'
import UserReducer from './login'

export default function reducer(state, action){
    let newState = NumberReducer(state, action);
    return UserReducer(newState, action);
}