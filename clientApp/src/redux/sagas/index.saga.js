// import { takeEvery, put } from 'redux-saga/effects';

// import { imageaction } from './../actions';
import watcherCarsLoad from './cars.saga'


// function* handleImagesLoad() {
//     console.log('In worker')
//     yield put({ type: 'Hello_Worker' });
// }

// function* watcherSaga() {
//     yield takeEvery(imageaction.LOAD, handleImagesLoad)
// }
export default watcherCarsLoad