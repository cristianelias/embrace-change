/** @jsx jsx */
// Dependencies
import { jsx, css, useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";

// Components
import Row from "../Styled/Row";
import CoinRow from "../../components/CoinRow/CoinRow";
import HideableBelowMedium from "../Styled/HideableBelowMedium";
import HideableBelowSmall from "../Styled/HideableBelowSmall";
import HideableBelowLarge from "../Styled/HideableBelowLarge";

const Cell = styled.div`
  font-weight: bold;
`;

const GridHeader = Row.withComponent("header");

const CoinList = () => {
  const theme = useTheme();
  const getState = (state) => state;
  const { coins } = useSelector(getState).coinMarket;
  const { currency } = useSelector(getState).preferences;

  return (
    <article>
      <GridHeader
        css={css`
          color: ${theme.coinList.listHeader.color};
          font-weight: 800;
          font-family: "Raleway";
          font-size: 20px;
        `}
      >
        <Cell>
          <span>#</span>
        </Cell>

        <Cell>Coin</Cell>

        <Cell
          css={css`
            display: flex;
            justify-content: flex-end;
          `}
        >
          Price
        </Cell>

        <HideableBelowMedium>Vol</HideableBelowMedium>

        <HideableBelowMedium>Market Cap</HideableBelowMedium>

        <Cell>1h</Cell>

        <HideableBelowSmall>24h</HideableBelowSmall>

        <HideableBelowLarge>1 week</HideableBelowLarge>
      </GridHeader>
      <ol>
        {coins.map((coinMeta, index) => (
          <li key={index}>
            <CoinRow {...coinMeta} currency={currency} />
          </li>
        ))}
      </ol>
    </article>
  );
};

export default CoinList;
