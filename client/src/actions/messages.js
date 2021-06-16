import * as api from '../api/index.js';
import {CREATE_MESSAGE, DELETE_MESSAGE, FETCH_ALL_MESSAGES,FETCH_ALL_MESSAGES_BY_SENDER,FETCH_ALL_MESSAGES_BY_RECEIVER, UPDATE_MESSAGE,COUNT_ALL_RECEIVED_MESSAGES} from '../_constants/actionTypes';

export const getMessages=() => async (dispatch) =>
{
    try {   
        const { data } = await api.fetchMessages(); 
        dispatch({type : FETCH_ALL_MESSAGES ,payload : data});
    } catch (error) {
         console.log(error);
    }

}

export const getMessagesBySender=() => async (dispatch) =>
{
    try {   
        const { data } = await api.fetchMessagesBySender(); 
        dispatch({type : FETCH_ALL_MESSAGES_BY_SENDER ,payload : data});
    } catch (error) {
         console.log(error);
    }

}

export const getMessagesByReceiver=() => async (dispatch) =>
{
    try {   
        const { data } = await api.fetchMessagesByReceiver(); 
        dispatch({type : FETCH_ALL_MESSAGES_BY_RECEIVER ,payload : data});
    } catch (error) {
         console.log(error);
    }

}

export const countMessages=() => async (dispatch) =>
{
    try {   
        const { data } = await api.countMessagesById(); 
        dispatch({type : COUNT_ALL_RECEIVED_MESSAGES ,payload : data});
    } catch (error) {
         console.log(error);
    }

}



export const createMessage = (formData,history) => async (dispatch) =>
{
    try {
        const { data } = await api.createRequest(formData);
        dispatch({ type : CREATE_MESSAGE , payload : data});
        history.push('/profile');
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({type:"ERROR",payload:error.response.data.message});
      }
    }
}

export const updateMessage = (id) => async (dispatch) => {
    try {
      const { data } = await api.updateMessage(id);
      dispatch({ type : UPDATE_MESSAGE , payload : data});
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({type:"ERROR",payload:error.response.data.message});
      }
    }
  };


export const deleteMessage = (id) => async (dispatch) => {
    try {
      const {data} = await api.deleteMessage(id);
      dispatch({ type: DELETE_MESSAGE, payload: id });
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({type:"ERROR",payload:error.response.data.message});
      }
    }
  };

