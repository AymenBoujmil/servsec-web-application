import * as api from '../api/index.js';
import {FETCH_ALL_SERVICES} from '../_constants/actionTypes';

export const getServices=() => async (dispatch) =>
{
    try {   
        const { data } = await api.fetchServices(); 
        console.log(data);
        dispatch({type : FETCH_ALL_SERVICES ,payload : data});
    } catch (error) {
         console.log(error);
    }

}
