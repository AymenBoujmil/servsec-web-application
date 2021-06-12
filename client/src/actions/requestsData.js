import * as api from '../api/index.js';
import {CREATE_REQUEST_DATA, DELETE_REQUEST_DATA, FETCH_ALL_REQUEST_DATA, UPDATE_REQUEST_DATA} from '../_constants/actionTypes';

export const getRqData= () => async (dispatch) =>
{
    try {   
        const { data } = await api.fetchRqData(); 
        dispatch({type : FETCH_ALL_REQUEST_DATA ,payload : data});
        console.log(data);
    } catch (error) {
         console.log(error);
    }

}

export const createRqData = (formData,history) => async (dispatch) =>
{
    try {
        const { data } = await api.createRqData(formData);
        dispatch({ type : CREATE_REQUEST_DATA , payload : data});
        history.push('/profile');
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({type:"ERROR",payload:error.response.data.message});
      }
    }
}

export const updateRqData = (id,rqData,history) => async (dispatch) => {
    try {
      const { data } = await api.updateRqData(id,rqData);
      dispatch({ type : UPDATE_REQUEST_DATA , payload : data});
      history.push('/profile');
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({type:"ERROR",payload:error.response.data.message});
      }
    }
  };

export const deleteRqData = (id) => async (dispatch) => {
    try {
      const {data} = await api.deleteRqData(id);
      dispatch({ type: DELETE_REQUEST_DATA, payload: id });
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({type:"ERROR",payload:error.response.data.message});
      }
    }
  };

