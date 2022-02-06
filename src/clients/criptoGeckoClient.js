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
  totalVolume: fromAPI.total_volume,
  highest24h: fromAPI.high_24h,
  lowest24h: fromAPI.low_24h,
  priceChangePercent7dInCurrency:
    fromAPI.price_change_percentage_7d_in_currency,
  priceChangePercent24h: fromAPI.price_change_percentage_24h,
  priceChangePercent24hInCurrency:
    fromAPI.price_change_percentage_24h_in_currency,
  priceChangePercent30dInCurrency:
    fromAPI.price_change_percentage_30d_in_currency,
});

const getCoinsMarketData = async ({
  onError,
  onSuccess,
  currency,
  orderBy,
  perPage,
  page,
}) => {
  const endpoint = `coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&price_change_percentage=24h,7d,30d&sparkline=false`;

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
