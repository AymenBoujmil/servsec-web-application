import * as api from '../api/index.js';
import {CREATE_REQUEST, DELETE_REQUEST, FETCH_ALL_REQUESTS, UPDATE_REQUEST} from '../_constants/actionTypes';

export const getRequests=() => async (dispatch) =>
{
    try {   
        const { data } = await api.fetchRequests(); 
        dispatch({type : FETCH_ALL_REQUESTS ,payload : data});
    } catch (error) {
         console.log(error);
    }

}

export const createRequest = (formData,history) => async (dispatch) =>
{
    try {
        const { data } = await api.createRequest(formData);
        dispatch({ type : CREATE_REQUEST , payload : data});
        history.push('/profile');
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({type:"ERROR",payload:error.response.data.message});
      }
    }
}

export const updateRequest = (id,request,history) => async (dispatch) => {
    try {
      const { data } = await api.updateRequest(id,request);
      dispatch({ type : UPDATE_REQUEST , payload : data});
      history.push('/profile');
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({type:"ERROR",payload:error.response.data.message});
      }
    }
  };

  export const manageRequest = (id,request) => async (dispatch) => {
    try {
      const { data } = await api.updateRequest(id,request);
      dispatch({ type : UPDATE_REQUEST , payload : data});
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({type:"ERROR",payload:error.response.data.message});
      }
    }
  };

export const deleteRequest = (id) => async (dispatch) => {
    try {
      const {data} = await api.deleteRequest(id);
      dispatch({ type: DELETE_REQUEST, payload: id });
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({type:"ERROR",payload:error.response.data.message});
      }
    }
  };

