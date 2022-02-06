// Dependencies
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Action creators
import {
  setCoins,
  setOrderBy,
  setPerPage,
  setCurrentPage,
} from "../../actionCreators/coinMarket";
import { setLoading, setUpdateInterval } from "../../actionCreators/ui";
import { setCurrency } from "../../actionCreators/preferences";

// Components
import Loading from "../../components/Loading/Loading";
import CoinMarketRow from "../../components/CoinMarketRow/CoinMarketRow";

// Clients
import { getCoinsMarketData } from "../../clients/criptoGeckoClient";

const CoinMarketPage = () => {
  const dispatch = useDispatch();
  const getState = (state) => state;

  const { coins, currentPage, orderBy, perPage } =
    useSelector(getState).coinMarket;
  const { currency } = useSelector(getState).preferences;
  const { loading, updateInterval } = useSelector(getState).ui;

  useEffect(() => {
    const fetchData = () =>
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

    dispatch(setLoading(true));
    fetchData();

    const intervalId = setInterval(() => {
      console.log(`Interval excecuted ${updateInterval}`);
      // fetchData();
    }, updateInterval);

    return () => clearInterval(intervalId);
  }, [currency, orderBy, perPage, currentPage, updateInterval, dispatch]);

  return (
    <>
      <div>
        <fieldset>
          <label htmlFor="currency">Reference currency</label>
          <select
            name="currency"
            onChange={(e) => dispatch(setCurrency(e.target.value))}
            defaultValue={currency}
          >
            <option value="USD">USD</option>
            <option value="ARS">ARS</option>
            <option value="EUR">EUR</option>
          </select>

          <label htmlFor="page">Page</label>
          <select
            name="page"
            onChange={(e) => dispatch(setCurrentPage(e.target.value))}
            defaultValue={currentPage}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>

          <label htmlFor="orderBy">Order by</label>
          <select
            name="orderBy"
            onChange={(e) => dispatch(setOrderBy(e.target.value))}
            defaultValue={orderBy}
          >
            <option value="market_cap_desc">market_cap_desc</option>
            <option value="gecko_desc">gecko_desc</option>
            <option value="gecko_asc">gecko_asc</option>
            <option value="market_cap_asc">market_cap_asc</option>
            <option value="market_cap_desc">market_cap_desc</option>
            <option value="volume_asc">volume_asc</option>
            <option value="volume_desc">volume_desc</option>
            <option value="id_asc">id_asc</option>
            <option value="id_desc">id_desc</option>
          </select>

          <label htmlFor="perPage">Results per page</label>
          <select
            name="perPage"
            onChange={(e) => dispatch(setPerPage(e.target.value))}
            defaultValue={perPage}
          >
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="150">150</option>
            <option value="200">200</option>
            <option value="250">250</option>
          </select>

          <label htmlFor="updateInterval">Update interval</label>
          <select
            name="updateInterval"
            onChange={(e) => dispatch(setUpdateInterval(e.target.value))}
            defaultValue={updateInterval}
          >
            <option value="1000">1 second</option>
            <option value="2000">2 seconds</option>
            <option value="3000">3 seconds</option>
            <option value="4000">4 seconds</option>
            <option value="5000">5 seconds</option>
          </select>
        </fieldset>
      </div>

      {loading && <Loading message="Retrieving market data..." />}
      {!loading && (
        <ol>
          {coins.map((coinMeta, index) => (
            <li key={index}>
              <CoinMarketRow {...coinMeta} />
            </li>
          ))}
        </ol>
      )}
    </>
  );
};

export default CoinMarketPage;
