const skillReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_SKILLS':
            return action.payload;

        case 'CREATE_SKILL':
            return [...state, action.payload];

        case 'DELETE_SKILL':
            return state.filter(skill => skill._id !== action.payload);

        case 'UPDATE_SKILL':
            return state.map(skill => skill._id === action.payload._id ? action.payload : skill);

        default:
            return state;
    }
}

export default skillReducer;