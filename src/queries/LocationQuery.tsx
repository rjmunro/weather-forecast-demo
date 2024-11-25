import { useQuery } from "react-query";

export interface LocationResult {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  feature_code: string;
  country_code: string;
  admin1_id: number;
  admin2_id?: number; // Admins apart from first are optional
  admin3_id?: number;
  admin4_id?: number;
  timezone: string;
  population: number;
  postcodes: string[];
  country_id: number;
  country: string;
  admin1: string;
  admin2?: string; // Admins apart from first are optional
  admin3?: string;
  admin4?: string;
}

export function useLocationQuery(searchTerm: string) {
  return useQuery<LocationResult[], Error>(
    ["locationSearch", searchTerm],

    async () => {
      if (searchTerm === "") {
        return [];
      }
      const url = new URL(
        "https://geocoding-api.open-meteo.com/v1/search?count=10&language=en&format=json"
      );
      url.searchParams.set("name", searchTerm);
      const res = await fetch(url);
      if (res.status == 200) {
        return (await res.json()).results;
      } else {
        throw new Error(await res.text());
      }
    }
  );
}
