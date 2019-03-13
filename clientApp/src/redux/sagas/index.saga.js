import { all, fork } from 'redux-saga/effects';
import watcherCarsSaga from './cars.saga'
import watcherAuthSaga from './auth.saga'

export default function* rootSaga() {
    yield all([
        fork(watcherCarsSaga),
        fork(watcherAuthSaga)
    ])
}