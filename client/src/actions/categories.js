import * as api from '../api/index.js';
import {FETCH_ALL_CATEGORIES} from '../_constants/actionTypes';

export const getCategories=() => async (dispatch) =>
{
    try {   
        const { data } = await api.fetchCategories(); 
        dispatch({type : FETCH_ALL_CATEGORIES ,payload : data});
    } catch (error) {
         console.log(error);
    }

}
