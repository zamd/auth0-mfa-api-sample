import * as constants from '../constants';
import createReducer from '../createReducer'

const initialState = {
    enrolled: true,
    type: 'totp'
}

export default createReducer(initialState, {
    [constants.TOTP_AUTHENTICATE]: state=> ({...state,type:'mfa'})
});
