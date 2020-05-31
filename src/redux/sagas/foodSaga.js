import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const date = new Date().getMonth() + 1 + "-" + new Date().getDate() + "-" +new Date().getFullYear();

function* fetchNutrition(action) {
    console.log('in fetch nutrition!', action.payload);
    try {
        // const date = action.payload
        console.log(date)
        const response = yield axios.get(`/api/nutrition/${date}`);
        console.log('fetch nutrition response!', response.data);
        yield put({
            type: 'SET_NUTRITION',
            payload: response.data
        });

    } catch (error) {
        console.log('Error in fetchNutrition:', error);
    }
}

function* postNutrition(action) {
    console.log('in post nutrition!', action.payload);
    try {
        yield axios.post(`/api/nutrition`, action.payload);
        yield put({
            type: 'FETCH_NUTRITION',
            // payload: date
        })
    } catch (error) {
        console.log('Error in postNutrition:', error);
    }
}

function* fetchFood(action) {
    console.log('in fetch food!', date);
    try {
        const response = yield axios.get(`/api/food/${date}`);
        console.log('fetch food response!', response.data);
        yield put({
            type: 'SET_FOOD',
            payload: response.data
        });
    } catch (error) {
        console.log('Error in fetchFood:', error);
    }
}

function* nutritionSaga() {
    yield takeEvery('FETCH_FOOD', fetchFood);
}

// export default nutritionSaga;