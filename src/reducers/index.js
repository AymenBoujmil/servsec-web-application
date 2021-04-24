import { combineReducers } from 'redux';
import users from './users'
import services from './services'
export default combineReducers({ users,services });
import users from './users';
import auth  from './auth';

export default combineReducers({ users, auth });
