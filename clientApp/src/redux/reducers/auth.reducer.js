import { carsaction } from '../actions';

const initState = {}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case carsaction.AUTH_LOAD:
            return { ...state }
        case carsaction.AUTH_SUCCESS:
            return { ...state, ...action.payload }
        case carsaction.LOAD_FAILURE:
            return { ...state }
        case carsaction.LOGOUT:
            return {}
        default:
            return { ...state }
    }
}

export default authReducer;