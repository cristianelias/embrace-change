const intialState = {
  coins: [],
  orderBy: "market_cap_desc",
  perPage: 50,
  currentPage: 1,
};

const coinMarket = (state = intialState, { type, payload }) => {
  switch (type) {
    case "SET_COINS":
      return Object.assign({}, state, {
        coins: payload,
      });

    case "SET_ORDER_BY":
      return Object.assign({}, state, {
        orderBy: payload,
      });

    case "SET_PER_PAGE":
      return Object.assign({}, state, {
        perPage: payload,
      });

    case "SET_CURRENT_PAGE":
      return Object.assign({}, state, {
        currentPage: payload,
      });

    default:
      return state;
  }
};

export default coinMarket;
