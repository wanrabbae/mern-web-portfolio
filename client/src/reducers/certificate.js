const certificateReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_CERTIFICATES':
            return action.payload;

        case 'CREATE_CERTIFICATE':
            return [...state, action.payload];

        case 'DELETE_CERTIFICATE':
            return state.filter(certificate => certificate._id !== action.payload);

        default:
            return state;
    }
}

export default certificateReducer;