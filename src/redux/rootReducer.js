import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import operatorReducer from './slices/operatorSlice';

const rootReducer = combineReducers({
  operator: operatorReducer,
  auth: authReducer,
});

export default rootReducer;
