async function fetchWeather(lat, lon, elementId, cityName) {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`);
        if (!response.ok) throw new Error('날씨 정보를 가져오는데 실패했습니다.');
        const data = await response.json();
        document.getElementById(elementId).innerText = `${cityName}: ${data.current_weather.temperature}°C`;
    } catch (error) {
        document.getElementById(elementId).innerText = `${cityName} 날씨 오류`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchWeather(37.5665, 126.9780, 'weather-seoul', '서울');
    fetchWeather(33.4996, 126.5312, 'weather-jeju', '제주');

    document.getElementById('lucky-btn').addEventListener('click', () => {
        window.location.href = "https://www.google.com/doodles";
    });
});