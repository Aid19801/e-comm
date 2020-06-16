import * as constants from './constants';

const initialState = {
    error: null,
    loading: false,
}
function DistortedImageReducer(state = initialState, action) {
    switch (action.type) {
        case constants.DIST_IMG_LOADING:
            return {
                ...state,
                loading: true,
            }
            break;
        case constants.DIST_IMG_LOADED:
            return {
                ...state,
                loading: false,
            }
            break;
        case constants.DIST_IMG_FAILED:
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
export default DistortedImageReducer;