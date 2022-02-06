// Dependencies
import { combineReducers } from "redux";

// Reducers
import ui from "./ui";
import coinMarket from "./coinMarket";
import coinDetails from "./coinDetails";
import preferences from "./preferences";

const rootReducer = combineReducers({
  ui,
  coinMarket,
  coinDetails,
  preferences,
});

export default rootReducer;
