import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'

import authReducer from "./auth/auth.reducer";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
    auth: authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});

export default rootReducer;
