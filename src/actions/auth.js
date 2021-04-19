import * as api from '../api/index.js';
import { AUTH } from '../_constants/actionTypes';

export const signin = (formData,history) => async (dispatch) =>
{
    try {
        const { data } = await api.signin(formData);
        dispatch({type:AUTH,data});
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}
