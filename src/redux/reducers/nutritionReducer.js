import { combineReducers } from 'redux';

// const initialState = {
//     calorie_total: 0,
//     protein_total: 0,
//     carbs_total: 0,
//     fat_total: 0,
//     calorie_goal: 0,
//     protein_goal: 0,
//     carbs_goal: 0,
//     fat_goal: 0,
// }
const foodReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FOOD':
            return action.payload
        default:
            return state;
    }
};


const goalsReducer = (state = {}, action) => {
    console.log('in goals reducer!', action.payload)
    switch (action.type) {
        case 'SET_GOALS':
            // if (action.payload.length === 0) {
            //     return {
            //         calorie_total: 0,
            //         protein_total: 0,
            //         carbs_total: 0,
            //         fat_total: 0,
            //         calorie_goal: action.payload[0].calorie_goal,
            //         protein_goal: action.payload[0].protein_goal,
            //         carbs_goal: action.payload[0].carbs_goal,
            //         fat_goal: action.payload[0].fat_goal,
            //     };
            // } else {
            return {
                // calorie_total: action.payload[0].calorie_total,
                // protein_total: action.payload[0].protein_total,
                // carbs_total: action.payload[0].carbs_total,
                // fat_total: action.payload[0].fat_total,
                calorieGoal: action.payload[0].calorie_goal,
                proteinGoal: action.payload[0].protein_goal,
                carbsGoal: action.payload[0].carbs_goal,
                fatGoal: action.payload[0].fat_goal,
            };
        // }
        default:
            return state;
    }
};

const totalsReducer = (state = {}, action) => {
    console.log('in totals reducer!', action.payload)
    switch (action.type) {
        case 'SET_TOTALS':
            if (action.payload[0].calorie_total == null) {
                return {
                    calorieTotal: 0,
                    proteinTotal: 0,
                    carbsTotal: 0,
                    fatTotal: 0,
                };
            } else {
                return {
                    calorieTotal: action.payload[0].calorie_total,
                    proteinTotal: action.payload[0].protein_total,
                    carbsTotal: action.payload[0].carbs_total,
                    fatTotal: action.payload[0].fat_total,
                    // calorieGoal: action.payload[0].calorie_goal,
                    // proteinGoal: action.payload[0].protein_goal,
                    // carbsGoal: action.payload[0].carbs_goal,
                    // fatGoal: action.payload[0].fat_goal,
                };
            }
        default:
            return state;
    }
};

export default combineReducers({
    goalsReducer,
    totalsReducer,
    foodReducer,
});