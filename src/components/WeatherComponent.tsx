import { useWeatherQuery } from "../queries/WeatherQuery";

import { DateComponent } from "./DateComponent";

interface props {
  latitude: number;
  longitude: number;
}

const weatherCodes:Record<string, string> = {
  "0": "Clear sky",
  "1": "Mainly clear",
  "2": "Partly cloudy",
  "3": "Overcast",
  "45": "Fog",
  "48": "Depositing rime fog",
  "51": "Light Drizzle",
  "53": "Moderate Drizzle",
  "55": "Dense Drizzle",
  "56": "Freezing Light Drizzle",
  "57": "Dense Freezing Drizzle",
  "61": "Slight Rain",
  "63": "Moderate Rain",
  "65": "Heavy Rain",
  "66": "Freezing Light Rain",
  "67": "Freezing Heavy Rain",
  "71": "Slight Snow fall",
  "73": "Moderate Snow fall",
  "75": "Heavy Snow fall",
  "77": "Snow grains",
  "80": "Slight Rain showers",
  "81": "Moderate Rain showers",
  "82": "Violent Rain showers",
  "85": "Slight Snow showers ",
  "86": "Heavy Snow showers",
  "95": "Thunderstorm: Slight or moderate",
  "96": "Thunderstorm with slight hail",
  "99": "Thunderstorm with heavy hail",
};

export function WeatherComponent({ latitude, longitude }: props) {
  const {
    isLoading,
    error,
    data
  } = useWeatherQuery(latitude, longitude);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="weather">
          {data?.map((day) => (
            <div key={day.time} className="dailyWeather">
              <DateComponent isoDate={day.time} />
              <p>{weatherCodes[day.weather_code.toString()] ?? "unknown"}</p>
              <p>{day.precipitation_probability_max}% chance of rain</p>
              <p>
                {day.temperature_2m_min}°C - {day.temperature_2m_max}°C
              </p>
              <p>
                Wind:
                {" " +
                  day.wind_speed_10m_max.toLocaleString(navigator.language, {
                    maximumFractionDigits: 1,
                  })}
                km/h with gusts of
                {" " +
                  day.wind_gusts_10m_max.toLocaleString(navigator.language, {
                    maximumFractionDigits: 1,
                  })}
                km/h
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
