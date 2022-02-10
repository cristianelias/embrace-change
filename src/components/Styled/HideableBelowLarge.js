/** @jsx jsx */
// Dependencies
import styled from "@emotion/styled";

// Components
import Cell from "./Cell";

const HideableBelowLarge = styled(Cell)`
  @media (max-width: 992px) {
    display: none;
  }
`;

export default HideableBelowLarge;
