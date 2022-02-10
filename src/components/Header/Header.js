/** @jsx jsx */
// Dependencies
import { jsx, css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";

// Components
import CurrencySwitch from "../CurrencySwitch/CurrencySwitch";
import FlexCenteredCol from "../Styled/FlexCenteredCol";
import Logo from "../Logo/Logo";
import UpdateIntervalSwitch from "../UpdateIntervalSwitch/UpdateIntervalSwitch";

const Header = () => {
  const theme = useTheme();

  const StyledHeader = styled.header`
    grid-column: 1/4;
    padding: 15px 5%;
    background: ${theme.header.background};

    color: ${theme.text.primary};
    min-height: 60px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;

    img {
      height: 110px;
    }

    @media (max-width: 992px) {
      img {
        height: 80px;

        & + span {
          font-size: 18px;
        }
      }
    }

    @media (max-width: 576px) {
      flex-direction: column;
      padding: 10px 3% 25px;
      gap: 10px;

      img {
        height: 60px;

        & + span {
          font-size: 16px;
        }
      }
    }
  `;

  return (
    <StyledHeader>
      <Logo />

      <FlexCenteredCol
        css={css`
          flex-direction: row;
          gap: 34px;
        `}
      >
        <CurrencySwitch />

        <UpdateIntervalSwitch />
      </FlexCenteredCol>
    </StyledHeader>
  );
};

export default Header;
