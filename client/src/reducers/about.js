const aboutReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_ABOUT":
      return action.payload;

    case "CREATE_ABOUT":
      return [...state, action.payload];

    case "DELETE_ABOUT":
      return state.filter((about) => about._id !== action.payload);

    case "UPDATE_ABOUT":
      return state.map((about) =>
        about._id === action.payload._id ? action.payload : about
      );

    default:
      return state;
  }
};

export default aboutReducer;
