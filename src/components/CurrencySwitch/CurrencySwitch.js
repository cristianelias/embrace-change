/** @jsx jsx */
// Dependencies
import { jsx, css, useTheme } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";

// Action creators
import { setCurrency } from "../../actionCreators/preferences";

// Components
import FlexCenteredCol from "../Styled/FlexCenteredCol";

const PillContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const Title = styled.span`
  font-size: 14px;
`;

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

const CurrencySwitch = () => {
  const theme = useTheme();
  const { currency } = useSelector((state) => state).preferences;
  const dispatch = useDispatch();

  const Pill = styled.div`
    padding: 0px 11px;
    height: 34px;
    text-align: center;
    display: flex;
    align-items: center;
    background: ${theme.ui.switches.background};
    border-radius: 4px;
    font-size: 20px;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px,
      rgb(0 0 0 / 6%) 0px 1px 2px 0px;

    &:hover {
      opacity: 0.9;
    }
  `;

  return (
    <FlexCenteredCol>
      <Title>Your currency</Title>
      <PillContainer>
        {currenciesConfig.map(({ id, emoji }) => {
          const selectedStyles = css`
            background: ${theme.ui.switches.backgroundSelected};
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
    </FlexCenteredCol>
  );
};

export default CurrencySwitch;
