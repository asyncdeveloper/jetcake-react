import {
    AUTH_PROGRESS,
    SIGN_OUT_FAILURE,
    SIGN_OUT_SUCCESS,
    SIGNIN_FAILURE,
    SIGNIN_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS,
    UPDATE_FAILURE,
    UPDATE_SUCCESS
} from "./auth.types";

const initState = {
    authError: null,
    isLoading: false,
    errorMessage: null,
    successMessage: null,
};

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case AUTH_PROGRESS:
            return { ...state, authError: null, isLoading: true };
        case SIGNIN_SUCCESS:
            return { ...state, authError: null, isLoading: false };
        case SIGNIN_FAILURE:
            return { ...state, authError: action.message, isLoading: false };
        case SIGN_OUT_SUCCESS:
            return { ...state, errorMessage: null };
        case SIGN_OUT_FAILURE:
            return { ...state, errorMessage: action.message };
        case SIGNUP_SUCCESS:
            return { ...state, authError: null, isLoading: false };
        case SIGNUP_FAILURE:
            return { ...state, authError: action.message, isLoading: false };
        case UPDATE_SUCCESS:
            return { ...state, authError: null, isLoading: false, successMessage: action.message };
        case UPDATE_FAILURE:
            return { ...state, authError: action.message, isLoading: false };
        default:
            return state;
    }
};

export default authReducer;