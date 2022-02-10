// Dependencies
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Components
import CoinDetails from "../../components/CoinDetails/CoinDetails";

// Action creators
import { setCoin } from "../../actionCreators/coinDetails";
import { setLoading } from "../../actionCreators/ui";

// Clients
import { getCoinDetails } from "../../clients/criptoGeckoClient";
import CoinDetailsSkeleton from "../../components/CoinDetails/CoinDetailsSkeleton";

const CoinDetailsPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const getState = (state) => state;

  const { coin } = useSelector(getState).coinDetails;
  const { loading } = useSelector(getState).ui;

  useEffect(() => {
    dispatch(setLoading(true));

    getCoinDetails({
      id: params.id,
      onSuccess: (coin) => {
        dispatch(setCoin(coin));
        dispatch(setLoading(false));
      },
      onError: (error) => console.log(error),
    });
  }, [params.id, dispatch]);

  return (
    <>
      {loading && <CoinDetailsSkeleton />}
      {!loading && coin && (
        <>
          <CoinDetails {...coin} />
        </>
      )}
    </>
  );
};

export default CoinDetailsPage;
