import * as constants from './constants';

export function emojiAndTaglineLoading() {
    return {
        type: constants.EMOJI_TAG_LOADING,
    }
}

export function emojiAndTaglineLoaded() {
    return {
        type: constants.EMOJI_TAG_LOADED,
    }
}

export function emojiAndTaglineFailed() {
    return {
        type: constants.EMOJI_TAG_FAILED,
    }
}

