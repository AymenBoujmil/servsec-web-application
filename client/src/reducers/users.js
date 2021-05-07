import {CREATE , UPDATE , FETCH_ALL , DELETE} from '../_constants/actionTypes';

export default (users=[],action)=>{
  switch (action.type) {
      case DELETE:
          return users.filter((user)=> user._id !== action.payload);
      case FETCH_ALL:
          return action.payload;
      case UPDATE:
          return users.map((user)=> user._id ===action.payload._id ? action.payload : user); 
      case CREATE:
          return [...users,action.payload] ;
      default:
          return users;
  }
}