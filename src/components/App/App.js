// Dependencies
import { HashRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

// Components
import CoinMarketPage from "../../pages/CoinMarketPage/CoinMarketPage";
import CoinDetailsPage from "../../pages/CoinDetailsPage/CoinDetailsPage";

// Store
import store from "../../store";

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<CoinMarketPage />} />
        <Route path="/:id/details" element={<CoinDetailsPage />} />
      </Routes>
    </HashRouter>
  </Provider>
);

export default App;
