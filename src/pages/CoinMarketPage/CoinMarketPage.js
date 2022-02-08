/** @jsx jsx */
// Dependencies
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";

// Action creators
import { setCoins } from "../../actionCreators/coinMarket";
import { setLoading } from "../../actionCreators/ui";

// Components
import Loading from "../../components/Loading/Loading";
import CoinListFilters from "../../components/CoinListFilters/CoinListFilters";
import CoinList from "../../components/CoinList/CoinList";

// Clients
import { getCoinsMarketData } from "../../clients/criptoGeckoClient";

const ListContainer = styled.section`
  margin-top: 80px;
`;

const CoinMarketPage = () => {
  const dispatch = useDispatch();
  const getState = (state) => state;

  const { currentPage, orderBy, perPage } = useSelector(getState).coinMarket;
  const { currency } = useSelector(getState).preferences;
  const { loading, updateInterval } = useSelector(getState).ui;

  useEffect(() => {
    const fetchData = () => {
      getCoinsMarketData({
        currency,
        orderBy,
        perPage,
        currentPage,
        onError: (error) => console.log(error),
        onSuccess: (coins) => {
          dispatch(setCoins(coins));
          dispatch(setLoading(false));
        },
      });
    };

    dispatch(setLoading(true));
    fetchData();

    const intervalId = setInterval(() => {
      console.log(`Interval excecuted ${updateInterval}`);
      // fetchData();
    }, updateInterval);

    return () => clearInterval(intervalId);
  }, [currency, orderBy, perPage, currentPage, updateInterval, dispatch]);

  return (
    <ListContainer>
      <CoinListFilters />
      {loading && <Loading message="Retrieving market data..." />}
      <CoinList />
    </ListContainer>
  );
};

export default CoinMarketPage;
