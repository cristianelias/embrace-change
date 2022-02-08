/** @jsx jsx */
// Dependencies
import { Link } from "react-router-dom";
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

// Entities
import Price from "../../entities/Price";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  border: 1px solid hotpink;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  text-align: center;
`;

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

  const getFormattedAmounts = (amount) => {
    return new Price(amount).getFormattedPrice(currency);
  };

  const getFormattedPercentage = (percentage) => {
    return (
      <>
        <span>%</span> {percentage.toFixed(1)}
      </>
    );
  };

  return (
    <article>
      <StyledLink to={`/${id}/details`}>
        <div>
          <span>#</span>
          <span>{marketCapRank}</span>
        </div>

        <div>
          <img
            css={css`
              height: 30px;
            `}
            src={image}
            alt={`${name} logo`}
          />
          <span>{symbol.toUpperCase()}</span>
          <span>{name.toUpperCase()}</span>
        </div>

        <p>{getFormattedAmounts(currentPrice)}</p>

        <p>{getFormattedAmounts(totalVolume)}</p>

        <p>{getFormattedAmounts(marketCap)}</p>

        <p>{getFormattedPercentage(priceChange1hPercentInCurrency)}</p>

        <p>{getFormattedPercentage(priceChangePercent24hInCurrency)}</p>

        <p>{getFormattedPercentage(priceChangePercent7dInCurrency)}</p>
      </StyledLink>
    </article>
  );
};

export default CoinRow;
