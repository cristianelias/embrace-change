/** @jsx jsx */
// Dependencies
import { Link } from "react-router-dom";
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

// Components
import CoinDetailsContainer from "../../components/Styled/CoinDetailsContainer";
import PrimaryButton from "../../components/Styled/PrimaryButton";

// Assets
import notFoundImage from "../../assets/images/404.png";

const StyledImage = styled.img`
  height: 220px;
`;

const NotFoundMessage = styled.h1`
  font-family: "Raleway";
  font-weight: 800;
  font-size: 42px;
  padding: 20px;
  background-color: white;
  text-align: center;
`;

const NotFound = () => {
  return (
    <CoinDetailsContainer
      ccs={css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <StyledImage src={notFoundImage} alt={"Page not found image"} />
      <NotFoundMessage>Oh no! Wrong URL, friend</NotFoundMessage>
      <Link to={`/`}>
        <PrimaryButton>Go home</PrimaryButton>
      </Link>
    </CoinDetailsContainer>
  );
};

export default NotFound;
