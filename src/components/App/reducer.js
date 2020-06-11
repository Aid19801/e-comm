import * as actions from './constants';

const initialState = {
    isLoading: false,
    error: null,
    isMob: true,
}

/* eslint-disable */
const appStateReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.APP_LOADING:
        return {
            ...state,
            isLoading: true,
        }
        break;

        case actions.APP_LOADED:
        return {
            ...state,
            isLoading: false,
        }
        break;

        case actions.APP_FAILED:
        return {
            ...state,
            isLoading: false,
            error: action.error,
        }
        break;

        case actions.IS_MOBILE:
        return {
            ...state,
            isMob: action.payload,
        }
        break;

        default:
        return state;
    }
}

export default appStateReducer;