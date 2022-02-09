/** @jsx jsx */
// Dependencies
import { useEffect, useState } from "react";
import { jsx, css } from "@emotion/react";
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

  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: auto auto;
`;

const Title = styled.h3`
  font-size: 18px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-content: space-between;
  justify-content: flex-start;

  img {
    height: 60px;
    width: 60px;
  }

  img + span {
    display: none;
  }
`;

const childrenCommonStyles = css`
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const InfoColumn = styled.div`
  ${childrenCommonStyles};

  grid-column: 1/2;
  grid-row: 1/2;
  gap: 10px;
`;

const CreditsColumn = styled.div`
  ${childrenCommonStyles};

  grid-column: 2/3;
  grid-row: 1/2;
  justify-content: center;
`;

const LinksColumn = styled.div`
  ${childrenCommonStyles};

  grid-column: 1/3;
  grid-row: 2/3;
  margin-top: 30px;
`;

const SiteDescription = styled.p`
  font-size: 20px;
`;

const StrongText = styled.strong`
  font-weight: 800;
  font-family: "Raleway";
`;

const ListOfLinks = styled.ol`
  display: flex;
  flex-flow: row wrap;
  gap: 50px;
  align-items: center;
  justify-content: center;
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
      <InfoColumn>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <SiteDescription>
          Complete <StrongText>cryptocurrency market</StrongText> coverage with{" "}
          <StrongText>live coin prices</StrongText> and crypto market cap
          featuring 14328 coins on 387 exchanges.
        </SiteDescription>
      </InfoColumn>

      <CreditsColumn>
        <Title>
          <a
            href="https://github.com/cristianelias"
            rel="noreferrer"
            target="_blank"
          >
            Made with 🤍 by Cris
          </a>
        </Title>
      </CreditsColumn>
      <LinksColumn>
        <ListOfLinks>
          {exchanges.map((exchangeMeta, index) => (
            <li key={index}>
              <ExchangeMediaObj {...exchangeMeta} />
            </li>
          ))}
        </ListOfLinks>
      </LinksColumn>
    </StyledFooter>
  );
};

export default Footer;
