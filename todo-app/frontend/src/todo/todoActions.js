import axios from 'axios';

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'CHANGED_DESCRIPTION',
    payload: event.target.value
});


export const search = () => {
    const request = axios.get(`${URL}?sort=createdAt`);
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
};

export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            // .then(resp => dispatch({ type: 'TODO_ADDED', payload: resp.data }))
            .then(resp => dispatch(search()));
    }
}

export const changeTask = (changeType, todo) => {
    const type = changeType === 'DONE';
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: type })
            .then(resp => dispatch(search()));
    }
}