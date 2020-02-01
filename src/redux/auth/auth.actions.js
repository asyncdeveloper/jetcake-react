import { SIGN_OUT_FAILURE, SIGN_OUT_SUCCESS, SIGNIN_FAILURE, SIGNIN_IN_PROGRESS, SIGNIN_SUCCESS } from "./auth.types";

export const signIn = (credentials) => {
    return (dispatch, getState , { getFirebase }) => {
        dispatch(signInRequest());

        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: SIGNIN_SUCCESS });
        }).catch((err) => {
            dispatch({ type: SIGNIN_FAILURE, message: err.message });
        });
    }
};

export const signInRequest = () => {
    return ({ type: SIGNIN_IN_PROGRESS });
};

export const signOut = () => {
    return (dispatch, getState , { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: SIGN_OUT_SUCCESS })
        }).catch(err => {
            dispatch({ type: SIGN_OUT_FAILURE, message: err.message });
        });
    }
};