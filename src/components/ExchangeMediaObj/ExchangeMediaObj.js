/** @jsx jsx */
// Dependencies
import { Link } from "react-router-dom";
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const ExchangeLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: rgb(145, 145, 145);
  font-size: 16px;
  margin: 15px;
`;

const ExchangeMediaObj = ({ name, image, url, sinceYear, trustScore }) => {
  return (
    <ExchangeLink to={url} target="_blank">
      {name}
      <img
        css={css`
          width: 25px;
        `}
        src={image}
        alt={`${name} exchange logo`}
      />
      <span>Since: </span> <span>{sinceYear}</span>
      <span>Trust score: </span> <span>{trustScore}</span>
    </ExchangeLink>
  );
};

export default ExchangeMediaObj;
