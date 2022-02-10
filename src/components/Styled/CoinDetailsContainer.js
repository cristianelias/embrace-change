/** @jsx jsx */
// Dependencies
import styled from "@emotion/styled";

const CoinDetailsContainer = styled.article`
  background-color: ${(props) => props.theme.ui.container.background};
  font-family: "Raleway";
  border-radius: 4px;
  box-shadow: ${(props) => props.theme.ui.container.boxShadow};
  display: flex;
  flex-direction: column;
  padding: 60px 80px;
  align-items: center;
  gap: 25px;
  user-select: none;
  width: 90%;

  @media (max-width: 768px) {
    padding: 50px;
  }
`;

export default CoinDetailsContainer;
