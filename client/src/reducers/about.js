const aboutReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_ABOUT':
            return action.payload;

        case 'CREATE_ABOUT':
            return [...state, action.payload];

        case 'DELETE_ABOUT':
            return state.filter(about => about._id !== action.payload);

        default:
            return state;
    }
}

export default aboutReducer;