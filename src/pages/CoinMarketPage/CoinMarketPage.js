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
import CoinListFilters from "../../components/CoinListFilters/CoinListFilters";
import CoinList from "../../components/CoinList/CoinList";

// Clients
import { getCoinsMarketData } from "../../clients/criptoGeckoClient";

const Container = styled.section`
  width: 100%;
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
      fetchData();
    }, updateInterval);

    return () => clearInterval(intervalId);
  }, [currency, orderBy, perPage, currentPage, updateInterval, dispatch]);

  return (
    <Container>
      <CoinListFilters />
      <CoinList />
    </Container>
  );
};

export default CoinMarketPage;
