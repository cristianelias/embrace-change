/** @jsx jsx */
// Dependencies
import { Link } from "react-router-dom";
import { jsx, css } from "@emotion/react";

const CoinRow = (props) => {
  const {
    id,
    symbol,
    name,
    image,
    currentPrice,
    marketCapRank,
    marketCap,
    totalVolume,
    priceChange1hPercentInCurrency,
    priceChangePercent24hInCurrency,
    priceChangePercent7dInCurrency,
  } = props;

  const getDataOrFallback = (data) => {
    return data || <span>❌</span>;
  };

  return (
    <Link to={`/${id}/details`}>
      <article
        css={css`
          border: 1px solid hotpink;
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          text-align: center;
        `}
      >
        <div
          css={css`
            grid-column: 1/2;
          `}
        >
          <span>#</span>
          <span>{getDataOrFallback(marketCapRank)}</span>
        </div>

        <div
          css={css`
            grid-column: 2/3;
          `}
        >
          <img
            css={css`
              height: 30px;
            `}
            src={image}
            alt={`${name} logo`}
          />
          <span>{getDataOrFallback(symbol.toUpperCase())}</span>
          <span>{getDataOrFallback(name.toUpperCase())}</span>
        </div>

        <p
          css={css`
            grid-column: 3/4;
          `}
        >
          {getDataOrFallback(currentPrice)}
        </p>

        <p
          css={css`
            grid-column: 4/5;
          `}
        >
          {getDataOrFallback(totalVolume)}
        </p>

        <p
          css={css`
            grid-column: 5/6;
          `}
        >
          {getDataOrFallback(marketCap)}
        </p>

        <p
          css={css`
            grid-column: 6/7;
          `}
        >
          {getDataOrFallback(priceChange1hPercentInCurrency)}
        </p>

        <p
          css={css`
            grid-column: 7/8;
          `}
        >
          {getDataOrFallback(priceChangePercent24hInCurrency)}
        </p>

        <p
          css={css`
            grid-column: 8/9;
          `}
        >
          {getDataOrFallback(priceChangePercent7dInCurrency)}
        </p>
      </article>
    </Link>
  );
};

export default CoinRow;
