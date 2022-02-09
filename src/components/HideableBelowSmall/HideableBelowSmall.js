/** @jsx jsx */
// Dependencies
import styled from "@emotion/styled";

// Components
import Cell from "../Cell/Cell";

const HideableBelowSmall = styled(Cell)`
  @media (max-width: 440px) {
    display: none;
  }
`;

export default HideableBelowSmall;
