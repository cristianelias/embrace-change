// Dependencies
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
      onError: (error) => {
        console.log(
          `Something went really wrong, take a look. Error: ${error}`
        );
        navigate({ path: "/" });
      },
    });
  }, [params.id, dispatch, navigate]);

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
