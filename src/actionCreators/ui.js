const setLoading = (payload) => ({
  type: "SET_LOADING",
  payload,
});

const setUpdateInterval = (payload) => ({
  type: "SET_UPDATE_INTERVAL",
  payload,
});

export { setLoading, setUpdateInterval };
