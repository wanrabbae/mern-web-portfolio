const certificateReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_CERTIFICATES':
            return action.payload;

        default:
            return state;
    }
}

export default certificateReducer;