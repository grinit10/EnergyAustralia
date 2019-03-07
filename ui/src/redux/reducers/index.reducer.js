import {combineReducers} from 'redux';
import errorReducer from './error.reducer';
import carsReducer from './cars.reducer';
import loadingReducer from './loading.reducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    error: errorReducer,
    cars: carsReducer,
})

export default rootReducer;