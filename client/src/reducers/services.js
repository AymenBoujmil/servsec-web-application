import {CREATE_SERVICE, DELETE_SERVICE, FETCH_ALL_SERVICES, UPDATE_SERVICE} from '../_constants/actionTypes';

export default (services=[],action)=>{
  switch (action.type) {
      case FETCH_ALL_SERVICES:
        return action.payload;
      case CREATE_SERVICE:
        return [...services,action.payload];
      case DELETE_SERVICE:
        return services.filter((service)=> service._id !== action.payload);
      case UPDATE_SERVICE:
        return services.map((service)=> service._id ===action.payload._id ? action.payload : service); 
      default:
        return services;
  }
}