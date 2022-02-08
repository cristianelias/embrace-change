/** @jsx jsx */
// Dependencies
import { Link } from "react-router-dom";
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

// Entities
import Price from "../../entities/Price";
import Percentage from "../../entities/Percentage";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  display: grid;
  grid-template-columns: 30px 38% 10% 10% 10% 10% 10% 10%;
  text-align: center;
  height: 70px;
  margin-bottom: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: #ffff;
  border-radius: 5px;
  padding: 0 25px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

const Cell = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
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

  const getFormattedPrice = (amount) => {
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

  return (
    <article>
      <StyledLink to={`/${id}/details`}>
        <Cell>
          <span>#</span>
          <span>{marketCapRank}</span>
        </Cell>

        <Cell
          css={css`
            justify-content: flex-start;
          `}
        >
          <img
            css={css`
              height: 30px;
            `}
            src={image}
            alt={`${name} logo`}
          />
          <span>{symbol?.toUpperCase()}</span>
          <span>{name?.toUpperCase()}</span>
        </Cell>

        <Cell>{getFormattedPrice(currentPrice)}</Cell>

        <Cell>{getFormattedPrice(totalVolume)}</Cell>

        <Cell>{getFormattedPrice(marketCap)}</Cell>

        <Cell>{getFormattedPercentage(priceChange1hPercentInCurrency)}</Cell>

        <Cell>{getFormattedPercentage(priceChangePercent24hInCurrency)}</Cell>

        <Cell>{getFormattedPercentage(priceChangePercent7dInCurrency)}</Cell>
      </StyledLink>
    </article>
  );
};

export default CoinRow;
