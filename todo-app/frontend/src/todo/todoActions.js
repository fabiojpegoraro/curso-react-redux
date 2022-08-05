import axios from 'axios';

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'CHANGED_DESCRIPTION',
    payload: event.target.value
});


export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description;
        const search = description ? `&description__regex=/${description}/` : '';
        const request = axios.get(`${URL}?sort=createdAt${search}`)
            .then(resp => dispatch({ type: 'TODO_SEARCHED', payload: resp.data }))
    }
};

export const addTask = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(clearForm()))
    }
}

export const changeTask = (changeType, todo) => {
    const type = changeType === 'DONE';
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: type })
            .then(resp => dispatch(search()));
    }
}

export const deleteTask = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()));
    }
}

export const clearForm = () => {
    return [{ type: 'TODO_CLEAR' }, search()];
}