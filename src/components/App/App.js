// Dependencies
import { HashRouter, Routes, Route } from "react-router-dom";

// Components
import CoinMarketPage from "../../pages/CoinMarketPage/CoinMarketPage";
import CoinDetailsPage from "../../pages/CoinDetailsPage/CoinDetailsPage";

const App = () => (
  <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<CoinMarketPage />} />
        <Route path="/:id/details" element={<CoinDetailsPage />} />
      </Routes>
    </HashRouter>
  </>
);

export default App;
