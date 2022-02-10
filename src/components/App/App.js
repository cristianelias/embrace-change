// Dependencies
import { HashRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

// Components
import Layout from "../../layouts/Layout";
import CoinMarketPage from "../../pages/CoinMarketPage/CoinMarketPage";
import CoinDetailsPage from "../../pages/CoinDetailsPage/CoinDetailsPage";

// Store
import store from "../../store";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import NotFound from "../../pages/NotFound/NotFound";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const App = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <HashRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<CoinMarketPage />} />
            <Route path="/:id/details" element={<CoinDetailsPage />} />
          </Routes>
        </Layout>
      </HashRouter>
    </Provider>
  </ErrorBoundary>
);

export default App;
