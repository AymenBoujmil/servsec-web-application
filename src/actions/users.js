import * as api from '../api/index.js';
import {CREATE , UPDATE , FETCH_ALL , DELETE, AUTH} from '../_constants/actionTypes';

export const getUsers=() => async (dispatch) =>
{
    try {   
        const { data } = await api.fetchUsers(); 
        dispatch({type : FETCH_ALL ,payload : data});
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({type:"ERROR",payload:error.response.data.message});
      }
    }

}

export const createUser = (formData,history) => async (dispatch) =>
{
    try {
        const { data } = await api.createUser(formData);
        dispatch({ type : AUTH,data});
        dispatch({ type : CREATE , payload : data});
        history.push('/');
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({type:"ERROR",payload:error.response.data.message});
      }
    }
}

export const updateUser = (id, user) => async (dispatch) => {
    try {
      const { data } = await api.updateUser(id, user);
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({type:"ERROR",payload:error.response.data.message});
      }
    }
  };

export const deleteUser = (id) => async (dispatch) => {
    try {
      const {data} = await api.deleteUser(id);
      const user = JSON.parse(localStorage.clear('profile'));
      if (data && id === user._id) 
      {
        localStorage.clear('profile');
      }
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({type:"ERROR",payload:error.response.data.message});
      }
    }
  };