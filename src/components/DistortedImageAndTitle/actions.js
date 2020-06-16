import * as constants from './constants';

export function distortedImageLoading() {
    return {
        type: constants.DIST_IMG_LOADING,
    }
}

export function distortedImageLoaded() {
    return {
        type: constants.DIST_IMG_LOADED,
    }
}

export function distortedImageFailed() {
    return {
        type: constants.DIST_IMG_FAILED,
    }
}

