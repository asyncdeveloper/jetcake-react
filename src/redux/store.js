import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import { getFirebase, reactReduxFirebase } from "react-redux-firebase";

import fbConfig from "../config/firebase";

import rootReducer from './rootReducer'

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase })),
        reactReduxFirebase(fbConfig, { userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true })
    )
);

export default store;