import * as api from '../api/index.js';
import {CREATE_SERVICE, DELETE_SERVICE, FETCH_ALL_SERVICES, UPDATE_SERVICE} from '../_constants/actionTypes';

export const getServices=() => async (dispatch) =>
{
    try {   
        const { data } = await api.fetchServices(); 
        dispatch({type : FETCH_ALL_SERVICES ,payload : data});
    } catch (error) {
         console.log(error);
    }

}

export const createService = (formData,history) => async (dispatch) =>
{
    try {
        const { data } = await api.createService(formData);
        dispatch({ type : CREATE_SERVICE , payload : data});
        history.push('/profile');
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({type:"ERROR",payload:error.response.data.message});
      }
    }
}

export const updateService = (id,service,history) => async (dispatch) => {
    try {
      const { data } = await api.updateService(id,service);
      dispatch({ type : UPDATE_SERVICE , payload : data});
      history.push('/profile');
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({type:"ERROR",payload:error.response.data.message});
      }
    }
  };

export const deleteService = (id) => async (dispatch) => {
    try {
      const {data} = await api.deleteService(id);
      dispatch({ type: DELETE_SERVICE, payload: id });
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({type:"ERROR",payload:error.response.data.message});
      }
    }
  };

