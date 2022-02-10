/** @jsx jsx */
// Dependencies
import { jsx, useTheme } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";

// Action creators
import { setUpdateInterval } from "../../actionCreators/ui";

// Components
import FlexCenteredCol from "../Styled/FlexCenteredCol";

const Label = styled.label`
  font-size: 14px;
`;

const UpdateIntervalSwitch = () => {
  const theme = useTheme();
  const dispatch = useDispatch(useDispatch);
  const getState = (state) => state;
  const { updateInterval } = useSelector(getState).ui;

  const Select = styled.select`
    height: 34px;
    padding: 0 15px;
    text-align: center;
    border-radius: 4px;
    align-self: flex-end;
    border: none;
    outline: none;
    background: ${theme.ui.switches.background};
    color: ${theme.text.primary};
  `;

  return (
    <FlexCenteredCol>
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
    </FlexCenteredCol>
  );
};

export default UpdateIntervalSwitch;
