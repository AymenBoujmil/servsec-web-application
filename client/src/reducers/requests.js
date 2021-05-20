import {CREATE_REQUEST, DELETE_REQUEST, FETCH_ALL_REQUESTS, UPDATE_REQUEST} from '../_constants/actionTypes';

export default (requests=[],action)=>{
  switch (action.type) {
      case FETCH_ALL_REQUESTS:
        return action.payload;
      case CREATE_REQUEST:
        return [...requests,action.payload];
      case DELETE_REQUEST:
        return requests.filter((request)=> request._id !== action.payload);
      case UPDATE_REQUEST:
        return requests.map((request)=> request._id ===action.payload._id ? action.payload : request); 
      default:
        return requests;
  }
}