/** @jsx jsx */
// Dependencies
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

// Assets
import logo from "../../assets/images/cheems-logo.png";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const CompanyName = styled.span`
  font-family: "IBM Plex Sans";
  font-weight: bold;
  font-size: 24px;
  letter-spacing: -0.2px;
`;

const Logo = () => (
  <StyledLink to={`/`}>
    <img src={logo} alt="Coin Market logo" />
    <CompanyName>Coin Market</CompanyName>
  </StyledLink>
);

export default Logo;
