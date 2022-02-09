/** @jsx jsx */
// Dependencies
import { useState } from "react";
import { Link } from "react-router-dom";
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const Cell = ({ color, contents }) => {
  const Container = styled.span`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
  `;

  const cellStylesPerColor = {
    red: css`
      color: red;
    `,
    green: css`
      color: green;
    `,
  };

  return <Container css={cellStylesPerColor[color]}>{contents}</Container>;
};

export default Cell;
