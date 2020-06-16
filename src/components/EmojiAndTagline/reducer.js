import * as constants from './constants';

const initialState = {
    error: null,
    loading: false,
}
function EmojiTaglineReducer(state = initialState, action) {
    switch (action.type) {
        case constants.EMOJI_TAG_LOADING:
            return {
                ...state,
                loading: true,
            }
            break;
        case constants.EMOJI_TAG_LOADED:
            return {
                ...state,
                loading: false,
            }
            break;
        case constants.EMOJI_TAG_FAILED:
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
export default EmojiTaglineReducer;