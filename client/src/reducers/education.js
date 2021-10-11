const educationReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_EDUCATIONS':
            return action.payload;

        default:
            return state;
    }
}

export default educationReducer;