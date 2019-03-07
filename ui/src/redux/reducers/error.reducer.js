import { carsaction } from './../actions';

const errorReducer = (state = null, action) => {
    switch (action.type) {
        case carsaction.LOAD:
            return null
        case carsaction.LOAD_SUCCESS:
            return null
        case carsaction.LOAD_FAILURE:
            return action.payload
        default:
            return state
    }
}

export default errorReducer;