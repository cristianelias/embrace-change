const intialState = {
  updateInterval: 2000,
  loading: true,
};

const ui = (state = intialState, { type, payload }) => {
  switch (type) {
    case "SET_UPDATE_INTERVAL":
      return Object.assign({}, state, {
        updateInterval: payload,
      });

    case "SET_LOADING":
      return Object.assign({}, state, {
        loading: payload,
      });

    default:
      return state;
  }
};

export default ui;
