import { useState } from "react";

import { LocationForm } from "./components/LocationForm";
import { LocationResults } from "./components/LocationResults";
import { WeatherComponent } from "./components/WeatherComponent";
import { LocationResult } from "./queries/LocationQuery";

import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [location, setLocation] = useState<LocationResult>();

  return (
    <>
      <LocationForm value={searchTerm} setValue={setSearchTerm} />
      <LocationResults searchTerm={searchTerm} setLocation={setLocation} />
      {location ? (
        <>
          <h2>
            {location.name}, {location.country}
          </h2>
          <WeatherComponent
            latitude={location.latitude}
            longitude={location.longitude}
          />
        </>
      ) : null}
    </>
  );
}

export default App;
