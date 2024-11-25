import { useState } from "react";

import { LocationForm } from "./components/LocationForm";
import { LocationResults } from "./components/LocationResults";
import { WeatherComponent } from "./components/WeatherComponent";
import { LocationResult } from "./queries/LocationQuery";

import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [location, setLocation] = useState<LocationResult>();
  const [showResults, setShowResults] = useState(true);

  return (
    <>
      <h1>Reactive weather</h1>
      <LocationForm
        value={searchTerm}
        setValue={(searchTerm) => {
          setSearchTerm(searchTerm);
          setShowResults(true);
        }}
      />
      {showResults ? (
        <LocationResults
          searchTerm={searchTerm}
          location={location}
          setLocation={(location) => {
            setLocation(location);
            setShowResults(false);
          }}
        />
      ) : null}
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
