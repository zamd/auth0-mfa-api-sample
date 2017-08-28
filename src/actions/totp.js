import * as constants from '../constants';

export const authenticate = user_id => {
    return dispatch => {
        dispatch({type: constants.TOTP_AUTHENTICATE});
    }
}