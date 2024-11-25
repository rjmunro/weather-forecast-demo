import { useState } from "react";
import { QueryClient, useQuery } from "react-query";

import "./App.css";
import { LocationForm } from "./components/LocationForm";

interface LocationResult {
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

function joinAdminNames(row: LocationResult): [string] {
  return [row.admin1, row.admin2, row.admin3, row.admin4].filter(
    (i) => i && i != ""
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const {
    isLoading: searchLoading,
    error: searchError,
    data: searchData,
  } = useQuery<LocationResult[]>(
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

  return (
    <>
      <LocationForm value={searchTerm} setValue={setSearchTerm} />
      <div>
        {searchLoading ? (
          <p>Loading...</p>
        ) : searchError ? (
          <p>Error: {searchError.message ?? "Unknown error"}</p>
        ) : (
          <ul>
            {searchData?.map((row) => (
              <li>
                <b>{row.name}</b>, {joinAdminNames(row).join(", ")}, {row.country}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
