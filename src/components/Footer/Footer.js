/** @jsx jsx */
// Dependencies
import { useEffect, useState } from "react";
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

// Clients
import { getFriendlyExchanges } from "../../clients/criptoGeckoClient";

// Components
import ExchangeMediaObj from "../ExchangeMediaObj/ExchangeMediaObj";

const StyledFooter = styled.footer`
  color: white;
  background-color: rgb(59, 59, 59);
  display: flex;
  justify-content: space-between;
  padding: 50px;
  grid-row: 3/4;
  grid-column: 1/4;
`;

const Footer = () => {
  /* 👋 hi! this api call wouldn't make much sense
   in a real world scenario. I added it for demonstration purposes.
   It will only be called one time per page load 
   and I decided to exclude it from the state tree.
 */
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    getFriendlyExchanges({
      onError: (error) => console.log(error),
      onSuccess: (exchanges) => {
        setExchanges(exchanges);
      },
    });
  }, []);

  return (
    <StyledFooter>
      <div
        css={css`
          width: 30%;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            margin-bottom: 20px;
          `}
        >
          <img
            css={css`
              height: 70px;
            `}
            src="./Assets/cheems_logo-2.png"
            alt=""
          />
          <h1>Title</h1>
        </div>
        <p className="presentation-footer__paragraph">
          Complete cryptocurrency market coverage with live coin prices, charts
          and crypto market cap featuring 14328 coins on 387 exchanges.
        </p>
      </div>

      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        `}
      >
        <h1>Melicoin</h1>
        <ul
          css={css`
            grid-column: 1/2;
          `}
        >
          {exchanges.map((exchangeMeta, index) => (
            <li key={index}>
              <ExchangeMediaObj {...exchangeMeta} />
            </li>
          ))}
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;
