import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// const date = new Date().getMonth() + 1 + "-" + new Date().getDate() + "-" +new Date().getFullYear();

function* fetchWorkouts(action) {
    console.log('in fetch workouts!');
    let search = action.payload;
    let workouts = [];
    try {
        const response = yield axios.get(`/api/workout/${search}`);
        console.log(response.data.suggestions);
        console.log('WORKOUTS ARRAY', workouts)
        yield put({
            type: 'SET_WORKOUTS',
            payload: response.data.suggestions
        });

    } catch (error) {
        console.log('Error in fetchWorkouts:', error);
    }
}

function* fetchWorkout(action) {
    console.log('in fetch workout!');
    const date = action.payload
    try {
        const response = yield axios.get(`/api/workout/current/${date}`);
        console.log(response.data);
        yield put({
            type: 'SET_WORKOUT',
            payload: response.data
        });

    } catch (error) {
        console.log('Error in fetchWorkout:', error);
    }
}

function* postWorkouts(action) {
    console.log('in post workouts!');
    try {
        yield axios.post(`/api/workout`, action.payload);
    } catch (error) {
        console.log('Error in postWorkouts:', error);
    }
}

function* workoutSaga() {
    yield takeEvery('FETCH_WORKOUTS', fetchWorkouts);
    yield takeEvery('FETCH_WORKOUT', fetchWorkout);
    yield takeEvery('POST_WORKOUT', postWorkouts);
}

export default workoutSaga;