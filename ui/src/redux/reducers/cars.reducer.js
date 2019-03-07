import { carsaction } from '../actions';

const initState = {}

const carsReducer = (state = initState, action) => {
    switch (action.type) {
        case carsaction.LOAD:
            return { ...state }
        case carsaction.LOAD_SUCCESS:
            return { ...state, ...action.payload }
        case carsaction.LOAD_FAILURE:
            return { ...state }
        default:
            return {...state}
    }
}

export default carsReducer;