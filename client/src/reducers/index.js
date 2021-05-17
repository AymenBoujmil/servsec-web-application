import { combineReducers } from 'redux';
import users from './users';
import services from './services';
import auth  from './auth';
import message from './message';
import rqdatas from './rqdatas';

export default combineReducers({ users,auth,services,message,rqdatas});

