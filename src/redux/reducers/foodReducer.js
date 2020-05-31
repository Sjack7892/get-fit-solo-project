
const foodReducer = (state = [], action) => {
    console.log('in food reducer!', action.payload)
    switch (action.type) {
        case 'SET_FOOD':
            return action.payload
        default:
            return state;
    }
};

export default foodReducer;