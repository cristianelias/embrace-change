/** @jsx jsx */
// Dependencies
import { useEffect, useState } from "react";
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";

// Clients
import { getFriendlyExchanges } from "../../clients/criptoGeckoClient";

// Components
import ExchangeMediaObj from "../ExchangeMediaObj/ExchangeMediaObj";
import Logo from "../Logo/Logo";

const StyledFooter = styled.footer`
  color: white;
  background-color: rgb(37 34 34);

  padding: 35px 50px;
  grid-row: 3/4;
  grid-column: 1/4;
  z-index: 3;
`;

const Title = styled.h3`
  font-size: 15px;
  width: 40%;
  text-align: right;
`;

const LogoWrapper = styled.div`
  img {
    height: 60px;
    width: 60px;
  }

  img + span {
    display: none;
  }
`;

const MainRow = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 35px;
`;

const SiteDescription = styled.p`
  font-size: 20px;
`;

const StrongText = styled.strong`
  font-weight: 800;
  font-family: "Raleway";
`;

const ListOfLinks = styled.ol`
  gap: 50px;
  margin-top: 50px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const IdentityContainer = styled.div`
  width: 60%;
  display: flex;
  gap: 10px;
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
      <MainRow>
        <IdentityContainer>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <SiteDescription>
            Complete <StrongText>cryptocurrency market</StrongText> coverage
            with
            <StrongText>live coin prices</StrongText> and crypto market cap
            featuring 14328 coins on 387 exchanges.
          </SiteDescription>
        </IdentityContainer>
        <Title>
          <a
            href="https://github.com/cristianelias"
            rel="noreferrer"
            target="_blank"
          >
            Made with 🤍 by Cris
          </a>
        </Title>
      </MainRow>

      <ListOfLinks>
        {exchanges.map((exchangeMeta, index) => (
          <li key={index}>
            <ExchangeMediaObj {...exchangeMeta} />
          </li>
        ))}
      </ListOfLinks>
    </StyledFooter>
  );
};

export default Footer;
