import * as constants from './constants';

const initialState = {
    error: null,
    loading: false,
}
function FullPageBannerReducer(state = initialState, action) {
    switch (action.type) {
        case constants.FULL_PG_BANNER_LOADING:
            return {
                ...state,
                loading: true,
            }
            break;
        case constants.FULL_PG_BANNER_LOADED:
            return {
                ...state,
                loading: false,
            }
            break;
        case constants.FULL_PG_BANNER_FAILED:
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
export default FullPageBannerReducer;