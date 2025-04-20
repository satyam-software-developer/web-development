const API_KEY = "https://stocksapi-uhe1.onrender.com/api/stocks/getstocksdata"; // Replace with your actual API key
const BASE_URL = "https://financialmodelingprep.com/api/v3";

export async function fetchStockList(symbols) {
  const responses = await Promise.all(
    symbols.map((symbol) =>
      fetch(`${BASE_URL}/profile/${symbol}?apikey=${API_KEY}`)
    )
  );
  const data = await Promise.all(responses.map((res) => res.json()));
  return data.map((item) => item[0]);
}

export async function fetchStockChart(symbol, range) {
  let endpoint;
  switch (range) {
    case "1m":
      endpoint = "1month";
      break;
    case "3m":
      endpoint = "3month";
      break;
    case "1y":
      endpoint = "1year";
      break;
    case "5y":
      endpoint = "5year";
      break;
    default:
      endpoint = "1month";
  }
  const response = await fetch(
    `${BASE_URL}/historical-price-full/${symbol}?serietype=line&timeseries=${endpoint}&apikey=${API_KEY}`
  );
  const data = await response.json();
  return data.historical;
}

export async function fetchStockSummary(symbol) {
  const response = await fetch(
    `${BASE_URL}/profile/${symbol}?apikey=${API_KEY}`
  );
  const data = await response.json();
  return data[0];
}
