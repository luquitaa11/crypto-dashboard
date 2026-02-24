const container = document.getElementById("crypto-container");

async function fetchCrypto() {
    const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
    );

    const data = await response.json();

    data.slice(0, 10).forEach(coin => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
      <h3>${coin.name}</h3>
      <p>Preço: $${coin.current_price}</p>
    `;

        container.appendChild(div);
    });
}

fetchCrypto();