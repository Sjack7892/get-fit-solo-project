import { combineReducers } from 'redux';

const workoutReducer = (state = [], action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'SET_WORKOUTS':
            return action.payload
        default:
            return state;
    }
};

export default combineReducers({
    workoutReducer,
    // totalsReducer,
});