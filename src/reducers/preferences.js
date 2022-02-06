const intialState = {
  currency: "USD",
};

const preferences = (state = intialState, { type, payload }) => {
  switch (type) {
    case "SET_CURRENCY":
      return Object.assign({}, state, {
        currency: payload,
      });

    default:
      return state;
  }
};

export default preferences;
