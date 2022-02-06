// Dependencies
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import Loading from "../../components/Loading/Loading";
import CoinDetails from "../../components/CoinDetails/CoinDetails";

// Clients
import { getCoinDetails } from "../../clients/criptoGeckoClient";

const CoinDetailsPage = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState({});

  useEffect(() => {
    getCoinDetails({
      id: params.id,
      onSuccess: (coin) => {
        setCoin(coin);
        setLoading(false);
      },
      onError: (error) => console.log(error),
    });
    setLoading(false);
  }, [params.id]);

  return (
    <>
      {loading && <Loading message="Fetching coin details..." />}
      {coin && <CoinDetails {...coin} />}
    </>
  );
};

export default CoinDetailsPage;
