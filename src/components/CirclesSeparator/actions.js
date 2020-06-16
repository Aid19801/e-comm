import * as constants from './constants';

export function circlesSeparatorLoading() {
    return {
        type: constants.CIRCLES_LOADING,
    }
}

export function circlesSeparatorLoaded() {
    return {
        type: constants.CIRCLES_LOADED,
    }
}


export function circlesSeparatorFailed() {
    return {
        type: constants.CIRCLES_FAILED,
    }
}

