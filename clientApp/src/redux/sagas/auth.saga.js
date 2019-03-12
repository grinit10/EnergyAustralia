import { takeEvery, put } from 'redux-saga/effects';

import * as actionCreators from '../actions/actioncreators.auth';
import { carsaction } from './../actions';

function* handleAuthLoad() {
    yield console.log('logging in...');
    yield put(actionCreators.loadauthSuccess({ name: 'Arnab', role: 'user' }));
}

function* watcherAuthLoad() {
    yield takeEvery(carsaction.AUTH_LOAD, handleAuthLoad)
}
export default watcherAuthLoad