import {CREATE_REQUEST_DATA, DELETE_REQUEST_DATA, FETCH_ALL_REQUEST_DATA, UPDATE_REQUEST_DATA} from '../_constants/actionTypes';

export default (rqdatas=[],action)=>{
  switch (action.type) {
      case FETCH_ALL_REQUEST_DATA:
        return action.payload;
      case CREATE_REQUEST_DATA:
        return [...rqdatas,action.payload];
      case DELETE_REQUEST_DATA:
        return rqdatas.filter((rqdata)=> rqdata._id !== action.payload);
      case UPDATE_REQUEST_DATA:
        return rqdatas.map((rqdata)=> rqdata._id ===action.payload._id ? action.payload : rqdata); 
      default:
        return rqdatas;
  }
}