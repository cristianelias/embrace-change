const setCoins = (payload) => ({
  type: "SET_COINS",
  payload,
});

const setOrderBy = (payload) => ({
  type: "SET_ORDER_BY",
  payload,
});

const setPerPage = (payload) => ({
  type: "SET_PER_PAGE",
  payload,
});

const setCurrentPage = (payload) => ({
  type: "SET_CURRENT_PAGE",
  payload,
});

export { setCoins, setOrderBy, setPerPage, setCurrentPage };
