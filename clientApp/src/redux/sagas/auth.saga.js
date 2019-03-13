import { takeEvery, put } from 'redux-saga/effects';

import * as actionCreators from '../actions/actioncreators.auth';
import { carsaction } from './../actions';

function* handleAuthLoad() {
    const username = localStorage.getItem('loggedinuser');
    const userrole = localStorage.getItem('loggedinrole');
    if (username !== undefined && userrole !== undefined) {
        yield put(actionCreators.loadauthSuccess({ name: username, role: userrole }));
    } else {
        yield put(actionCreators.loadauthError());
    }
}

function* handleLogin() {
    localStorage.setItem('loggedinuser', 'Arnab');
    localStorage.setItem('loggedinrole', 'user');
    yield put(actionCreators.loadauth());
}

function* handleLogout() {
    localStorage.removeItem('loggedinuser');
    localStorage.removeItem('loggedinrole');
    yield actionCreators.loadauth();
}

function* watcherAuthLoad() {
    yield takeEvery(carsaction.AUTH_LOAD, handleAuthLoad);
    yield takeEvery(carsaction.LOGIN, handleLogin);
    yield takeEvery(carsaction.LOGOUT, handleLogout);
}
export default watcherAuthLoad