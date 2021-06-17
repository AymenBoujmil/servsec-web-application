import * as api from '../api/index.js';
import {CREATE_SERVICEREVIEW, DELETE_SERVICEREVIEW, FETCH_ALL_SERVICEREVIEWS} from '../_constants/actionTypes';

export const getServiceReviews=(id) => async (dispatch) =>
{
    try {   
        const { data } = await api.fetchServiceReviews(id); 
        dispatch({type : FETCH_ALL_SERVICEREVIEWS ,payload : data});
    } catch (error) {
         console.log(error);
    }

}

export const createServiceReview = (formData,history) => async (dispatch) =>
{
    try {
        const { data } = await api.createServiceReview(formData);
        dispatch({ type : CREATE_SERVICEREVIEW , payload : data});
        history.push('/profile');
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({type:"ERROR",payload:error.response.data.message});
      }
    }
}

export const deleteServiceReview = (id) => async (dispatch) => {
    try {
      const {data} = await api.deleteServiceReview(id);
      dispatch({ type: DELETE_SERVICEREVIEW, payload: id });
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({type:"ERROR",payload:error.response.data.message});
      }
    }
  };

