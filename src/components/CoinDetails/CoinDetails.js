/** @jsx jsx */
// Dependencies
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import * as sanitizeHtml from "sanitize-html";
import parse from "html-react-parser";

const CoinDetails = ({ symbol, name, description, image }) => {
  /* 👋 Hey there!
  Look, I know this is weird... For some reason CoinGecko is returning 
  HTML inside a description object. Yes, very dangerous.
  I would never use something like this in production, and even
  for this little project I've decided to prevent XSS injection by using this
  sanitize-html npm module. The configuration object that I am passing
  will only accept href attributes that would link to CoinGecko's website.

  In order to avoid using React's dangerouslySetInnerHTML, I am using
  html-react-parser with the clean input from the sanitize-html npm.

  sanitize-html is XSS safe.
  html-react-parser is not.

  That's why I used both. Anyway I would avoid doing this unless it absolutely necessary.
  */
  const cleanDescription = sanitizeHtml(description, {
    allowedTags: ["b", "i", "em", "strong", "a"],
    allowedAttributes: {
      a: ["href"],
    },
    allowedIframeHostnames: ["www.coingecko.com"],
  });

  const Container = styled.article`
    font-family: "Raleway";
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    display: flex;
    flex-direction: column;
    padding: 60px 80px;
    max-width: 700px;
    align-items: center;
    gap: 25px;
    user-select: none;
  `;

  const CoinImage = styled.img`
    border-radius: 50%;
    height: 180px;
    width: 180px;
    padding: 34px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    background-color: white;
  `;

  const CoinName = styled.span`
    font-size: 28px;
    font-weight: 800;
  `;

  const CoinSymbolContainer = styled.span`
    font-size: 24px;
    margin-top: -15px;
  `;

  const CoinSymbolText = styled.span`
    font-weight: 800;
  `;

  const CoinDescription = styled.span`
    margin-top: 18px;
    font-size: 18px;
    line-height: 30px;

    & > a {
      cursor: pointer;
      font-style: italic;
      font-weight: 800;
      font-size: 20px;
    }
  `;

  return (
    <Container>
      <CoinImage src={image} alt={name} />
      <CoinName>{name}</CoinName>

      <CoinSymbolContainer>
        ( <CoinSymbolText>{symbol?.toUpperCase()}</CoinSymbolText> )
      </CoinSymbolContainer>
      <CoinDescription>{parse(cleanDescription)}</CoinDescription>
    </Container>
  );
};

export default CoinDetails;
