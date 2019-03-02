import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/index.reducer';
import watcherSaga from './sagas/index.saga';

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(watcherSaga);
    store.dispatch({type:'CARS_LOAD'});
    console.log(store.getState());
    return store;
}
export default configureStore;