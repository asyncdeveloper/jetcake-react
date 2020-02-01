import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'

import authReducer from "./auth/auth.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    firebase: firebaseReducer,
});

export default rootReducer;
