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
        // response.data.suggestions.map((result) => {
        //     workouts.push(result.value);
        //     return;
        // })
        console.log('WORKOUTS ARRAY', workouts)
        yield put({
            type: 'SET_WORKOUTS',
            payload: response.data.suggestions
        });

    } catch (error) {
        console.log('Error in fetchWorkouts:', error);
    }
}

function* workoutSaga() {
    yield takeEvery('FETCH_WORKOUTS', fetchWorkouts);
}

export default workoutSaga;