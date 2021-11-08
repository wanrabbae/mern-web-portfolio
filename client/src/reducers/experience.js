const experienceReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_EXPERIENCES':
            return action.payload;

        case 'CREATE_EXPERIENCE':
            return [...state, action.payload];

        case 'DELETE_EXPERIENCE':
            return state.filter((experience) => experience._id !== action.payload);

        case 'UPDATE_EXPERIENCE':
            return state.map((exp) => exp._id === action.payload._id ? action.payload : exp);

        default:
            return state;
    }
}

export default experienceReducer;