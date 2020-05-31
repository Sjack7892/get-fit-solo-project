const initialState = { 
    calorie_total: 0,
    protein_total: 0,
    carbs_total: 0,
    fat_total: 0,
    calorie_goal: 0,
    protein_goal: 0,
    carbs_goal: 0,
    fat_goal: 0,
}

const nutritionReducer = (state = initialState, action) => {
    console.log('in nutrition reducer!', action.payload, state)
    switch (action.type) {
      case 'SET_NUTRITION':
          if(action.payload < 1) {
              return state;
          } else {
            return {
                ...state,
                calorie_total: action.payload[0].calorie_total,
                protein_total: action.payload[0].protein_total,
                carbs_total: action.payload[0].carbs_total,
                fat_total: action.payload[0].fat_total,
                calorie_goal: action.payload[0].calorie_goal,
                protein_goal: action.payload[0].protein_goal,
                carbs_goal: action.payload[0].carbs_goal,
                fat_goal: action.payload[0].fat_goal,
            };
          }
     
      default:
        return state;
    }
  };
  
  export default nutritionReducer;