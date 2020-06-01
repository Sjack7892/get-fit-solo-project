import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const date = new Date().getMonth() + 1 + "-" + new Date().getDate() + "-" +new Date().getFullYear();

function* fetchGoals(action) {
    console.log('in fetch goals!');
    try {
        const response = yield axios.get(`/api/nutrition/goals`);
        console.log('fetch goals response!', response.data);
        yield put({
            type: 'SET_GOALS',
            payload: response.data
        });

    } catch (error) {
        console.log('Error in fetchNutrition:', error);
    }
}

function* fetchTotals(action) {
    console.log('in fetch totals!', action.payload);
    try {
        // const date = action.payload
        console.log(date)
        const response = yield axios.get(`/api/nutrition/totals/${date}`);
        console.log('fetch totals response!', response.data);
        yield put({
            type: 'SET_TOTALS',
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
            type: 'FETCH_TOTALS',
            // payload: date
        })
        yield put({
            type: 'FETCH_FOOD',
            payload: date
        })
    } catch (error) {
        console.log('Error in postNutrition:', error);
    }
}

function* fetchFood(action) {
    console.log('in fetch food!', date);
    try {
        const response = yield axios.get(`/api/nutrition/food/${date}`);
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
    yield takeEvery('POST_NUTRITION', postNutrition);
    yield takeEvery('FETCH_GOALS', fetchGoals);
    yield takeEvery('FETCH_TOTALS', fetchTotals);
    yield takeEvery('FETCH_FOOD', fetchFood);
}

export default nutritionSaga;