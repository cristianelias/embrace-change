/** @jsx jsx */
// Dependencies
import styled from "@emotion/styled";

// Components
import Cell from "../Cell/Cell";

const HideableBelowMedium = styled(Cell)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export default HideableBelowMedium;
