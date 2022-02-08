/** @jsx jsx */
// Dependencies
import { jsx, css } from "@emotion/react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";

// Components
import Row from "../Row/Row";
import CoinRow from "../../components/CoinRow/CoinRow";

const Cell = styled.div`
  font-weight: bold;
`;

const GridHeader = Row.withComponent("header");

const CoinList = () => {
  const getState = (state) => state;
  const { coins } = useSelector(getState).coinMarket;
  const { currency } = useSelector(getState).preferences;

  return (
    <article>
      <GridHeader
        css={css`
          padding: 0;
        `}
      >
        <Cell>
          <span>#</span>
        </Cell>

        <Cell>Coin</Cell>

        <Cell>Price</Cell>

        <Cell>Vol</Cell>

        <Cell>Market Cap</Cell>

        <Cell>1h</Cell>

        <Cell>24h</Cell>

        <Cell>1 week</Cell>
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
