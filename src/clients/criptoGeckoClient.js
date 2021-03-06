// Dependencies
import axios from "axios";

// Conf
import blacklistedExchanges from "./blacklist";

const baseURL = "https://api.coingecko.com/api/v3/";

const assembleURL = (endpoint) => `${baseURL}${endpoint}`;

const mapCoinsMarketResponse = (fromAPI) => ({
  id: fromAPI.id,
  symbol: fromAPI.symbol,
  name: fromAPI.name,
  image: fromAPI.image,
  currentPrice: fromAPI.current_price,
  marketCapRank: fromAPI.market_cap_rank,
  marketCap: fromAPI.market_cap,
  totalVolume: fromAPI.total_volume,
  priceChange1hPercentInCurrency:
    fromAPI.price_change_percentage_1h_in_currency,
  priceChangePercent24hInCurrency:
    fromAPI.price_change_percentage_24h_in_currency,
  priceChangePercent7dInCurrency:
    fromAPI.price_change_percentage_7d_in_currency,
});

const getCoinsMarketData = async ({
  onError,
  onSuccess,
  currency,
  orderBy,
  perPage,
  currentPage,
}) => {
  const endpoint = `coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${currentPage}&price_change_percentage=1h,24h,7d&sparkline=false`;

  try {
    const response = await axios.get(
      assembleURL(endpoint, { crossDomain: true })
    );
    const coins = response.data.map(mapCoinsMarketResponse);
    onSuccess(coins);
  } catch (error) {
    onError(error);
  }
};

const mapCoinsDetailsResponse = (foreignEntity) => ({
  id: foreignEntity.id,
  symbol: foreignEntity.symbol,
  name: foreignEntity.name,
  description: foreignEntity?.description?.en,
  image: foreignEntity.image.large,
});

const getCoinDetails = async ({ onError, onSuccess, id }) => {
  const endpoint = `coins/${id}?localization=false`;

  try {
    const response = await axios.get(assembleURL(endpoint), {
      crossDomain: true,
    });
    const coins = mapCoinsDetailsResponse(response.data);
    onSuccess(coins);
  } catch (error) {
    onError(error);
  }
};

const mapExchangesResponse = (foreignEntity) => ({
  id: foreignEntity.id,
  name: foreignEntity.name,
  image: foreignEntity.image,
  url: foreignEntity.url,
  sinceYear: foreignEntity.year_established,
  trustScore: foreignEntity.trust_score_rank,
});

const filterBannedExchanges = ({ id }) => {
  return !blacklistedExchanges.includes(id);
};

const getFriendlyExchanges = async ({ onError, onSuccess }) => {
  const endpoint = `exchanges?per_page=21&page=1`;

  try {
    const response = await axios.get(assembleURL(endpoint), {
      crossDomain: true,
    });

    const filteredResponse = response.data.filter(filterBannedExchanges);

    const result = filteredResponse.map(mapExchangesResponse);
    onSuccess(result);
  } catch (error) {
    onError(error);
  }
};

export { getCoinsMarketData, getCoinDetails, getFriendlyExchanges };
