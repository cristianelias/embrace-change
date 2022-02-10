/** @jsx jsx */
// Dependencies
import { Link } from "react-router-dom";
import { jsx, css, useTheme } from "@emotion/react";

// Entities
import Price from "../../entities/Price";
import Percentage from "../../entities/Percentage";

// Components
import Row from "../Styled/Row";
import Cell from "../Styled/Cell";
import CoinCell from "../CoinCell/CoinCell";
import HideableBelowMedium from "../Styled/HideableBelowMedium";
import HideableBelowSmall from "../Styled/HideableBelowSmall";
import HideableBelowLarge from "../Styled/HideableBelowLarge";

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
    return "rgb(14, 203, 129)";
  }

  return "rgb(246, 70, 93);";
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
  const theme = useTheme();

  return (
    <article>
      <StyledLinkRow
        to={`/${id}/details`}
        css={css`
          background-color: ${theme.ui.container.background};
          box-shadow: ${theme.coinList.row.boxShadow};
          color: ${theme.text.primary};

          &:hover {
            box-shadow: ${theme.coinList.row.hoverBoxShadow};
            background-color: ${theme.coinList.row.hoverBackground};
          }
        `}
      >
        <Cell>
          <span
            css={css`
              font-weight: bold;
              font-family: "Raleway";
              justify-content: flex-start;

              @media (max-width: 576px) {
                font-size: 14px;
              }
            `}
          >
            {marketCapRank}
          </span>
        </Cell>

        <CoinCell symbol={symbol} name={name} image={image} />

        <Cell
          css={css`
            justify-content: flex-end;
          `}
        >
          {getFormattedPrice({ amount: currentPrice, currency })}
        </Cell>

        <HideableBelowMedium>
          {getFormattedPrice({ amount: totalVolume, currency })}
        </HideableBelowMedium>

        <HideableBelowMedium>
          {getFormattedPrice({ amount: marketCap, currency })}
        </HideableBelowMedium>

        <Cell
          css={css`
            color: ${getCoinColorStatus(priceChange1hPercentInCurrency)};
          `}
        >
          {getFormattedPercentage(priceChange1hPercentInCurrency)}
        </Cell>

        <HideableBelowSmall
          css={css`
            color: ${getCoinColorStatus(priceChangePercent24hInCurrency)};
          `}
        >
          {getFormattedPercentage(priceChangePercent24hInCurrency)}
        </HideableBelowSmall>

        <HideableBelowLarge
          css={css`
            color: ${getCoinColorStatus(priceChangePercent7dInCurrency)};
          `}
        >
          {getFormattedPercentage(priceChangePercent7dInCurrency)}
        </HideableBelowLarge>
      </StyledLinkRow>
    </article>
  );
};

export default CoinRow;
