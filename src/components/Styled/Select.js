/** @jsx jsx */
// Dependencies
import styled from "@emotion/styled";
import "@fontsource/ibm-plex-sans";

const Select = styled.select`
  font-family: "IBM Plex Sans";
  height: 34px;
  padding: 0 15px;
  text-align: center;
  border-radius: 4px;
  align-self: flex-end;
  border: none;
  outline: none;
  background: ${(props) => props.theme.ui.switches.background};
  color: ${(props) => props.theme.text.primary};
  box-shadow: ${(props) => props.theme.ui.container.boxShadow};

  &:hover {
    box-shadow: none;
  }
`;

export default Select;
