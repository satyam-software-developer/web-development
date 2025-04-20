// details.js

export function renderDetails(stock) {
  const container = document.getElementById("stockDetails");
  if (!container) return;

  container.innerHTML = `
      <h2>${stock.symbol}</h2>
      <p><strong>Book Value:</strong> ${stock.bookValue}</p>
      <p><strong>Profit:</strong> <span class="${
        stock.profit > 0 ? "profit-positive" : "profit-negative"
      }">${stock.profit}</span></p>
      <p><strong>Summary:</strong> ${stock.summary}</p>
    `;
}



