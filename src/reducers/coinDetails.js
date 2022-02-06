const intialState = {
  coin: null,
};

const coinDetails = (state = intialState, { type, payload }) => {
  switch (type) {
    case "SET_COIN":
      return Object.assign({}, state, {
        coin: payload,
      });

    default:
      return state;
  }
};

export default coinDetails;
