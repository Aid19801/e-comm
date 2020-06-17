import * as constants from './constants';

export function fullPageBannerLoading() {
    return {
        type: constants.FULL_PG_BANNER_LOADING,
    }
}

export function fullPageBannerLoaded() {
    return {
        type: constants.FULL_PG_BANNER_LOADED,
    }
}


export function fullPageBannerFailed() {
    return {
        type: constants.FULL_PG_BANNER_FAILED,
    }
}

