/** @jsx jsx */
// Dependencies
import { jsx, css } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

// Action creators
import { setUpdateInterval } from "../../actionCreators/ui";
import { setCurrency } from "../../actionCreators/preferences";

import logo from "../../assets/images/cheems-logo.png";

const Select = styled.select`
  height: 34px;
  padding: 0 15px;
  text-align: center;
  border-radius: 4px;
  -webkit-align-self: flex-end;
  -ms-flex-item-align: flex-end;
  align-self: flex-end;
  width: 115px;
  border: none;
  outline: none;
  background-color: #fbf9f9;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
  height: 60px;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const StyledHeader = styled.header`
  grid-column: 1/4;
  padding: 0 6%;
  background-color: #ffffffe6;
  border-bottom: 1px solid #ebebeb;
  min-height: 60px;
  height: 120px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
`;

const Label = styled.label`
  font-size: 14px;
`;

const Header = () => {
  const dispatch = useDispatch(useDispatch);

  const getState = (state) => state;
  const { currency } = useSelector(getState).preferences;
  const { updateInterval } = useSelector(getState).ui;

  return (
    <StyledHeader>
      <StyledLink to={`/`}>
        <img
          src={logo}
          alt="Site logo"
          css={css`
            height: 110px;
          `}
        />
        <span
          css={css`
            font-family: "Raleway";
            font-weight: bold;
            font-size: 24px;
            letter-spacing: -0.2px;
          `}
        >
          Coin Market
        </span>
      </StyledLink>

      <div
        css={css`
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          width: 245px;
        `}
      >
        <SelectContainer>
          <Label htmlFor="curency">Your currency</Label>
          <Select
            name="currency"
            onChange={(e) => dispatch(setCurrency(e.target.value))}
            defaultValue={currency}
          >
            <option value="USD">USD 🇺🇸</option>
            <option value="ARS">ARS 🇦🇷</option>
            <option value="EUR">EUR 💶</option>
          </Select>
        </SelectContainer>
        <SelectContainer>
          <Label htmlFor="updateInterval">Updating every</Label>
          <Select
            name="updateInterval"
            onChange={(e) => dispatch(setUpdateInterval(e.target.value))}
            defaultValue={updateInterval}
          >
            <option value="1000">1 sec 🕓</option>
            <option value="2000">2 secs 🕓</option>
            <option value="3000">3 secs 🕓</option>
            <option value="4000">4 secs 🕓</option>
            <option value="5000">5 secs 🕓</option>
          </Select>
        </SelectContainer>
      </div>
    </StyledHeader>
  );
};

export default Header;
