import { takeEvery, put, call } from 'redux-saga/effects';

import * as carsActionCreators from '../actions/actioncreators.cars';
import * as authActionCreators from '../actions/actioncreators.auth';

import { carsaction } from './../actions';
import carsApi from '../apis/cars.api';

function* handleCarsLoad() {
    try
    {
        const res = yield call(carsApi.fetchCars);
        yield put(carsActionCreators.loadcarsSuccess(res.data));
    }
    catch(ex)
    {
        yield put(carsActionCreators.loadcarsError(ex.response.data)) ;
    }
}

function* handleAuthLoad() {
    yield console.log('logging in...');
    yield put(authActionCreators.loadauthSuccess({ name: 'Arnab', role: 'user' }));
}

function* watcherCarsLoad() {
    yield takeEvery(carsaction.AUTH_LOAD, handleAuthLoad);
    yield takeEvery(carsaction.LOAD, handleCarsLoad)
}
export default watcherCarsLoad