import * as constants from './constants';

const initialState = {
    error: null,
    loading: false,
}
function LandingTitleMenuReducer(state = initialState, action) {
    switch (action.type) {
        case constants.LANDING_MENU_LOADING:
            return {
                ...state,
                loading: true,
            }
            break;
        case constants.LANDING_MENU_LOADED:
            return {
                ...state,
                loading: false,
            }
            break;
        case constants.LANDING_MENU_FAILED:
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
export default LandingTitleMenuReducer;