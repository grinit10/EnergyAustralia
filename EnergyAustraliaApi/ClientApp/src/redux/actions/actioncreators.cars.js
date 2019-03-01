import {carsaction} from '../actions';

export const loadimages = () => ({ type: carsaction.LOAD})
export const loadimagesSuccess = response => ({ type: carsaction.LOAD_SUCCESS, payload: response })
export const loadimagesError = error => ({ type: carsaction.LOAD_FAILURE, payload: error })
