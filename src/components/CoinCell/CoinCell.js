/** @jsx jsx */
// Dependencies
import styled from "@emotion/styled";
import { jsx } from "@emotion/react";

// Components
import HideableBelowMedium from "../Styled/HideableBelowMedium";

const Container = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  justify-content: flex-start;
  font-family: "Raleway";
  gap: 10px;
  text-align: left;
`;

const CoinLogo = styled.img`
  height: 36px;
  width: 36px;
`;

const CoinSymbol = styled.span`
  font-family: "Raleway";
  font-weight: 800;
  font-size: 18px;
`;

const CoinName = styled(HideableBelowMedium)`
  letter-spacing: 0.4px;
  font-size: 14px;
  line-height: 16px;
  justify-content: flex-start;
`;

const CoinCell = ({ symbol, name, image }) => {
  return (
    <Container>
      <CoinLogo src={image} alt={`${name} logo`} />
      <CoinSymbol>{symbol?.toUpperCase()}</CoinSymbol>
      <CoinName>{name}</CoinName>
    </Container>
  );
};

export default CoinCell;
