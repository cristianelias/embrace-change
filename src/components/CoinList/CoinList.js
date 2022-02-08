/** @jsx jsx */
// Dependencies
import { jsx, css } from "@emotion/react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";

// Components
import CoinRow from "../../components/CoinRow/CoinRow";

const CoinList = () => {
  const getState = (state) => state;
  const { coins } = useSelector(getState).coinMarket;
  const { currency } = useSelector(getState).preferences;

  const Cell = styled.div`
    font-weight: bold;
  `;

  return (
    <article>
      <header
        css={css`
          display: grid;
          grid-template-columns: 30px 38% 10% 10% 10% 10% 10% 10%;
          text-align: center;
          padding: 20px 0;
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
      </header>
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