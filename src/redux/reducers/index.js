import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import itemReducer from './itemReducer';
import authReducer from './auth.reducer.jsx';

export const rootReducer = combineReducers({
  // form: formReducer,
  // items: itemReducer,
  authStates: authReducer
});