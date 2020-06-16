import * as constants from './constants';

const initialState = {
    error: null,
    loading: false,
}
function CirclesSeparatorReducer(state = initialState, action) {
    switch (action.type) {
        case constants.CIRCLES_LOADING:
            return {
                ...state,
                loading: true,
            }
            break;
        case constants.CIRCLES_LOADED:
            return {
                ...state,
                loading: false,
            }
            break;
        case constants.CIRCLES_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
            break;

        default:
            return state;
    }
}
export default CirclesSeparatorReducer;