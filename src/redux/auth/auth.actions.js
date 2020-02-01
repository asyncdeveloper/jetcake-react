import {
    AUTH_PROGRESS,
    SIGN_OUT_FAILURE,
    SIGN_OUT_SUCCESS,
    SIGNIN_FAILURE,
    SIGNIN_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS
} from "./auth.types";
import { storage } from "../../config/firebase";

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
    return async (dispatch, getState, {getFirebase, getFirestore}) => {
        dispatch(authProgress());

        const firebase = getFirebase();
        const firestore = getFirestore();
        let imageUrl = '';
        try {
            imageUrl = await uploadImage(newUser.image);

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
                    question3: newUser.question3,
                    imageUrl
                });
            }).then(() => {
                dispatch({type: SIGNUP_SUCCESS});
            }).catch((err) => {
                dispatch({ type: SIGNUP_FAILURE, message: err.message });
            });
        }catch (e) {
            dispatch({ type: SIGNUP_FAILURE, message: e.message });
        }

    }
};

async function uploadImage(file) {
    return new Promise(function(resolve, reject) {
        const storageRef = storage.ref("images");
        const uploadTask = storageRef.put(file);
        uploadTask.on('state_changed',
            function(snapshot) { },
            function error(err) {
                reject(err);
            },
            function complete() {
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    resolve(downloadURL);
                })
            }
        )
    })
}