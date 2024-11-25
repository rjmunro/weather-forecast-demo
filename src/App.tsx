import { useState } from "react";

import "./App.css";
import { LocationForm } from "./components/LocationForm";
import { WeatherComponent } from "./components/WeatherComponent";
import { LocationResult, useLocationQuery } from "./queries/LocationQuery";

function joinAdminNames(row: LocationResult): [string] {
  return [row.admin1, row.admin2, row.admin3, row.admin4].filter(
    (i) => i && i != ""
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [location, setLocation] = useState<[number, number]>();

  const {
    isLoading: searchLoading,
    error: searchError,
    data: searchData,
  } = useLocationQuery(searchTerm);

  return (
    <>
      <LocationForm value={searchTerm} setValue={setSearchTerm} />
      <div>
        {searchLoading ? (
          <p>Loading...</p>
        ) : searchError ? (
          <p>Error: {searchError.message ?? "Unknown error"}</p>
        ) : (
          <ul className="resultList">
            {searchData?.map((row) => (
              <li
                key={row.id}
                onClick={() => { setLocation([row.latitude, row.longitude]); }}
              >
                <span className="placeName">{row.name}</span>, {joinAdminNames(row).join(", ")},{" "}
                <span className="country">{row.country}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {location ? (
        <WeatherComponent latitude={location[0]} longitude={location[1]} />
      ) : null}
    </>
  );
}

export default App;
