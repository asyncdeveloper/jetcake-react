import { SIGNIN_FAILURE, SIGNIN_IN_PROGRESS, SIGNIN_SUCCESS } from "./auth.types";

const initState = {
    authError: null,
    isLoading: false
};

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case SIGNIN_IN_PROGRESS:
            return { ...state, authError: null, isLoading: true };
        case SIGNIN_SUCCESS:
            return { ...state,  authError: null, isLoading: false };
        case SIGNIN_FAILURE:
            return { ...state,  authError: action.message, isLoading: false };
        default:
            return state;
    }
};

export default authReducer;