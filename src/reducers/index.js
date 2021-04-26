import { combineReducers } from 'redux';
import users from './users'
import services from './services'
import auth  from './auth';
export default combineReducers({ users,auth,services });

