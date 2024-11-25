import { useState } from "react";

import { LocationForm } from "./components/LocationForm";
import { LocationResults } from "./components/LocationResults";
import { WeatherComponent } from "./components/WeatherComponent";

import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [location, setLocation] = useState<[number, number]>();

  return (
    <>
      <LocationForm value={searchTerm} setValue={setSearchTerm} />
      <LocationResults searchTerm={searchTerm} setLocation={setLocation} />
      {location ? (
        <WeatherComponent latitude={location[0]} longitude={location[1]} />
      ) : null}
    </>
  );
}

export default App;
