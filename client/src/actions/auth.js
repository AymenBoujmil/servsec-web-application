import * as api from '../api/index.js';
import { AUTH, ERROR, SUCCESS } from '../_constants/actionTypes';

export const signin = (formData,history) => async (dispatch) =>
{
    try 
    {
        const {data} = await api.signin(formData);
        dispatch({type:AUTH,data});
        history.push('/');
    } catch (error) {
        if (error.response && error.response.data) {
            dispatch({type:ERROR,payload:error.response.data.message});
          }
    }
    
}

export const forgotPassword = (email) => async (dispatch) =>
{
    try 
    {
        const res = await api.forgotPassword(email);
        console.log(res.data.message);
        dispatch({type:SUCCESS, payload : res.data.message });
    } catch (error) {
        if (error.response && error.response.data) {
            dispatch({type:ERROR,payload:error.response.data.message});
          }
    }
    
}

export const resetPassword = (formData,history,token) => async (dispatch) =>
{
    try 
    {
        const res = await api.resetPassword(formData,token);
        history.push('/login');
    } catch (error) {
        if (error.response && error.response.data) {
            dispatch({type:ERROR,payload:error.response.data.message});
          }
    }
    
}
