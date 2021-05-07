import {FETCH_ALL_SERVICES} from '../_constants/actionTypes';

export default (services=[],action)=>{
  switch (action.type) {
      case FETCH_ALL_SERVICES:
          return action.payload;
      default:
          return services;
  }
}