import {
    AUTH_PROGRESS,
    SIGN_OUT_FAILURE,
    SIGN_OUT_SUCCESS,
    SIGNIN_FAILURE,
    SIGNIN_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS
} from "./auth.types";

export const signIn = (credentials) => {
    return (dispatch, getState , { getFirebase }) => {
        dispatch(authProgress());

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

export const authProgress = () => {
    return ({ type: AUTH_PROGRESS });
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

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch(authProgress());

        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(resp => {
            return firestore.collection('users').doc(resp.user.uid).set({
                email: newUser.email,
                address: newUser.address,
                phoneNumber: newUser.phoneNumber,
                dateOfBirth: newUser.dateOfBirth,
                question1: newUser.question1,
                question2: newUser.question2,
                question3: newUser.question3
            });
        }).then(() => {
            dispatch({ type: SIGNUP_SUCCESS });
        }).catch((err) => {
            dispatch({ type: SIGNUP_FAILURE, message: err.message });
        });
    }
};