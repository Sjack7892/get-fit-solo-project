const nutritionReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_NUTRITION':
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
      default:
        return state;
    }
  };
  
  export default nutritionReducer;