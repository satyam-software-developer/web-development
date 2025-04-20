// list.js
export function renderStockList(stocks, containerId, onSelectStock) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // Clear existing content

  stocks.forEach((stock) => {
    const item = document.createElement("div");
    item.className = "stock-item";
    item.innerHTML = `
        <strong>${stock.symbol}</strong><br/>
        Book Value: ${stock.bookValue}<br/>
        Profit: <span class="${
          stock.profit > 0 ? "profit-positive" : "profit-negative"
        }">${stock.profit}</span>
      `;

    item.addEventListener("click", () => {
      onSelectStock(stock.symbol); // Trigger chart and details rendering
    });

    container.appendChild(item);
  });
}
