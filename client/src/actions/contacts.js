import * as api from '../api/index.js';
import {CREATE_CONTACT} from '../_constants/actionTypes';

export const createContact = (formData) => async (dispatch) =>
{
    try {
        const { data } = await api.createContact(formData);
       // dispatch({ type : AUTH,data});
        dispatch({ type : CREATE_CONTACT , payload : data});
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({type:"ERROR",payload:error.response.data.message});
      }
    }
}