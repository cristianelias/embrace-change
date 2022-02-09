/** @jsx jsx */
// Dependencies
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";

const ExchangeLink = styled.a`
  color: rgb(145, 145, 145);
  font-size: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Image = styled.img`
  width: 45px;
  border-radius: 50%;
  border: 3px solid #c5c1ff;
  padding: 4px;
`;

const ExchangeName = styled.span`
  font-family: "Raleway";
  font-weight: 800;
  text-align: center;
  font-size: 16px;
`;

const InfoRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Identity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100px;
`;

const ExchangeMediaObj = ({ name, image, url, sinceYear, trustScore }) => {
  return (
    <ExchangeLink href={url} rel="noreferrer" target="_blank">
      <Identity>
        <Image src={image} alt={`${name} exchange logo`} />
        <ExchangeName>{name}</ExchangeName>
      </Identity>
      <InfoRows>
        <span>
          Since <span>{sinceYear}</span>
        </span>
        <span>
          Trust score
          <span>
            <span>#</span>
            {trustScore}
          </span>
        </span>
      </InfoRows>
    </ExchangeLink>
  );
};

export default ExchangeMediaObj;
