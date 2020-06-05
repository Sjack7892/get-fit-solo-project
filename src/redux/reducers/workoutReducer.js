import { combineReducers } from 'redux';

const workoutReducer = (state = [], action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'SET_WORKOUTS':
            return action.payload
        // case 'SET_WORKOUT':
        //     return action.payload
        default:
            return state;
    }
};

const currentWorkoutReducer = (state = [], action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'SET_WORKOUT':
            return action.payload
        default:
            return state;
    }
};

const previousWorkoutReducer = (state = [], action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'SET_PREVIOUS':
            if (action.payload == null) {
                return {reps: 0, weight: 0};
            } else {
                return action.payload
            }
        default:
            return state;
    }
};

export default combineReducers({
    workoutReducer,
    currentWorkoutReducer,
    previousWorkoutReducer
});