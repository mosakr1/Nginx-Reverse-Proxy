const cities = [
  "Cairo", "Alexandria", "Giza", "Aswan", "Luxor", "Mansoura", "Zagazig", "Tanta",
  "London", "Paris", "Berlin", "Madrid", "Rome", "Athens", "Istanbul",
  "New York", "Los Angeles", "Chicago", "Tokyo", "Beijing", "Seoul", "Sydney", "Dubai", "Riyadh", "Doha"
];

const searchInput = document.getElementById("searchInput");
const cityList = document.getElementById("cityList");
const resultDiv = document.getElementById("result");

function showDropdown() {
  cityList.style.display = "block";
  renderCities(cities);
}

function renderCities(list) {
  cityList.innerHTML = "";
  list.forEach(city => {
    const div = document.createElement("div");
    div.className = "city-item";
    div.textContent = city;
    div.onclick = () => {
      searchInput.value = city;
      cityList.style.display = "none";
    };
    cityList.appendChild(div);
  });
}

function filterCities() {
  const query = searchInput.value.toLowerCase();
  const filtered = cities.filter(city => city.toLowerCase().includes(query));
  renderCities(filtered);
}

window.onclick = (event) => {
  if (!event.target.matches('#searchInput')) {
    cityList.style.display = "none";
  }
};

async function getWeather() {
  const city = searchInput.value;
  if (!city) {
    resultDiv.innerHTML = `<p style="color:red;">Please select a city.</p>`;
    return;
  }

  const response = await fetch(`/api/weather?city=${city}`);
  const data = await response.json();

  if (data.error) {
    resultDiv.innerHTML = `<p style="color:red;">${data.error}</p>`;
    return;
  }

  resultDiv.innerHTML = `
    <h2>${data.city}, ${data.country}</h2>
    <p>🌡️ Temperature: ${data.temperature}°C</p>
    <p>☁️ Condition: ${data.condition}</p>
  `;
}
