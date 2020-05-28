const nutritionReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_NUTRITION':
        return action.payload[0];
      default:
        return state;
    }
  };
  
  export default nutritionReducer;