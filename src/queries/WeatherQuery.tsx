import { useQuery } from "react-query";

interface DailyWeatherResult {
  time: string;
  weather_code: number;
  temperature_2m_max: number;
  temperature_2m_min: number;
  precipitation_probability_max: number;
  wind_speed_10m_max: number;
  wind_gusts_10m_max: number;
}

interface WeatherResult {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: Record<string, string>;
  daily: Record<string, string[] | number[]>;
}

export function useWeatherQuery(latitude: number, longitude: number) {
  return useQuery<DailyWeatherResult[], Error>(
    ["locationSearch", latitude, longitude],

    async () => {
      const url = new URL(
        "https://api.open-meteo.com/v1/forecast?daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max&timezone=auto&format=json"
      );
      url.searchParams.set("latitude", latitude.toString());
      url.searchParams.set("longitude", longitude.toString());
      const res = await fetch(url);
      if (res.status == 200) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const result: WeatherResult = await res.json();
        const days: DailyWeatherResult[] = [];
        for (let i = 0; i < result.daily.time.length; i++) {
          const entries = Object.keys(result.daily_units).map(
            (unit: string) => [unit, result.daily[unit][i]]
          );
          days.push(Object.fromEntries(entries) as DailyWeatherResult);
        }
        return days;
      } else {
        throw new Error(await res.text());
      }
    }
  );
}
