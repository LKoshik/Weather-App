async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const apiKey = "dd1453694b563785aac7ee001fc53e27"; // replace with your real API key

    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        const resultDiv = document.getElementById("weatherResult");

        resultDiv.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>🌡️ Temperature: ${data.main.temp} °C</p>
            <p>☁️ Condition: ${data.weather[0].main}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        document.getElementById("weatherResult").innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}
