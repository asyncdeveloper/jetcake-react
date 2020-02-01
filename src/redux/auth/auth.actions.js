import { SIGNIN_FAILURE, SIGNIN_IN_PROGRESS, SIGNIN_SUCCESS } from "./auth.types";

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