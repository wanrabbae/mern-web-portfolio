const experienceReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_EXPERIENCES':
            return action.payload;

        case 'CREATE_EXPERIENCE':
            return [...state, action.payload];

        case 'DELETE_EXPERIENCE':
            return state.filter((experience) => experience._id !== action.payload);

        default:
            return state;
    }
}

export default experienceReducer;