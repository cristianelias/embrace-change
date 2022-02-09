/** @jsx jsx */
// Dependencies
import { jsx, css } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";

// Action creators
import { setUpdateInterval } from "../../actionCreators/ui";

// Components
import CurrencyControls from "../CurrencyControls/CurrencyControls";
import ControlContainer from "../ControlContainer/ControlContainer";
import Logo from "../Logo/Logo";

const Select = styled.select`
  height: 34px;
  padding: 0 15px;
  text-align: center;
  border-radius: 4px;
  align-self: flex-end;
  border: none;
  outline: none;
  background-color: #fbf9f9;
`;

const StyledHeader = styled.header`
  grid-column: 1/4;
  padding: 15px 5%;
  background-color: rgb(37 34 34 / 76%);

  color: #edebeb;
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

const Label = styled.label`
  font-size: 14px;
`;

const Header = () => {
  const dispatch = useDispatch(useDispatch);

  const getState = (state) => state;
  const { updateInterval } = useSelector(getState).ui;

  return (
    <StyledHeader>
      <Logo />

      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          gap: 34px;
        `}
      >
        <CurrencyControls />

        <ControlContainer>
          <Label htmlFor="updateInterval">Updating every</Label>
          <Select
            name="updateInterval"
            onChange={(e) => dispatch(setUpdateInterval(e.target.value))}
            defaultValue={updateInterval}
            css={css`
              color: #3e3e3e;
            `}
          >
            <option value="1000">1 sec 🕓</option>
            <option value="2000">2 secs 🕓</option>
            <option value="3000">3 secs 🕓</option>
            <option value="4000">4 secs 🕓</option>
            <option value="5000">5 secs 🕓</option>
          </Select>
        </ControlContainer>
      </div>
    </StyledHeader>
  );
};

export default Header;
