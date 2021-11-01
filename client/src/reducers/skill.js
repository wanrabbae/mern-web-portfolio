const skillReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_SKILLS':
            return action.payload;

        case 'CREATE_SKILL':
            return [...state, action.payload];

        case 'DELETE_SKILL':
            return state.filter(skill => skill._id !== action.payload);

        default:
            return state;
    }
}

export default skillReducer;