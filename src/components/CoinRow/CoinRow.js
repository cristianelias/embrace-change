/** @jsx jsx */
// Dependencies
import { Link } from "react-router-dom";
import { jsx, css } from "@emotion/react";

// Entities
import Price from "../../entities/Price";
import Percentage from "../../entities/Percentage";

// Components
import Row from "../Row/Row";
import Cell from "../Cell/Cell";

const StyledLinkRow = Row.withComponent(Link);

const getFormattedPrice = ({ amount, currency }) => {
  const { symbol, price } = new Price(amount).format(currency);

  if (price === false) {
    return <span>-</span>;
  }

  return (
    <>
      <span>{symbol}</span> {price}
    </>
  );
};

const getFormattedPercentage = (rawPercentage) => {
  const percentage = new Percentage(rawPercentage).format();

  if (percentage === false) {
    return <span>-</span>;
  }

  return (
    <>
      {percentage}
      <span>%</span>
    </>
  );
};

const getCoinColorStatus = (priceOscillation) => {
  if (priceOscillation === 0) {
    return false;
  } else if (priceOscillation > 0) {
    return "green";
  }

  return "red";
};

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
    currency,
  } = props;

  const priceCellColor = getCoinColorStatus(priceChange1hPercentInCurrency);

  return (
    <article>
      <StyledLinkRow
        to={`/${id}/details`}
        css={css`
          background-color: #ffff;
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

          &:hover {
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          }
        `}
      >
        <Cell
          contents={
            <>
              <span>#</span>
              <span>{marketCapRank}</span>
            </>
          }
        />

        <Cell
          css={css`
            justify-content: flex-start;
          `}
          contents={
            <>
              <img
                css={css`
                  height: 30px;
                `}
                src={image}
                alt={`${name} logo`}
              />
              <span>{symbol?.toUpperCase()}</span>
              <span>{name?.toUpperCase()}</span>
            </>
          }
        />

        <Cell
          color={priceCellColor}
          contents={getFormattedPrice({ amount: currentPrice, currency })}
        />

        <Cell contents={getFormattedPrice({ amount: totalVolume, currency })} />

        <Cell contents={getFormattedPrice({ amount: marketCap, currency })} />

        <Cell
          color={priceCellColor}
          contents={getFormattedPercentage(priceChange1hPercentInCurrency)}
        />
        <Cell
          color={priceCellColor}
          contents={getFormattedPercentage(priceChangePercent24hInCurrency)}
        />
        <Cell
          color={priceCellColor}
          contents={getFormattedPercentage(priceChangePercent7dInCurrency)}
        />
      </StyledLinkRow>
    </article>
  );
};

export default CoinRow;
