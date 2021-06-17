import * as api from '../api/index.js';
import {CREATE_REVIEW, FETCH_ALL_REVIEWS} from '../_constants/actionTypes';

export const getReviews=() => async (dispatch) =>
{
    try {   
        const { data } = await api.fetchReviews(); 
        dispatch({type : FETCH_ALL_REVIEWS ,payload : data});
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({type:"ERROR",payload:error.response.data.message});
      }
    }

}

export const createReview = (formData) => async (dispatch) =>
{
    try {
        const { data } = await api.createReview(formData);
        dispatch({ type : CREATE_REVIEW , payload : data});
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch({type:"ERROR",payload:error.response.data.message});
      }
    }
}