const aboutReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_ABOUT':
            return state;

        default:
            return state;
    }
}

export default aboutReducer;