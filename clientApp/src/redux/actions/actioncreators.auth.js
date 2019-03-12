import {carsaction} from '../actions';

export const loadauth = () => ({ type: carsaction.AUTH_LOAD})
export const loadauthSuccess = response => ({ type: carsaction.AUTH_SUCCESS, payload: response })
export const loadauthError = error => ({ type: carsaction.AUTH_FAILURE, payload: error })
export const logout = () => ({ type: carsaction.LOGOUT})

