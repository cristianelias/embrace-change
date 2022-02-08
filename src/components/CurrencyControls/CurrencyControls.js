/** @jsx jsx */
// Dependencies
import { jsx, css } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";

// Action creators
import { setCurrency } from "../../actionCreators/preferences";

// Components
import ControlContainer from "../ControlContainer/ControlContainer";

const PillContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const Pill = styled.div`
  padding: 0px 11px;
  height: 34px;
  text-align: center;
  display: flex;
  align-items: center;
  background-color: #fbf9f9;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px;

  &:hover {
    opacity: 0.8;
  }
`;

const Title = styled.span`
  font-size: 14px;
`;

const CurrencyControls = () => {
  const { currency } = useSelector((state) => state).preferences;
  const dispatch = useDispatch();

  const currenciesConfig = [
    {
      id: "USD",
      emoji: "🇺🇸",
    },
    {
      id: "ARS",
      emoji: "🇦🇷",
    },
    {
      id: "EUR",
      emoji: "🇪🇺",
    },
  ];

  return (
    <ControlContainer>
      <Title>Your currency</Title>
      <PillContainer>
        {currenciesConfig.map(({ id, emoji }) => {
          const selectedStyles = css`
            background-color: #e3e3e3;
          `;

          return (
            <Pill
              css={id === currency ? selectedStyles : ""}
              onClick={() => dispatch(setCurrency(id))}
              key={id}
            >
              {emoji}
            </Pill>
          );
        })}
      </PillContainer>
    </ControlContainer>
  );
};

export default CurrencyControls;
