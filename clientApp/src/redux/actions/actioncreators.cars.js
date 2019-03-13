import {carsaction} from '../actions';

export const loadcars = () => ({},{ type: carsaction.LOAD})
export const loadcarsSuccess = response => ({ type: carsaction.LOAD_SUCCESS, payload: response })
export const loadcarsError = error => ({ type: carsaction.LOAD_FAILURE, payload: error })
