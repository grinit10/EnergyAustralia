import { takeEvery, put, call } from 'redux-saga/effects';

import * as actionCreators from '../actions/actioncreators.cars';
import { carsaction } from './../actions';
import carsApi from '../apis/cars.api';

function* handleCarsLoad() {
    try
    {
        const res = yield call(carsApi.fetchCars);
        yield put(actionCreators.loadcarsSuccess(res.data));
    }
    catch(ex)
    {
        yield put(actionCreators.loadcarsError(ex.response.data)) ;
    }
}

function* watcherCarsLoad() {
    yield takeEvery(carsaction.LOAD, handleCarsLoad)
}
export default watcherCarsLoad