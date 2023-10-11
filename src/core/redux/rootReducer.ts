import { combineReducers } from 'redux';
import { reducer as counterReducer } from './counter';
import { reducer as authReducer } from './auth'

const rootReducer = combineReducers({
    counter: counterReducer.reducer,
    auth: authReducer.reducer
});

export default rootReducer;
