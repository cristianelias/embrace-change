/** @jsx jsx */
// Dependencies
import { jsx } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";

// Action creators
import {
  setOrderBy,
  setPerPage,
  setCurrentPage,
} from "../../actionCreators/coinMarket";

// Components
import Select from "../Styled/Select";
import FlexCenteredCol from "../Styled/FlexCenteredCol";

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const Label = styled.label`
  font-size: 16px;
`;

const LeftColumn = styled.div`
  display: flex;
  gap: 40px;
`;

const RightColumn = styled(FlexCenteredCol)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const FlexInputContainer = styled(FlexCenteredCol)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  select {
    width: 100%;
  }
`;

const CoinListFilters = () => {
  const dispatch = useDispatch();
  const { currentPage, orderBy, perPage } = useSelector(
    (state) => state
  ).coinMarket;

  return (
    <MainContainer>
      <LeftColumn>
        <FlexInputContainer>
          <Label htmlFor="page">Page</Label>
          <Select
            name="page"
            onChange={(e) => dispatch(setCurrentPage(e.target.value))}
            defaultValue={currentPage}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Select>
        </FlexInputContainer>

        <FlexInputContainer>
          <Label htmlFor="perPage">Results per page</Label>
          <Select
            name="perPage"
            onChange={(e) => dispatch(setPerPage(e.target.value))}
            defaultValue={perPage}
          >
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="150">150</option>
            <option value="200">200</option>
            <option value="250">250</option>
          </Select>
        </FlexInputContainer>
      </LeftColumn>

      <RightColumn>
        <Label htmlFor="orderBy">Order by</Label>
        <Select
          name="orderBy"
          onChange={(e) => dispatch(setOrderBy(e.target.value))}
          defaultValue={orderBy}
        >
          <option value="market_cap_desc">market_cap_desc</option>
          <option value="gecko_desc">gecko_desc</option>
          <option value="gecko_asc">gecko_asc</option>
          <option value="market_cap_asc">market_cap_asc</option>
          <option value="market_cap_desc">market_cap_desc</option>
          <option value="volume_asc">volume_asc</option>
          <option value="volume_desc">volume_desc</option>
          <option value="id_asc">id_asc</option>
          <option value="id_desc">id_desc</option>
        </Select>
      </RightColumn>
    </MainContainer>
  );
};

export default CoinListFilters;
