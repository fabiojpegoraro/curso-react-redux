import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import consts from '../consts';

export function login(values) {
    return submit(values, `${consts.OAPI_URL}/login`);
};

export function signup(values) {
    return submit(values, `${consts.OAPI_URL}/signup`);
};