const experienceReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_EXPERIENCES':
            return action.payload;

        default:
            return state;
    }
}

export default experienceReducer;