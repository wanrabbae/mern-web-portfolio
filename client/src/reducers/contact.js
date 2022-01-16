const contactReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      return action.payload;

    case "CREATE_CONTACT":
      return [...state, action.payload];

    case "DELETE_CONTACT":
      return state.filter((edu) => edu._id !== action.payload);

    default:
      return state;
  }
};

export default contactReducer;
