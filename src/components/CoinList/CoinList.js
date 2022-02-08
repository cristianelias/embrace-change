/** @jsx jsx */
// Dependencies
import { jsx, css } from "@emotion/react"; // Dependencies
import { useSelector } from "react-redux";
import styled from "@emotion/styled"; // Dependencies

// Components
import CoinRow from "../../components/CoinRow/CoinRow";

const CoinList = () => {
  const getState = (state) => state;
  const { coins } = useSelector(getState).coinMarket;

  const Cell = styled.div`
    font-weight: bold;
  `;

  return (
    <article>
      <header
        css={css`
          border: 1px solid hotpink;
          display: grid;
          grid-template-columns: repeat(8, 1fr);
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
            <CoinRow {...coinMeta} />
          </li>
        ))}
      </ol>
    </article>
  );
};

export default CoinList;
