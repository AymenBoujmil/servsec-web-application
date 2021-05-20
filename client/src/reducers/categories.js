import {FETCH_ALL_CATEGORIES} from '../_constants/actionTypes';

export default (categories=[],action)=>{
  switch (action.type) {
      case FETCH_ALL_CATEGORIES:
        return action.payload;
      default:
        return categories;
  }
}