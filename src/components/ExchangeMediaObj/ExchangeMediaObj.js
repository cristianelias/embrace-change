/** @jsx jsx */
// Dependencies
import { jsx, useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const ExchangeLink = styled.a`
  color: rgb(145, 145, 145);
  font-size: 16px;
  display: flex;
  gap: 10px;
  align-items: flex-end;
`;

const ExchangeName = styled.span`
  font-family: "Raleway";
  font-weight: 800;
  text-align: center;
  font-size: 16px;
  color: #b3b3b3;
`;

const InfoRows = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5px;
`;

const Identity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100px;
`;

const Since = styled.span`
  font-size: 13px;
`;

const TrustLabel = styled.span`
  font-size: 14px;
`;

const Hashtag = styled.span`
  margin-left: 4px;
`;

const TrustValue = styled.span`
  font-size: 15px;
`;

const ExchangeMediaObj = ({ name, image, url, sinceYear, trustScore }) => {
  const theme = useTheme();

  const Image = styled.img`
    width: 25px;
    border-radius: 50%;
    border: 2px solid ${theme.footer.imagesBorder};
    padding: 4px;
  `;

  return (
    <ExchangeLink href={url} rel="noreferrer" target="_blank">
      <Identity>
        <Image src={image} alt={`${name} exchange logo`} />
        <ExchangeName>{name}</ExchangeName>
      </Identity>
      <InfoRows>
        {sinceYear && (
          <Since>
            Since <span>{sinceYear}</span>
          </Since>
        )}

        <span>
          <TrustLabel>Score</TrustLabel>
          <Hashtag>#</Hashtag>
          <TrustValue>{trustScore}</TrustValue>
        </span>
      </InfoRows>
    </ExchangeLink>
  );
};

export default ExchangeMediaObj;
