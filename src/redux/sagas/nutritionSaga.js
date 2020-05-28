import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchNutrition(action) {
    console.log('in fetch nutrition!');
  try {
    const response = yield axios.get('/api/nutrition');
    console.log(response.data);
    yield put({ 
        type: 'SET_NUTRITION',
        payload: response.data 
    });

  } catch (error) {
    console.log('Error in fetchNutrition:', error);
}
}

function* nutritionSaga() {
  yield takeEvery('FETCH_NUTRITION', fetchNutrition);
}

export default nutritionSaga;