// chart.js
import { fetchChartData } from "./api.js";

let chartInstance = null;

export async function renderChart(symbol, range = "1month") {
  const chartData = await fetchChartData(symbol, range);
  if (!chartData) return;

  const ctx = document.getElementById("stockChart").getContext("2d");

  // Convert UNIX timestamps to readable date format
  const labels = chartData.timestamps.map((ts) =>
    new Date(ts * 1000).toLocaleDateString()
  );
  const prices = chartData.prices;

  const peak = Math.max(...prices);
  const low = Math.min(...prices);

  // Destroy previous chart if it exists
  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: `${symbol} Price`,
          data: prices,
          borderColor: "blue",
          backgroundColor: "lightblue",
          tension: 0.3,
          pointRadius: 2,
        },
      ],
    },
    options: {
      responsive: true,
      interaction: {
        mode: "index",
        intersect: false,
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              return `Price: $${context.parsed.y}`;
            },
          },
        },
        title: {
          display: true,
          text: `${symbol} (${range}) - Peak: $${peak} | Low: $${low}`,
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Date",
          },
        },
        y: {
          title: {
            display: true,
            text: "Price (USD)",
          },
        },
      },
    },
  });
}
