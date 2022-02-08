// Dependencies
import { useSelector, useDispatch } from "react-redux";

// Action creators
import {
  setOrderBy,
  setPerPage,
  setCurrentPage,
} from "../../actionCreators/coinMarket";

const CoinListFilters = () => {
  const dispatch = useDispatch();
  const { currentPage, orderBy, perPage } = useSelector(
    (state) => state
  ).coinMarket;

  return (
    <div>
      <fieldset>
        <label htmlFor="page">Page</label>
        <select
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
        </select>

        <label htmlFor="orderBy">Order by</label>
        <select
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
        </select>

        <label htmlFor="perPage">Results per page</label>
        <select
          name="perPage"
          onChange={(e) => dispatch(setPerPage(e.target.value))}
          defaultValue={perPage}
        >
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="150">150</option>
          <option value="200">200</option>
          <option value="250">250</option>
        </select>
      </fieldset>
    </div>
  );
};

export default CoinListFilters;
