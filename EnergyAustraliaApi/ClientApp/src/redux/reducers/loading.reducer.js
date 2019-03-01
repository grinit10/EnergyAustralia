import { carsaction } from './../actions';

const initState = false

const loadingReducer = (state = initState, action) => {
    switch (action.type) {
        case carsaction.LOAD:
            return true
        case carsaction.LOAD_SUCCESS:
            return false
        case carsaction.LOAD_FAILURE:
            return false;
        default:
            return state;
    }
}

export default loadingReducer;