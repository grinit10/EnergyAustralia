import { carsaction } from '../actions';

const initState = {}

const carsReducer = (state = initState, action) => {
    switch (action.type) {
        case carsaction.LOAD:
            return { ...state }
        case carsaction.LOAD_SUCCESS:
            return { ...state, ...action.payload }
        default:
            return { ...state.images }
    }
}

export default carsReducer;