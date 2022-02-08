// Dependencies
import axios from "axios";

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

export { getCoinsMarketData, getCoinDetails };
