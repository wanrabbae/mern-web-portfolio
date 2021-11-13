const certificateReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_CERTIFICATES':
            return action.payload;

        case 'CREATE_CERTIFICATE':
            return [...state, action.payload];

        case 'DELETE_CERTIFICATE':
            return state.filter(certificate => certificate._id !== action.payload);
        
        case 'UPDATE_CERTIFICATE':
            return state.map(certificate => certificate._id === action.payload._id ? action.payload : certificate);

        default:
            return state;
    }
}

export default certificateReducer;