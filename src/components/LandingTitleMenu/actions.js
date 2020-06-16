import * as constants from './constants';

export function landingMenuLoading() {
    return {
        type: constants.LANDING_MENU_LOADING,
    }
}

export function landingMenuLoaded() {
    return {
        type: constants.LANDING_MENU_LOADED,
    }
}


export function landingMenuFailed() {
    return {
        type: constants.LANDING_MENU_FAILED,
    }
}

