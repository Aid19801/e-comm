import * as actions from './constants';

const initialState = {
    isLoading: false,
    error: null,
    uid: null,
}

/* eslint-disable */
const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.SIGNING_IN:
        return {
            ...state,
            isLoading: true,
        }
        break;

        case actions.SIGNED_IN:
        return {
            ...state,
            isLoading: false,
            uid: action.uid,
        }
        break;

        case actions.SIGN_IN_FAIL:
        return {
            ...state,
            isLoading: false,
            error: action.error,
        }
        break;

        default:
        return state;
    }
}

export default loginReducer;