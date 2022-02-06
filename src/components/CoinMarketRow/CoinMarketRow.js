// Dependencies
import { Link } from "react-router-dom";

const CoinMarketRow = (props) => {
  const {
    id,
    symbol,
    name,
    image,
    currentPrice,
    marketCapRank,
    totalVolume,
    highest24h,
    lowest24h,
    priceChangePercent24h,
    priceChangePercent7dInCurrency,
    priceChangePercent24hInCurrency,
    priceChangePercent30dInCurrency,
  } = props;

  return (
    <article>
      <Link to={`/${id}/details`}>
        <p>
          <span>#</span>
          <span>marketCapRank: {marketCapRank}</span>
        </p>

        <img src={image} alt={`${name} logo`} />

        <p>{symbol.toUpperCase()}</p>

        <p>currentPrice: {currentPrice}</p>

        {priceChangePercent24h && (
          <p>
            priceChangePercent24h: {priceChangePercent24h.toFixed(2)}
            <span>%</span>
          </p>
        )}

        <p>totalVolume: {totalVolume}</p>

        <p>highest24h: {highest24h}</p>

        <p>lowest24h: {lowest24h}</p>

        <p>priceChangePercent7dInCurrency: {priceChangePercent7dInCurrency}</p>

        <p>
          priceChangePercent24hInCurrency: {priceChangePercent24hInCurrency}
        </p>

        <p>
          priceChangePercent30dInCurrency: {priceChangePercent30dInCurrency}
        </p>
      </Link>
    </article>
  );
};

export default CoinMarketRow;
