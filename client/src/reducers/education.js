const educationReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_EDUCATIONS':
            return action.payload;

        case 'CREATE_EDUCATION':
            return [...state, action.payload];

        case 'DELETE_EDUCATION':
            return state.filter((edu) => edu._id !== action.payload);

        default:
            return state;
    }
}

export default educationReducer;